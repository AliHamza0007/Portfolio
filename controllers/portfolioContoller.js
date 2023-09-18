const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "confortzoneuk@gmail.com",
    pass: "kkwocpwjgmgyjdym",
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    async function main() {
      const info = await transporter.sendMail({
        from: `${email}`, // sender address
        to: "hamzasarwer9@gmail.com", // list of receivers
        subject: "Portfolio Contact-us Email", // Subject line
        text: "Hi Ali", // plain text body
        html: ` <ul>
        <li><p>Name : ${name}</p></li>
        <li><p>Email : ${email}</p></li>
        <li><p>Message : ${msg}</p></li>
      </ul>`,
      });

      console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
    async function user() {
      const info = await transporter.sendMail({
        from: "hamzasarwer9@gmail.com", // list of receivers
        to: `${email}`, // reciver address

        subject: "ALI HAMZA Portfolio sending Msg Thanks", // Subject line

        html: `<h3>
  Thanks for contact with me ,Please Refer me or helping me to get hired at Good Position .</h3><h3>Thanks ${name} </h3>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
    }

    user().catch(console.error);

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
