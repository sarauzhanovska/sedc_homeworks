async function getTheTodo() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json();
    console.log('TodoId 1:', data);
}

getTheTodo();

async function getTheTodoAndUserDetails() {
    let todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos")
    let todo = await todoResponse.json();
    console.log('Todo:',todo);

    let userId = todo[0].userId;

    let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let userDetails = await userResponse.json();
    console.log('User Details:', userDetails);

}

getTheTodoAndUserDetails();
