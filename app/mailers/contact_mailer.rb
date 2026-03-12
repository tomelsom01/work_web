class ContactMailer < ApplicationMailer
  default to: "te28@hotmail.com"

  def contact_email(name, email, phone, address, message)
    @name = name
    @email = email
    @phone = phone
    @address = address
    @message = message

    mail(subject: "New Contact Form Message")
  end
end
