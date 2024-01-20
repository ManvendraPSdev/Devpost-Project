// import { useState, useEffect } from "react";

// export function CreateToDo() {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");

//     useEffect(() => {
//         // This effect will run only when title or desc changes
//         // Use this to fetch data when needed
//     }, [title, desc]);

//     const handleAddTodo = async () => {
//         try {
//             const response = await fetch("http://localhost:3000/todo", {
//                 method: "POST",
//                 body: JSON.stringify({
//                     title: title,
//                     description: desc
//                 }),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to add todo");
//             }

//             // Optionally, reset input fields after successful addition
//             setTitle("");
//             setDesc("");

//             alert("Todo Added");
//         } catch (error) {
//             console.error("Error adding todo:", error);
//             // Handle error, show user-friendly message, etc.
//         }
//     };

//     return (
//         <div>
//             <input
//                 id="title"
//                 style={{
//                     padding: 10,
//                     margin: 10
//                 }}
//                 type="text"
//                 placeholder="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             /> <br />

//             <input
//                 id="desc"
//                 style={{
//                     padding: 10,
//                     margin: 10
//                 }}
//                 type="text"
//                 placeholder="description"
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//             /> <br />

//             <button
//                 style={{
//                     padding: 10,
//                     margin: 10
//                 }}
//                 onClick={handleAddTodo}
//             >
//                 Add to-do +
//             </button>
//         </div>
//     );
// }










import { useState } from "react";

export function CreateToDo() {

    // react query 
    const [title, setTitle] = useState([]);
    const [desc, setdesc] = useState([]);



    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value  ;
            setTitle(e.target.value)
        }}/> <br />

        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description"  onChange = {function(e){
            const value = e.target.value  ;
            setdesc(e.target.value)
        }}/> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {

            // axios 

            fetch("http://localhost:3000/todo", {
                method: "POST",
                body:JSON.stringify({   // Since we are not using the axios library we just Stringify it 
                title: title,
                description: desc
            }) ,
            headers : {
                "Content-Type" : "application/json"
            }

            })
                .then(async (res) =>{
                    const json = res.json() ;
                    alert("To Do Added")
                })
        }}>Add to-do +</button>
    </div >
}