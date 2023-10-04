const http =require("http")
// const fs = require("fs")
// const name = 'mallavarapurambabu'
// fs.writeFile('index.html',name,(err)=>{
//     if(err){
//         console.log("Not create file")

//     }else{
//         console.log('create file')
//         fs.readFile('index.html',(err,result)=>{
//             if(err){
//                 console.log("Not create file")
        
//             }else{
//                 console.log(`display the data ${result}`)
//             }
//         })
//     }
// })
let names = [1,2,3]
let name2 = ["rambabu","mothinageswar","abhiyuvanageswar"]
let phone = [9908801378,9963523692,9494474767]
let age = [28,10,8]
let villege = ["Annangi","Maddipadu","Maddipadu"]
let person = names.map((obj,index)=>{
    let details = {Sno:obj,
    name:name2[index],
    phone:phone[index],
    age:age[index],
    villege:villege[index]
}

    return details
})
console.log(person)
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"})
    const sortedPerson = person.sort((a, b) => a.name.localeCompare(b.name));

    res.end(JSON.stringify(sortedPerson));
}).listen(1993,()=>{
    console.log(`this`)
})