const arr = [{id:1, name:"Kanika"},
             {id:2, name:"Pratham"},
             {id:3, name:"Manya"}]
             
let mul = arr.map((item) => {
    if(item.id == 2){
        item.id*=2;
        return {item};
    }
    else{
        return {item}
    }
})
console.log(mul)

//for in loop
// console.log("Welcome to Programiz!");
// const arr = [{id:1, name:"Kanika"},
//              {id:2, name:"Pratham"},
//              {id:3, name:"Manya"}]
             
// const posts={id:1, name:"kanika", sec:"6b"}
// for(let key in posts){
//     console.log(key, posts[key])
// }


//for of in array of objects
const arrayOfObjects = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

for (const index in arrayOfObjects) {
    const obj = arrayOfObjects[index];
    console.log(`Index: ${index}, Name: ${obj.name}, Age: ${obj.age}`);
}


//map function
// let mul = arr.map((item) => {
//     // console.log(item,"item----------------")
//     if(item.id == 2){
//         // item.id=item*2;
//         // return item;
//         return ({...item,id:item.id*2,kanika:item.id*2,name:"kani"}) 
//     }
//     else{
//         return item
//     }
// })
// console.log(mul,"---------------",arr)

//same with forEach
//  arr.forEach((item) => {
//     if(item.id == 2){
//         item.id*=2;
//         // return {item};
//     }
// })
// console.log(arr,"arrarrarr")