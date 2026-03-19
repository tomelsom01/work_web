class ContactMailer < ApplicationMailer
  def contact_email(name, email, message, phone, address)
  @name = name
  @email = email
  @message = message
  @phone = phone
  @address = address

  mail(
    to: "te28@hotmail.com",
    subject: "New Contact Form Message",
    from: email
  )
  end
end
