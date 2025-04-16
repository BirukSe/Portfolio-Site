import { Resend } from "resend";

const resend = new Resend("re_NMhLteiS_Gs1yd5Dni8NoeKdqsQtCq9aS");

export const POST = async (req) => {
    console.log("sending email");
  try {
    const body = await req.json();
    console.log("my body is ",body);
    const { name, email, message, lastName,subject } = body;
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["bseyoum003@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>Client Contact!</p>
          <p>Name : {name}</p>
          <p>LastName : {lastName}</p>
          <p>Email : {email}</p>
          <p>message : {message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    console.log("failed the error is ", error);
    return Response.error(error);
  
  }
};