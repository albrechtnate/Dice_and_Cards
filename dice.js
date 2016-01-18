//Dice.js
//Nathaniel Albrecht
//I know there are a lot of global variables which is bad and I don't think the list of dice is done the best way, but meh.

function Die(sides) {
	
	this.init = function (sides) {
		this.sides = sides;
		this.element = this.createDie();
		this.setValue();
	};
	
	this.createDie = function () {
		domDie = domContainer.appendChild(document.createElement('div'));
		domDie.setAttribute("class", "die");
		return domDie
	};
	
	this.createDots = function () {
		this.element.innerHTML = "";
		console.log(this);
		for (var i=0;i<this.getValue();i++) {
			domDot = this.element.appendChild(document.createElement('div'));
			domDot.setAttribute("class", "dot");
		}
	};
		
	this.setValue = function (value) {
		this.value = value || 1;
	};
		
	this.getValue = function () {
		return this.value;
	};
		
	this.roll = function () {
		this.value = Math.floor((Math.random() * this.sides)) + 1;
		this.createDots();
	};

	this.init(sides);

}

function Dice(num, sides) {
	
	listOfDice = [];
	
	domContainer = document.getElementById("diceContainer");
	domContainer.innerHTML = "";

	this.init = function (num, sides) {
//        sides ||  Forcing sides of the die to always be six
		sides = 6;
		for (var i=0;i<num;i++) {
			listOfDice.push(new Die(sides));
		}
		this.roll();
	};
	
	this.getFromPosition = function (positionsOfDiceToRoll){
		
		if (positionsOfDiceToRoll == undefined) {
			 return undefined;
		 }
		
		
		returnedDice = [];
		for (position in positionsOfDiceToRoll) {
			 returnedDice.push(listOfDice[positionsOfDiceToRoll[position]]);
		}
		return returnedDice;
	};
		
	
	 this.roll = function (diceToRoll) {
		 if (diceToRoll == undefined) {
			 diceToRoll = new Array();
			 for (var i=0;i<listOfDice.length;i++) {
				 diceToRoll.push(listOfDice[i]);
			 }
		 }
		 
		 console.log("Rolling Dice");
		 for (die in diceToRoll) {
			diceToRoll[die].roll();
		 }
		 console.log(this.getValues());
	 };
	 
	 this.getValues = function () {
		 values = "";
		 for (die in listOfDice) {
			 values += (listOfDice[die].getValue() + " ");
		 }
		 return values;
	 };
	
	this.getChanged = function () {
		changedValues = "";
		for (die in diceToRoll) {
			changedValues += (diceToRoll[die].getValue() + " ");
		}
		return changedValues;
	};
	
	this.elementToObject = function (element){
		for (die in listOfDice){
			if (element == listOfDice[die].element){
				return listOfDice[die];
			}
		}
	};

	this.init(num, sides);
	
	diceToRoll = [];
	
	for (i in listOfDice){
		listOfDice[i].element.onclick=function(){
			if (this.className == "die"){
				diceToRoll.push(dice.elementToObject(this));
				this.className += " selectedToRoll";
				this.setAttribute("class", this.className);
			}
			else if (this.className == "die selectedToRoll"){
				position = diceToRoll.indexOf(dice.elementToObject(this));
				diceToRoll.splice(position, 1);
				this.className = "die";
				this.setAttribute("class", this.className);
			}
		};
	
	document.getElementById("roll").onclick = function(){
		if (diceToRoll.length == 0){
			go = setInterval(function(){dice.roll()},75);
			setTimeout(function(){clearInterval(go)},450);
		}
		else {
			go = setInterval(function(){dice.roll(diceToRoll)},75);
			setTimeout(function(){clearInterval(go)},450);
			setTimeout(function(){
				for ( i in diceToRoll){
					diceToRoll[i].element.setAttribute("class", "die");
					console.log(diceToRoll[i].element);
				}
				diceToRoll.length = 0;
			},600);
		}
	}
		
	}

}

function Begin(num, sides) {
 
	num = num || 1;
	dice = new Dice(num, sides);
}

Begin(5);
