// Async functions and await are non blocking code and will happen in parellell to
// The rest of the program

const getToDos = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    if (response.status !== 200){
        throw new Error('Cannot fetch data')
    }
    
    const data = await response.json()
    return data

}

getToDos()
    .then((data)=>{console.log(data)})
    .catch((err)=> {console.log(err.message)})