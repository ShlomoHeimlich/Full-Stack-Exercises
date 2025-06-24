// function double(x){
//  return x*2
// }
// const nums=[1,2,3]
// const result=nums.map(double)
// console.log(result) 
// -----------------------
// function even(valu){
// {
//      return valu%2===0
//   }
// }
// const numbers=[1,2,3,4,5]
// const result1=numbers.filter(even)
// console.log(result1)
// ---------------------------
// function chec(valu){
//   return valu===arr[0] && typeof(valu)==="string"|| valu===arr[arr.length-1] && typeof(valu)==="string"
// }
// const arr=[ 42, true, "bye"]
// const rezolt=arr.filter(chec)
// console.log(rezolt)
// -------------------------
// const word='shlomo';
// let dict ={a:0,o:0,i:0,u:0,e:0};
// for(let i=0;i<word.length;i++){
//     if (word[i]==='a')
//         dict.a+=1
//     else if(word[i]==='o')
//        dict.o+=1
//     else if(word[i]==='i')
//        dict.i+=1
//     else if(word[i]==='u')
//        dict.u+=1
//     else if(word[i]==='e')
//        dict.e+=1
// }
// console.log(dict)
// -----------------------------
// capitalize=(x)=>{
//    return x.toUpperCase();

// const { captureOwnerStack } = require("react");

   
// }
// console.log(capitalize('shlomo')) 
// ------------------------------
// תרגיל לא גמור 6

// const shiftLetters=(txt)=>{
//    let newstr='';
//      for(let i=0;i<txt.length;i++)
//     {
//       if(txt[i]==' '){
//          newstr+=' '
//       }
//       else{
//          let numletter  = txt.charCodeAt(i);
//          let letterstr = String.fromCharCode(numletter+1)
//          newstr+=letterstr;
//       }
//     }
//     console.log(newstr)
// }
// תרגיל 7
// capitalize=(x)=>{
//    return x.toUpperCase();
// }
// let new_str="";
// const cheng=(txt)=>{
//     const words=txt.split(" ");
//     for(let i=0;i<words.length;i++){
//         if(i%2!=0){
//            let fh=capitalize(words[i])
//        new_str+=fh+" ";
//         }
//        else{
//         new_str+=words[i]+" ";
//        }
//     }
//     console.log(new_str)
// }
// cheng('aaa bbb ccc')

