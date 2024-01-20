// // Creating the schema For the todo app 
// const mongoose = require("mongoose") ;
// // XByvIImBSzGlAU56 (Password)
// // mongodb+srv://welcome2github:XByvIImBSzGlAU56@cluster0.pzlwv7e.mongodb.net/?retryWrites=true&w=majority    =>(Connection String)

// mongoose.connect("mongodb+srv://welcome2github:XByvIImBSzGlAU56@cluster0.pzlwv7e.mongodb.net/todo")
// const TodoSchema = mongoose.Schema({
//     title : String ,
//     discription : String ,
//     Completed : Boolean
// })

// const todo = mongoose.model('Todos' , TodoSchema)  // Here we have Created the model name todo 
// module.exports = {
//     todo 
// }


const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
mongoose.connect("mongodb+srv://welcome2github:XByvIImBSzGlAU56@cluster0.pzlwv7e.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type : Boolean ,
        default : false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}