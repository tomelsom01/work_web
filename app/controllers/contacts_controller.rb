class ContactsController < ApplicationController
  def new
  end

  def create
  ContactMailer.contact_email(
    contact_params[:name],
    contact_params[:email],
    contact_params[:message],
    contact_params[:phone],
    contact_params[:address]
  ).deliver_now

  redirect_to root_path, notice: "Message sent successfully."

  end
  private

  def contact_params
    params.permit(:name, :email, :message, :phone, :address)
  end
end
