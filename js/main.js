const person = {
    firstName: "Francisco", lastName: "Salinas", email: "Fran@correo.com"
};
console.log(person.firstName, person.lastName);
let divEmpleado = document.getElementById("divEmpleado");
class Persona {
    firstName = "";
    lastName = "";
    age = 0;
    email = "";
    id=0;
    //estatica, solo existe mediante la clase persona, no se hereda, ni haciendo instancias (objetos)
    static total = 0;
    constructor(firstName, lastName, age, email){ 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age; 
        this.email =email;  
        Persona.total++
        this.id = Persona.total;
    }  
    printInfo(div){
        div.insertAdjacentHTML("beforeend",
        `
        <div id="card_${this.id}" class="card text-bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">${this.firstName} ${this.lastName}</div>
            <div class="card-body">
                <h5 class="card-title">${this.email}</h5>
                <p class="card-text">${this.age}</p> 
            </div>
        </div>
        `
        )
        //console.log(this.firstName, this.lastName, this.age, this.email);
    }
}// Class persona

//Empleado hereda de persona / empleado-hijo persona-hijo
class Empleado extends Persona {
    deparrment = "";
    salary = 0.0;
    constructor(firstName, lastName, age, email, deparrment, salary){
        super(firstName, lastName, age, email)
        this.deparrment = deparrment;
        this.salary = salary;
    } 
    calculateSalary(){
        return ( (this.salary*30)*1.16).toFixed(2);
    }
    printInfo(div){
        super.printInfo(div);
        let cardBody = document.getElementById(`card_${this.id}`)
            .getElementsByClassName("card-body")[0];
        cardBody.insertAdjacentHTML("beforeend",
        `
        <p class="card-text">${this.deparrment}</p> 
        <p class="card-text"><strong>${this.calculateSalary()}</strong></p> 
        `
        );
        console.log(this.deparrment, this.salary, this.calculateSalary());
    }
}// Class empleado

let Gerardo = new Persona();

Gerardo.firstName="Gerardo";
Gerardo.lastName="Mendoza";
Gerardo.age=17;
Gerardo.email="GEr@correo.com";

Gerardo.printInfo(divEmpleado);
console.log("----");

let Francisco = new Empleado("Francisco", "Salinas", 27, "Fran@correo.com","Tecnologia",21000.2);
Francisco.printInfo(divEmpleado);

// Clases estaticas
 
console.log(Math.PI);

console.log(Persona.total);

/*
<div class="card text-bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/