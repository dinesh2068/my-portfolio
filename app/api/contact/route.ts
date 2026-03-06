import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "baladinesh2068@gmail.com",
      subject: "Mail through my Portfolio",
      html: `
        <h3>New message from portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error })
  }
}