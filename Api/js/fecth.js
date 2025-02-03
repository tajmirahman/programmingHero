// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))


function onLoad() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res=>res.json())
    .then(data=>onload2(data));

}

function onload2(data){
    console.log(data);
}

function onLoad3(){
    const url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

function displayUser(data){
  for(const user of data){
    const ul=document.getElementById('ul-list');
    const li=document.createElement('li');
    li.innerText= user.name;
    ul.appendChild(li);
    
    
  }
}


