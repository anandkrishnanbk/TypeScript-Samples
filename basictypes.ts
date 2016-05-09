/*String*/
let fullName: string = `Anand`;
let age: number = 32;
let sentence: string = `My name is ${ fullName } .
and my age is ${ age } and I am doing good`

document.getElementById('basicSentence').innerHTML = sentence;

/*Array*/

//let list: number[] =[2,3,4];
let list: Array<number> = [5,6,7];

for(var l in list)
{
    var newelement = document.createElement('div');
    newelement.id=list[l].toString();
    newelement.className='myNumbers';
    newelement.innerHTML = list[l].toString();
    document.body.appendChild(newelement);

}

/*Tuple array*/
let tupleList: [string,number];
tupleList =['Hurray',23];

//will give error since arr[0] is string and arr[1] is number
//tupleList=[345,'Hurray'];
tupleList[3]='anand';
tupleList[4]=456;
//will give error since [string|number] is allowed as per declaration type
//tupleList=true;
document.getElementById('basicTuple').innerHTML = tupleList.toString();


/*ENUM*/
enum Color {Red=1,Green=2,Blue=4};
//let c: Color = Color.Green;
let colorName: string = Color[2];

alert(colorName);





