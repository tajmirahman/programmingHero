function postFetch(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>postUserDisplay(data))
}


function postUserDisplay(posts){

    const userContainer= document.getElementById('user-container');
    

    for (const post of posts){
        console.log(post);
        const div=document.createElement('div');
        div.classList.add('post')
        div.innerHTML= `
        <h3>User Name: ${post.name}</h3>
        <h3>User Title: ${post.title}</h3>
        <p>User Description: ${post.body}</p>

        `
        userContainer.appendChild(div);
    }
}

postFetch();