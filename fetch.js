//////////////////1
// function user(id){
// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// .then(res=>{return res.json()})
//   .then(res=>{console.log(res.name);
//   })

// }
// user(5)
////////2
// function getPost(postId){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(res=>{return res.json()} )
//      .then(res=>{
//         console.log(res.title)
//     })
// }
// getPost(5)
////3
// function getUserEmail(userId){
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(res=>{return res.json()} )
//      .then(res=>{console.log(res.email)})
// }

// getUserEmail(5)
/////4
// function mani(userId){
//     fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
//     .then(res=>{return res.json()})
//      .then(res=>{console.log(`user :${userId} has :${res.length}` )})
// }
// mani(3)
////////5
// function checkPostExists(postId){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(res=>{return res.json()})
//      .then(res=>{if (!res.id)throw new Error('no')})
//         .then(res=>{console.log('yes')})
//      .catch(res=>{console.log(`no:${res.messege}`);
//      })
    
// }
// checkPostExists(20000)
///////6
// function fetchWithDelay(url, delay){
//     setTimeout(() =>fetch(url)
//      .then(res=> res.text())
//      .then(res=>{console.log(res.slice(0,50));
//      })
//     , delay)
// }
// fetchWithDelay('https://jsonplaceholder.typicode.com/users/2',2000)
/////7
// function showKeys(url){
//    fetch(url)
//    .then(res=>res.json())
//    .then(res=>console.log(`${Object.keys(res)}`)
//    )
// }
// showKeys('https://jsonplaceholder.typicode.com/users/2')