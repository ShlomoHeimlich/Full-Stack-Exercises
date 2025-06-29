// //יצירת אוביקט עי פונקציה

// function Person(name,age,f){
//       return{name,
//              age,
//              a:f
//             }
// }
// const p1=Person('shlomo',22,';')
// const p2=Person('sima',21,'/')
// console.log(p1.name,p1.age,p1.a)
// console.log(p2.name,p2.age,p1.a)
//יצירת אוביקט עי קונסטרקטור
// function Person(name,age){
//       this.name=name;
//       this.age=age;
//       this.syname=function(){
//         console.log("moshe")
//       }
// }
// const p1=new Person('shlomo',30)
// p1.syname()
// console.log(p1.name,p1.age,p1.f1())
//////
// function book(name,ganer,nume){
//     this.name=name,
//     this.ganer=ganer,
//     this.nume=nume
//     this.show=function(){
//         console.log(`${name}   ${ganer}   ${nume}`)
//     }
// }
// const p1=new book('shlomo','sima',10)
// p1.show()
///////
// const a={age:80};
// const b={name:'ari'};
// const c={addr:'bni brak'}
// Object.setPrototypeOf(a,b);
// Object.setPrototypeOf(b,c);
// console.log(a.addr)
/////

// function Person(name,age){
//       this.name=name;
//       this.age=age;
//       this.syname=function(){
//         console.log("moshe")
//       }
// }


// function student(){
//     this.c=[]
// }
// const a_student=new student();
// const a_Person=new Person("aa",89);
// Object.setPrototypeOf(a_student,a_Person)
// a_student.syname()
///////////
// function Car(brand){
//    this.brand=brand;
//    this.drive=function(){
//    console.log('bom bom')
//    }
//    this.fuel=function(){
//     console.log('gaz gas')
//    }
// }
// function tesla(){
//     this.isbateri=true;
//     this.fuel=function(){
//         console.log('bateri')
//     }
// }
// const car1= new Car("mazda");
// const tesla1=new tesla();
// Object.setPrototypeOf(tesla1,car1)
// tesla1.fuel()
// console.log(tesla1.brand)
////////////////////////////
// ////es6
// class Car{
//     constructor(brand){
//         this.brand=brand
//         this.driv=()=>{
//         console.log('aaa')
//         }
//     }
// }
// class Tesla extends Car{
//     constructor(carname){
//         super(carname)
//         this.fuel=()=>{
//             console.log('bzzzz')
//         }
//     }
// }
// const skoda1=new Car('scoda')
// const tesla1=new Tesla('tesla')
// tesla1.fuel()
// console.log(tesla1.brand) 
/////////////////////////

 export const name ={name:'lll'}
 export const age ={gg:'lll'}

 export default{age:30}

