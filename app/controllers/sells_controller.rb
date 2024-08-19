class SellsController < ApplicationController
  before_action :self_book, only: %i[create] 
  
  def new 
    @sell = Sell.new
  end

  def create
    @sell = @book.sells.new sell_params
    if @sell.save 
      respond_to do |format|
        format.turbo_stream
      end
    else
      render :new, status: :unprocessable_entity
    end

  end

  private
  def self_book
    @book = Book.find(params[:sell][:book_id])
  end

  def sell_params
    params.require(:sell).permit(:quantity, :day)
  end
end
