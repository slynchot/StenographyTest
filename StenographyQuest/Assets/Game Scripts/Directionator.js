﻿#pragma strict

var lastDirection = "Weast";
public var oneDirection = "Weast";
var rotation = 0.0;
var lastRoom = "abc";
var thisRoom = "def";
// if triggered --> newRoom = Thatroom
function Start () {
}

function Update () {
	rotation = transform.eulerAngles.y;
	lastDirection = oneDirection;

	getOneDirection();
	
	if ((oneDirection != lastDirection) || (thisRoom != lastRoom)) {
//		Room0.sendmessage("outtext", thisroom, onDirection);
	}
	lastRoom = thisRoom;

}

function OnGUI() {
	 GUI.Box(Rect(30,30,200,40),"Facing "+ oneDirection);
}


function getOneDirection() {
	if((337.5 < rotation && rotation <= 360) || (0 < rotation && rotation <= 22.5)) {
		oneDirection = "North";
	}else if(22.5 < rotation && rotation <= 67.5) {
		oneDirection = "Northeast";
	}else if(67.5 < rotation && rotation <= 112.5) {
		oneDirection = "East";
	}else if(112.5 < rotation && rotation <= 157.5) {
		oneDirection = "Southeast";
	}else if(157.5 < rotation && rotation <= 202.5) {
		oneDirection = "South";
	}else if(202.5 < rotation && rotation <= 247.5) {
		oneDirection = "Southwest";
	}else if(247.5 < rotation && rotation <= 292.5) {
		oneDirection = "West";
	}else if(292.5 < rotation && rotation <= 337.5) {
		oneDirection = "Northwest";
	}
}