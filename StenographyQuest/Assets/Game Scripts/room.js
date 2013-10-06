#pragma strict


var roomtext = "";
function Start () {

}

function Update () {



}

public function outtext(room, dir){
	if(room == "room1"){
		if(dir == "North"){
		roomtext = "this is north";
		}
		if(dir == "Northeast"){
		roomtext = "this is northeast";
		}
		if(dir == "East"){
		roomtext = "this is east";
		}
		if(dir == "Southeast"){
		roomtext = "this is southest";
		}
		if(dir == "South"){
		roomtext = "this is south";
		}
		if(dir == "Southwest"){
		roomtext = "this is southwest";
		}
		if(dir == "West"){
		roomtext = "this is west";
		}
		if(dir == "Northwest"){
		roomtext = "this is northwest";
		}
		else{roomtext = "this is not a direction";}
	}
	else{roomtext = "this is not a room";}
}

function OnGUI() {
	 GUI.Box(Rect(50,50,200,40),roomtext);
}