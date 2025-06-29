// const array=[1,2,"shlomo",true,"p",90];
// array.unshift(80)
// array.push(70)
// console.log(array)
// array.shift();
// array.pop();
// console.log(array)
// array.splice(1,4)
// array.splice(2,2,"|","]")
// console.log(array)
// const arr2=array.slice(1)
// console.log(arr2)
// console.log(array)
// arr2=[1,2,"shlomo"]
// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i])
// }
////------------------
// const person={
//     name:"shlomo",
//     age:20
// }
// console.log(person.age)
// console.log(Object.keys(person))
// console.log(person)

// console.log(Object.keys(person))
// console.log(person)
// const person={}
//  person.age=40;
// person["name"]='ll';
// person.name="pppp"
// console.log(person);
// const person={};
// const arr=["shlomo","sima"]
// for(let i=0;i<arr.length;i++){
//     person[i]=arr[i]
// }
// console.log(person)
// const arr=['a','d']
// const arr2=['x','z']
// const person={
//     name:"shlomo",
//     age:30,
//     favorit:arr
// }
/////////////////////////////////
const data = [
{
name: 'quot',
birthday:'1-1-1995',
favoriteFoods: {
meats: ['hamburgers&quot','sausages&quot'],
fish: ['salmon','pike'],
},
},
{
name: 'Mark',
birthday:'10-5-1980',
favoriteFoods: {
meats: ['hamburgers','steak','lamb'],
fish: ['tuna','salmon&quot','barracuda']
},
},
{
name:'Mary',
birthday:'1-10-1977',
favoriteFoods: {
meats: ['cow','chicken'],
fish: ['pike'],
},
},
{

name:'Thomas',
birthday:'1-10-1990',
favoriteFoods: {
meats: ['bird','ster&quot'],
fish: ['&quot']
},
},
{
name:'Mary',
birthday:'1-10-1977',
favoriteFoods: {
meats: ['hamburgers','lamb&quot'],
fish: ['bass','tuna'],
},
},
];

// function names (data){
//     let all_nams=[]
//     for(let i=0;i<data.length;i++){
//         all_nams.push(data[i].name)
//     }
//     return all_nams

// }
// allnams=names(data)
// console.log(allnams)



// function before_1990(data){
//     all_1990=[]
//    for(let i=0;i<data.length;i++){
//     let year =parseInt(data[i].birthday.split('-')[2])
//     if(year<1990){
//        all_1990.push(data[i])
//     }
//    }
//    return all_1990
// }
// console.log(before_1990(data))

function num(data){
   const arr=[]
   const num_food={}
   
     for(let i=0;i<data.length;i++)
    
        {
          const favoriteFoods=data[i].favoriteFoods
          for(let key in data[i].favoriteFoods)
            arr.push(...favoriteFoods[key])
        }
        arr.forEach(item => {
            (item in num_food)?num_food[item]++:num_food [item]=1
        })
        console.log(num_food)

}
num(data)




