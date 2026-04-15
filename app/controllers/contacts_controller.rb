class ContactsController < ApplicationController
  def new
  end
  def create
    begin
      ContactMailer.contact_email(contact_params).deliver_now
      redirect_to root_path, notice: "Message sent successfully."
    rescue => e
      Rails.logger.error "MAIL ERROR: #{e.message}"
      Rails.logger.error e.backtrace.join("\n")
      redirect_to root_path, alert: "There was a problem sending your message. Please try again or WhatsApp me directly on 07356014431."
    end
  end

  private

  def contact_params
    params.permit(:name, :email, :message, :phone, :address, :treatment)
  end
end
