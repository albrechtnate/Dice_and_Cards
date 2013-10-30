//Dice.js
//Nathaniel Albrecht
//I know there are a lot of global variables which is bad and I don't think the list of dice is done the best way, but meh.

function Die(sides) {
	
    this.init = function (sides) {
		this.sides = sides
		this.setValue();
	};
        
	this.setValue = function (value) {
		this.value = value || 1;
	};
        
	this.getValue = function () {
		return this.value;
	};
        
    this.roll = function () {
        this.value = Math.floor((Math.random() * this.sides)) + 1;
    };

	this.init(sides);

}

function Dice(num, sides) {
	
    listOfDice = [];

	this.init = function (num, sides) {
        sides = sides || 6;
		for (var i=0;i<num;i++) {
            listOfDice.push(new Die(sides));
        }
        this.roll();
	};
    
     this.roll = function (positionsOfDiceToRoll) {
         if (positionsOfDiceToRoll == undefined) {
             positionsOfDiceToRoll = new Array();
             for (var i=0;i<listOfDice.length;i++) {
                 positionsOfDiceToRoll.push(i);
             }
         }
         diceToRoll = [];
         for (position in positionsOfDiceToRoll) {
			 diceToRoll.push(listOfDice[positionsOfDiceToRoll[position]]);
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

	this.init(num, sides);

}

function Begin(num, sides) {
 
    num = num || 1;
    dice = new Dice(num, sides);
    
}

Begin();

document.write("<h1>Dice</h1><h3>Nathaniel Albrecht</h3><p><span><b>Update: </b><br><br>There you can now roll only specific die. You can do this by passing a list of the positions of the dies you want as an argument -- this may want to be changed to a list with the actual die objects that you want to roll, but I will leave that up to you. It would be a pretty simple change in the code. If you do not pass in the list of the positions of the die you want to roll, the script will assume that you want to roll them all. The roll function will always output all of the die's values, whether or not they were rolled. If you would like to view only the rolled die's values, you can call the new method <em>getChanged()</em> on <em>dice</em>. This will output the values as a string in the order of the positions you passed into <em>Dice.roll()</em>.</span><br><br>Open the Chrome console to interact with the dice. You can see that you already have one die that we have rolled for you.<br><br>To roll it again, please write <em>dice.roll();</em><br><br>If you would like another die or dice, you can overwrite your current ones by typing in <em>Begin();</em><br><br>You have two arguments you can pass in, number of die and number of sides on all the die. These two arguments are seprated by a comma, for example, Begin(n, s); where n and s are the number of die and sides.<br>You may leave either field or the whole thing blank if you wish, and it will be filled with a default value. If you would like to enter a custom side value but leave the number of die blank, you can write in the word <em>null</em> in place of the n and carry on with entering you custom sides value.<br><br>Have fun rolling your die!<style>body{font-family:sans-serif;padding: 1em;color:#34495e;}h1{margin-bottom:0;}h3{margin-bottom: 1.5em;margin-top: 0;font-weight:normal;}span{color:red;}</style>");