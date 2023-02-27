// if(true)
// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);//10 will print one time a is not defined error as let is block scoped
//let is block scoped and var is globally scoped and functional scoped

// if(true)
// {
//     var a = 10;
//     console.log(a);
// }
// console.log(a); // 10, 10 will be printed 

// if(true)
// {
//     var a = "hello";
//     console.log(a);
//     a ="world";
//     console.log(a)
// }
// let can not be reinitialized but can be updated
// var can be reinitialized and can be updated


// let greeting = "say hi";
// if(true)
// {
//     let greeting = "say hello instead";
//     console.log(greeting);
// }
// console.log(greeting);

//  if(true)
// {
//     const a = "hello";
//     console.log(a);
//    const a="world";
//     console.log(a);
// }


const greeting = "say hi";
if(true)
{
    const greeting = "say hello instead";
    console.log(greeting);
}
console.log(greeting);