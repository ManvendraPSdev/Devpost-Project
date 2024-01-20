// // Creating the express boiler plate code 
// // with express.json middleware
// const express = require("express");
// const { createTodo, updateTodo } = require("./type");
// const { todo } = require("./mongo");
// const app = express();
// app.use(express.json());

// app.post("/todo", async function (req, res) {  // Created the post end point for Creating the todo

//     const createPayload = req.body;
//     const parsedPayload = createTodo.safeParse(createPayload);
//     if (!parsedPayload.success) {
//         res.status(411).json({
//             msg: "You have send the Wrong inputs can't post ",
//         })
//         return;
//     }
//     // Put it in the mongodb 
//     await todo.create({
//         title: createpayload.title,
//         description: createpayload.description,
//         completed: false
//     })
//     res.json({
//         msg: "Todo Created"
//     })

// })

// app.get("/todo", async function (req, res) {  // Created the get end point for Geting the todos 
//     const todo = await todo.find({});
//     console.log(todo);
//     res.json({
//         msg: "todos"
//     })
// })

// app.put("/completed", async function (req, res) {  // Creating the put end point for marking the todos as Completed 
//     const updatePayload = req.body;
//     const parsedPayload = updateTodo.safeParse(updatePayload);
//     if (!parsedPayload.success) {
//         res.status(411).json({
//             msg: "You have send the Wrong inputs can't put "
//         })
//         return
//     }
//     // Update the Specific todo and mark it as Completed 
//     await todo.update(
//         {
//             _id: req.body.id
//         },
//         {
//             completed: true
//         }
//     )
//     res.json({
//         msg : "Todo marked as Completed"
//     })
// })

// app.listen(3000);



const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    // const todos = await todo.find({});

    res.json({
        todos: []
    })

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);
