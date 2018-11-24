const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
	res.render('contact');
});

app.post('/send', (req, res) => {
	const output = `
	<p>Сообщение от нового пользователя</p>
	<h3>Контакты пользователя</h3>
	<ul>
		<li>Company: ${req.body.name_company}</li>
		<li>Name: ${req.body.user_name}</li>
		<li>Phone: ${req.body.phone}</li>
		<li>Email: ${req.body.email}</li>
	</ul>
	`

	
    let transporter = nodemailer.createTransport({
        host: 'mx1.mirohost.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'test@test.com',
            pass: 'test' 
        },
        tls:{
        	rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Заявка обратного звонка" <info@ecomedtest.com>', // sender address
        to: 'test@test.com', // list of receivers
        subject: 'Новые данные о пользователе', // Subject line
        text: '', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('contact', {msg:'Ваша заявка обработана'});

        
    });
});


const port = process.env.PORT || 3200
app.listen(port, () => console.log(`Server started on port ${port}`));