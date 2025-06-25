// function Phone(model,brand){
//     model,
//     brand,
//     this.details=function(){
//       console.log(`${model}   ${brand}`)
//     }
// }
// //////////////
// function Rectangle(width,height)
// {
//     width,
//     height,
//     this.area=function(){
//         console.log(width*height)
//     }
// }
//////////////
// function BankAccount (owner,balance){
//     owner
//     balance
//     this.deposit=function(add){
//         balance+=add
//     }
//     this.withdraw=function(sub){
//        balance-=sub
//     }
//     this.checkBalance=function(){
//          console.log(balance)
//     }

// }
////////////////////
// function Animal(name){
//    this.name=name;
//    this.speak=function(){
//     console.log(`${name} mak a saund`)
//    }
// }
// function Dog(name){
//     this.brak=function(){
//         console.log(`${this.name} brak`)
//     }
// }
// const a=new Animal('roki')
// const dog=new Dog()
// Object.setPrototypeOf(dog,a)
// dog.speak()
// dog.brak()
//////////////////////////////////////////////////?
// function Vahicle(type){
//   this.type=type;
//   this.descride=function(){
//     console.log(`this is ${type}`)
//    }
// }
// function Car(brand){
//     brand,
//     this.info=function(){
//        console.log(`brand=${brand} type= ${this.type}`)
//     }}

    
// const va=new Vahicle('car')
// const car1=new Car('mazda')
// Object.setPrototypeOf(car1,va)
// car1.descride()
// car1.info()
/////////////////////
// function Shape(x){
//     x;
//     this.area=function(){
//         return 0;
//     }
//     this.radius=function(){
//         return x*x
//     }
// }
// const a=new Shape(10)
// console.log(a.area())
// console.log(a.radius())
////////////////////////////
// class Book{
//     constructor(title, author){
//     title,
//     author,
//     this.info=function(){
//         console.log(`${title} by ${author}`)
//     }
//     }
// }
// const a=new Book('The Hobbit','Tolkien')
// a.info()
/////////////////////
// class Person{
//     constructor(name){
//     this.greet=function(){
//         console.log(`i am ${name}`)
//     }
//     }
// }
// class Student extends Person{
//     constructor(name,scool)
//     {
//     super(name)
//     this.studi=function(){
//         console.log(`i am ${this.mame} i lering in ${scool}`)
//     }
//     }
// }
// const a=new Student("shlomo",'kod kod')
// a.greet()
// a.studi()
///////////////////////
// class Employer{
//     #salery
//     constructor(salery){
//         this.#salery=salery;
//     }
//         getsalery(){
//             console.log(`${this.#salery}`)
//         }

//         work(){
//          console.log('Employee is working')
//     }
//     }

// class Manager extends Employer{
//     constructor(salery){
//     super(salery)
//     }
//     work(){
//       console.log('Manager is managing')
//     }
// } 
// employer1=new Employer(500)
// m=new Manager(1500)
// employer1.getsalery()
// employer1.work()
// m.work()
// m.getsalery()
    





