import { sendMail } from "@/services/mailService";
const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        const name = req.body.name;
        const email = req.body.email;
        const msg = req.body.msg;
        //Do some thing
        await sendMail(
          "New Submission on Personal Portfolio Form 📞",
          "hussnainahmad25@gmail.com",
          `You got new submission on contact form of your Portfolio Website 🚀\nName: ${name}\nEmail: ${email}\nMessage: ${msg}`
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;