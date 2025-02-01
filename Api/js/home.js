function userDisplay(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>dataDisplay(data))
}


function dataDisplay(data){
    for(const user of data){
        console.log(user.name)
        const ul=document.getElementById('user-ul');
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);

    }
}