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
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var user = new Student('anand', 'B', 'Krishnankutty');
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map