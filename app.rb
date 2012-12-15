require 'sinatra'

events=[[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,{"type"=>"structure","name"=>"oleg"},6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7],
		[0,1,2,3,4,5,6,7]]

## zero per non vista, "no" per ancora da esplorare, "yes" per esplorata
discovery=[
	[0,0,0,0,"yes","yes","yes","yes"],
	[0,0,0,0,0,"yes",0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]]

get '/' do
  @page_title = "Test hex"
  @hex=events
  @esploration=discovery
  erb :index
end

get '/hexstatus/:row/:tile/:status' do
  discovery[params[:row].to_i][params[:tile].to_i]=params[:status]
  "updated row:"+params[:row]+" tile:"+params[:tile]+" with "+params[:status]
end


