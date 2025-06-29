// function a(){
//     const namei=n
//     console.log(namei)
// }
// console.log(name)


// function syhi(name){
//     return name.toUpperCase();
    
// }
// const name="shlomo"
// console.log(syhi(name))

// console.log("lll")
// function borsdy(age,your){
//     console.log(your-age)
// }
// const agh=22
// const your=2025
// borsdy(agh,your)
//מצביע

// function syhi(){
// console.log('hi')
// }
// const my_function=syhi;
// my_function()
//מצביע ומגדיר
// const my=function a(){
//     console.log("hi")
// }
// my()


//עוד דרך לכתוב בקיצור
// const my_fonction=()=>{
//     console.log("hi")
// }

// const add=(a,b)=>{return a+b}
// const sub=(a,b)=>{return a-b}
// const mul=(a,b)=>{return a*b}
// const div=(a,b)=>{return a/b}
// console.log(add(10,5))
// console.log(sub(10,5))
// console.log(mul(10,5))
// console.log(div(10,5))
//------------------------------
// function syhi(){
//     console.log("hi")
    
// }
// function logger(fn){
//     console.log("start")
//     fn()
//     console.log("end")
// }
// logger(syhi)

//-----------------
// function start(num,molti){
//   return molti(num,sub)
// }
// function molti(num,sub){  
//     return sub(num*2)
// }
// function sub(num){
//     return div(num-5)
// }
// function div(num){
//     const res=num/10
//     return res
// }
// console.log(start(5,molti))
//---------------------------
// if(true){
//     var age=24
// }
// console.log(age)
//--------------
// function a(){
//     let x=5;
//     if(true){
//         let x=10;
//     }
//     console.log(x)
// }
// a()
//-------------------
// console.log(name)
// const name="lll"
//-------------------
// for(const element of Array)
// {
//     //cod
// }
// function print_valu(valu){
//    console.log(valu)
// }
// const nams=["a","b"]
// nams.forEach((el)=>{console.log(`el:${el}`)})
//ארגון מאחורי הקלאים הפעלה על כול איבר ואחכ אני  אומר לו שאני רוצה לראות
// nams.forEach(print_valu)
// const nams=["a","b"]
// function fh(vul){
//    console.log(vul)
// }
// function my(nams,fh){
//     for(let i=0;i<nams.length;i++){
//     fh(nams[i])
// }
// }
// my(nams,fh)

//--------------------- 
// const nums=[1,3]
// const newnums= nums.map((s)=>{
//     return s*2
// })
// console.log(newnums)
//---------------
// const nums=[0,1,3,4]
// newarr= nums.filter((num)=>{
//     return num>-1
// })
// console.log(newarr)
// ---------------------
// function MoltiFactory(num1){
//    return function (num2){
//     console.log(num1*num2) 
//    }
// }
// const by5=MoltiFactory(5);
// by5(10);
// const by6=MoltiFactory(6)
// by6(1)


// function MoltiFactoryNums(num1,num2,num3,num4){
//    return function (num4){
//     console.log(num1*num2*num3*num4) 
//    }
// }
// const a= MoltiFactoryNums(1,2,3,4)
// a(5)
// a(2)
//////
/**
 * 1. CREATE a function factory => function that returns a function - V
 * 2. factory gets spell name - V
 * 3. inner function prints this name - V
 * 4. inner function prints power level - V
 * 5. each factory use - add 1 to power - V
 * 6. inner function should print the power when it was created 
 */

// function spellFactory(spellName){
//     let power = 1;
//      return fn = ()=>{
//         console.log(`spell name: ${spellName}, power: ${power}`)
//         power+=1;
//     }
//     return fn;
// }
// const spell1 = spellFactory("fire") 
// spell1(); 
// const spell2 = spellFactory("ice") 
// spell2();  




