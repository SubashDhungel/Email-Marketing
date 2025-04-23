const nodemailer = require('nodemailer');

// Create the transporter manually
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nirajan.dhungel@patancollege.edu.np',
        pass: 'rmpa jipw gyuf yaza' // App password
    }
});

// List of recipients with names
const recipients = [
    { email: 'subashdhungel555@gmail.com', name: 'Subash ' },
    { email: 'rojan.maharjan@patancollege.edu.np', name: 'Rojan ' },
    // { email: 'utsab.acharya@patancollege.edu.np', name: 'Utsab ' },
    { email: 'utsav.acharya@patancollege.edu.np', name: 'Utsav ' },
    { email: 'gagan.gurung@patancollege.edu.np', name: 'Gagan ' },
    { email: 'sujal.karki@patancollege.edu.np', name: 'Sujal' },
    { email: 'swornim.joshi@patancollege.edu.np', name: 'Swornim ' },
    { email: 'rijan.shrestha@patancollege.edu.np', name: 'Rijan ' },
    { email: 'aman.aryal@patancollege.edu.np', name: 'Aman ' },
    { email: 'bibek.shrestha@patancollege.edu.np', name: 'Milabibek ' },
    { email: 'rohit.tandulkar@patancollege.edu.np', name: 'Rohit' },
    { email: 'shishab.shrestha@patancollege.edu.np', name: 'Shishab ' }
];

console.log('🚀 Starting to send emails...');

// Send emails one by one
recipients.forEach((recipient) => {
    console.log(`✉️ Preparing email for ${recipient.name} <${recipient.email}>...`);

    let mailOptions = {
        from: '"Subash Dhungel" <nirajan.dhungel@patancollege.edu.np>',
        to: recipient.email,
        subject: `Quick One! Just Testing 📨`,
        text: `Oi ${recipient.name}!\n\nHope you’re smashing it! Just lobbing you a cheeky little test email.\n\nIf this shows up alright, do ping me back, yeah? Cheers, mate!\n\n- Subash`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`❌ Error sending to ${recipient.email}:`, error.message);
        } else {
            console.log(`✅ Email sent successfully to ${recipient.email}: ${info.response}`);
        }
    });
});
