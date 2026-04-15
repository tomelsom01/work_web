class ContactMailer < ApplicationMailer
  def contact_email(params)
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    @phone = params[:phone]
    @address = params[:address]
    @treatment = params[:treatment]

    mail(
      to: "tom@mobilemassagelondon.com",
      subject: "New Contact Form Message",
      from: "no-reply@mobilemassagelondon.com",
      reply_to: @email.presence || "no-reply@mobilemassagelondon.com"
    )
  end
end
