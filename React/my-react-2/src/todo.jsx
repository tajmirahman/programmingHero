// export default function Todo({task}){
//     return (
//         <li>{task}</li>

//     )
// }

export default function Todo({task, isDone}){
    if(isDone === true){
        return(<li>Finish : {task}</li>);
    }
    else{
        return (<li>Work ON : {task}</li>);
    }
}