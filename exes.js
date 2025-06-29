// let a="shlomo"
// let b="sima";
// a=a+b//simashlomo
// b=a.slice(0,6)
// a=a.slice(6,a.length) 
// console.log(a)
// console.log(b)

// //-------------------------------
// let sum=0;
// const matrix=[['X','x'],['x'],['x'],['x'],['x','x','x']]
// for (let i=0;i<matrix.length;i++)
//     {

//         let m=matrix[i]
//      for(let j=0; j<m.length;j++)
//     {
//       if(m[j] ==='X')
//       {
//         sum+=1
//       }
//     }
// }
// console.log(sum)
// ----------------------
// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
// console.log(family.children[2].name)
// let nams="";
// for(let i=0;i<family.children.length;i++){
//     nams+=family.children[i].name+","
    
// }
// console.log(nams)
// -------------------
let a=['a','b','c']
 for(let i=0;i<a.length-1;i++){
     let b=a.shift()//c
     a.push(b)//a,b,c
}
console.log(a)

// -----------------------
// let bool=0
// let int=0
// let str=0
// const arr=[1,true]
// for(let i =0;i<arr.length;i++){
//     if(typeof arr[i]==='boolean') {
//          bool+=1
//     }
//     else if(typeof arr[i]=== 'number')
//     {
//         int+=1
//     }
//     else  
//     {
//       str+=1
//     }
    
// }
// console.log(`int:${int} str${str} bool${bool}`)
