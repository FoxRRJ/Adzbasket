

// Local server setup ---

const express = require("express");
const app = express();
// const ejs = require('ejs');
const fast2sms = require("fast-two-sms");
// const path = require("path");

const sgmail = require("@sendgrid/mail");

const api_key = "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";



const bodyParser = require("body-parser");

app.use(express.static("../public"));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

sgmail.setApiKey(api_key)



app.post("/otp-validation", (req, res) => {

  var entered_otp1 = req.body.pin2;
  // module.exports = {entered_otp};

  // console.log(req.body.number2)
  // console.log(entered_otp1)

  sendMessage(req.body.number2)
})





function sendMessage(number) {
   
  function generateOTP() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

  var one_time_password = generateOTP();
  module.exports = { one_time_password };

  var options = {
    
    authorization: "yGUhgMJkle6Ipc7BnYOxT3EV9H0tjsD4irdALwmqbK1PSZzfvuotnV0Hgua8192JcwIr6sRGP4jmlpLC",
    message:"Welcome to Adzbasket, Your OTP code is " + "" + one_time_password  ,
    numbers: [number],
  }; 
  
  fast2sms.sendMessage(options)
    .then((response) => {
      
      console.log(response)
   

    })
    .catch((error) => {
      console.log(error)
      
    })
}











app.post("/validation-email", (req, res) => {

  var entered_otp2 = req.body.pin1;
  // module.exports = {entered_otp};


  var entered_email = req.body.number1;

  

  // console.log(req.body.number1)
  // console.log(entered_otp2);


  sendMessage1(entered_email)
})





function sendMessage1(eml) {


  function generateOTP1() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  
  var one_time_password1 = generateOTP1();




  
  const message = {
  

    to:[ eml ],
  
    from: {
      name: "AdzBasket",
      email: "rahul.estontec@gmail.com",
    },
  
      subject: " Verify your Email",
  
      text: "Welcome to AdzBasket:Lets get started",
      
      html:" <h2>Thank you for signing up with AdzBasket  </h2>"+ "<h3>Your OTP is</h3>" + one_time_password1 ,
    
    
  
  
  
  };


  sgmail.send(message)

    .then((response) => console.log("Email sent..."))

  .catch((error) => console.log(error.message));


 }






app.listen(4000, function () {
  console.log("server running at port 4000");
});































// const Nexmo = require('nexmo');
// const nexmo = new Nexmo({
//   apiKey: "6b4709f4",
//   apiSecret: "TR10v6h8MR4b21Th"
// });

// app.post('/register', (req, res) => {
//   let phoneNumber = req.body.number;
//   let pin = req.body.pin;
//   let requestId = req.body.requestId;
//   … will send a SMS with a PIN code to the number!
//   console.log(phoneNumber);
//   nexmo.verify.request({number: phoneNumber, brand: 'Adzbasket'}, (err,
//   result) => {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       let requestId = result.request_id;
//       if(result.status == '0') {
//         res.render('verify', {requestId: requestId}); // Success! Now, have your user enter the PIN
//       } else {
//         res.status(401).send(result.error_text);
//       }
//     }
//   });
  // nexmo.verify.check({request_id: requestId, code: pin}, (err, result) => {
  //   if(err) {
  //     // handle the error
  //   } else {
  //     if(result && result.status == '0') { // Success!
  //       res.status(200).send('Account verified!');
  //       res.render('status', {message: 'Account verified! ?'});
  //     } else {
  //       // handle the error - e.g. wrong PIN
  //     }
  //   }
  // });


// });






// app.post('/send-verification-otp', (req, res) => {
  
//   const { mobilenumber } = req.body;

//   client.verify.services(serviceId)
//     .verifications
//     .create({ to: '+91' + mobilenumber, channel: 'sms' })
//     .then(verification => {
//      return res.status(200).json({ verification });
//     })
//     .catch(error => {
//      return  res.status(400).json({ error });
//     });
// });



// app.post('/verify-otp',  (req, res)=> {

//   const { mobilenumber, code } = req.body;
//   client.verify.services(serviceId)
//     .verificationChecks
//     .create({ to: '+91' + mobilenumber, code })
//     .then(verification_check => {
//       return res.status(200).json({ verification_check });
//     })
//     .catch(error => {
//       return res.status(400).json({ error });
//     });

// });






















// console.log(path.join(__dirname, "../public"));

// const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));

// app.use(bodyParser.urlencoded({ extended: true }));


// const {
//   createPool
// } = require('mysql');
// const { isBuffer } = require("util");

// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "customer",
//   connectionLimit: 10

// })


// pool.query('SELECT * FROM customer', (err, result, fields) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// }

// )


////////////////////////////////////////////
