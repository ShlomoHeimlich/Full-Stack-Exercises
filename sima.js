let family = {
     parents: {},
     children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] 
};
let str = '';
family.children.forEach(child => str+=child.name+' ')
console.log(str)

//////////////
let arr = [1,2,3,4];
let temp;
let length = arr.length-1
for(let i = 0; i<arr.length/2; i++){
    temp = arr[i]
    arr[i] = arr[length]
    arr[length--] = temp
}
console.log(arr)

/////
const arr2 = ["x",5,true,null,"l"];
let cntNum = 0;
let cntBool = 0;
let cntStr = 0;
let cntNull = 0;

arr2.forEach(item => {
    switch(typeof(item)){
      case 'boolean':
        cntBool++;
        break;
      case 'string':
        cntStr++ 
        break;
      case 'number':
        cntNum++ 
        break;
      case 'object':
        cntNull++
        break;
    }
})
console.log(typeof(null))
console.log(`cntBool - ${cntBool}  cntNull - ${cntNull}  cntNum - ${cntNum}  cntStr${cntStr}`)
