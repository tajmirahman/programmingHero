const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data => console.log(data))
}

// async and await use to create api

const createComments = async() =>{
    const res= await fetch('https://jsonplaceholder.typicode.com/comments');
    const data= await res.json();
    console.log(data);
}