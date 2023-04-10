const person = {
    firstName: "Francisco", lastName: "Salinas", email: "Fran@correo.com"
};
console.log(person.firstName, person.lastName);

class persona {
    firstName = "";
    lastName = "";
    email = "";

    printInfo(){
        console.log(this.firstName, this.lastName, this.email);
    }
}//Class persona

let Gerardo = new persona();

Gerardo.firstName="Gerardo";
Gerardo.lastName="Mendoza";
Gerardo.email="Ger@correo.com";

Gerardo.printInfo();
