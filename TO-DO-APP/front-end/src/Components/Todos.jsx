// // Here Todo is like an Array 

// export function Todos ({todos}){
//     return <div>
//         {/* For Rendering  the todos  */}
//         {/* Now we are going to render the array of todos  */}
//         {todos.map(function(todos){
//             return <div>
//                 <h1>{todos.title}</h1>
//                 <h2>{todos.description}</h2>
//                 <button>{todos.completed == true ? " Completed" : "Mark as Completed "}</button>
//             </div>
//         })}
//     </div>
// }



// Todos.jsx

import React from 'react';

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.title}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
          </div>
        );
      })}
    </div>
  );
}
