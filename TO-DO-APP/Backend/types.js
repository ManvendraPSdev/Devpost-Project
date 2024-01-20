// const zod = require("zod");
// //For creating the todos 
// const createTodo = zod.object({
//     title : zod.string() ,
//     discription : zod.string()
// })

// // For Updating the todo 
// const updateTodo = zod.object({
//    id : zod.string() 
// })

// // Exportig in the index.js file 
// module.exports = {
//     createTodo : createTodo ,
//     updateTodo : updateTodo 
// }



const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
