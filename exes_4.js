// import { readFile } from 'node:fs';
import { log } from 'node:console';
import { readFile, stat, readdir } from 'node:fs/promises';
import path from 'node:path';
///1
// function readFilePromise(path) {
//     return new Promise((res, rej) => {
//         readFile(path, "utf8", (err, data) => {
//             if (err) rej(err);
//             else res(data);
//         });
//     });
// }

// readFilePromise("file1.txt")
//     .then(res => { console.log(res); })
//     .catch(err => { console.log(err); });
//////2
// async function readFileAsync(path){
//     try{
//     const a= await readFile(path,"utf8")
//     return a
//     }catch (err){
//         console.log('failed to fetch');
//     }
// }
// const a=await readFileAsync("fil.txt")
// console.log(a);
/////////////3
// async function getFileSize(path){
//   try{
//     const stats =await stat(path)
//     return stats.size
//   }catch(err){
//     console.log('erroor')
//   }
// }
// const a=await getFileSize("file1.txt")
// console.log(a);
/////////4
// async function listFiles(directory) {
//     try {
//         const files = await readdir(directory)
//         return files
//     } catch (err) {
//         console.log(err);
//     }
// }
// const a = await listFiles(path.resolve('./'))
// console.log(a);
///////////5
// async function readFilesInOrder(files) {
//     for (const file of files) {
//         try {
//             const r = await readFile(file, "utf8")
//             console.log(r);
//         } catch (err) {
//             console.log(err);
//         }
//     }

// }
// const a = await readFilesInOrder(['file1.txt', 'db.txt',])


/////////////////////6
// async function readFilesParallel(files) {
//     try {
//         const contents = await Promise.all(files.map(file => readFile(file, 'utf8')))
//         for (let i = 0; i < files.length; i++) {
//             console.log(`Content of ${files[i]}:`)
//             console.log(contents[i])
//         }
//     } catch (err) {
//         console.log('err');
//     }
// }
// readFilesParallel(['file1.txt','db.txt',])
