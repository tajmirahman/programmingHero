document.getElementById('btn-send').addEventListener('click',()=>{
    const inputText=document.getElementById('input-text');
    const text=inputText.value;
    const commentContainer=document.getElementById('comment-container');
    const p=document.createElement('p');
    commentContainer.appendChild(p);
    p.innerText=text;
})