/*function greeter(person: string)
{
    return 'Hello,'+person;

}*/
/*interface Person
{
    firstName: string;
    lastName: string;
}
function greeter(person:Person)
{
    return 'Hello '+person.firstName+' '+person.lastName;
}

var user = {firstName:'Anand',lastName:'Krishnan'};
document.body.innerHTML = greeter(user);*/

class Student {
    fullName: string;
    constructor(public firstName,public middleInitial,public lastName)
    {
        this.fullName =firstName+" "+middleInitial+" "+lastName;
    }
}
interface Person{
    firstName: string;
    lastName:  string;
}
function greeter(person: Person)
{
    return person.firstName+" "+person.lastName;

}

var user = new Student('anand','B','Krishnankutty');

document.body.innerHTML = greeter(user);
