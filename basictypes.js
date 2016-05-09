/*String*/
var fullName = "Anand";
var age = 32;
var sentence = "My name is " + fullName + " .\nand my age is " + age + " and I am doing good";
document.getElementById('basicSentence').innerHTML = sentence;
/*Array*/
//let list: number[] =[2,3,4];
var list = [5, 6, 7];
for (var l in list) {
    var newelement = document.createElement('div');
    newelement.id = list[l].toString();
    newelement.className = 'myNumbers';
    newelement.innerHTML = list[l].toString();
    document.body.appendChild(newelement);
}
/*Tuple array*/
var tupleList;
tupleList = ['Hurray', 23];
//will give error since arr[0] is string and arr[1] is number
//tupleList=[345,'Hurray'];
tupleList[3] = 'anand';
tupleList[4] = 456;
//will give error since [string|number] is allowed as per declaration type
//tupleList=true;
document.getElementById('basicTuple').innerHTML = tupleList.toString();
/*ENUM*/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
//let c: Color = Color.Green;
var colorName = Color[2];
alert(colorName);
//# sourceMappingURL=basictypes.js.map