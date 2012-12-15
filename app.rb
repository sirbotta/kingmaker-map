require 'sinatra'
require 'erubis'

events=[[0,1,2,3,4,5,6,7],
		[0,{"type"=>"tomb","name"=>"Barbarian Cairn"},2,{"type"=>"trap","name"=>"Trap-Filled Glade"},4,{"type"=>"structure","name"=>"Oleg's Trade Post"},{"type"=>"hut","name"=>"Bokken's Hut"},7],
		[0,1,{"type"=>"tomb","name"=>"Dead Trapper"},{"type"=>"monster","name"=>"Fairy Nest"},{"type"=>"plant","name"=>"Raddish Patch"},{"type"=>"monster","name"=>"Spider's Nest"},6,7],
		[0,1,{"type"=>"landmark","name"=>"Frog Pond"},{"type"=>"ruin","name"=>"Temple of Elk"},{"type"=>"bridge","name"=>"Thorn River Camp"},5,6,7],
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
  erubis :index
end

get '/hexstatus/:row/:tile/:status' do
  discovery[params[:row].to_i][params[:tile].to_i]=(params[:status] == "reset" ? 0 : params[:status])
  "updated row:"+params[:row]+" tile:"+params[:tile]+" with "+params[:status]
end


