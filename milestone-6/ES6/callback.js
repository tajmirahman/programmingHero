function greeting(greetingHandler,name){
    greetingHandler(name);
}


function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening',name)
}
function greetNight(name){
    console.log('Good Night', name)
}

greeting(greetingHandler, 'Utsob');
greeting(greetEvening, 'asik');
greeting(greetNight, 'utsob');