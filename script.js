// Async functions and await are non blocking code and will happen in parellell to
// The rest of the program

const getToDos = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data

}

getToDos().then((data)=>{
    console.log(data)
})