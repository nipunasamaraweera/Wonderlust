const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.sendEmail = functions.firestore
    .document("Planner/{plannerId}")
    .onCreate((snap, context) => {
        const data = snap.data();
        const userEnteredEmail = data.email;

        // Set up a Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "dlsakbo@gmail.com", 
                pass: "mvwjtqxbbwlzzkeb",
            },
        });

       
        const mailOptions = {
            from: "dlsakbo@gmail.com",
            to: "userEnteredEmail",
            subject: "New Planner Data",
            text: `New Planner Data Submitted:\n
                   Destination: ${data.destination}\n
                   Start Date: ${data.startDate}\n
                   End Date: ${data.endDate}\n
                   ...`, 
        };

    
        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return;
            }
            console.log("Email sent:", info.response);
        });
    });
