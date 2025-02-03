function chackAge(){
    const ageInput=document.getElementById('age-input').value;
    const errDisplay=document.getElementById('err-display');
    // console.log(ageInput);

    try{
        const age=parseInt(ageInput);
       

        if(isNaN(age)){
            throw 'enter a number'; 
        }
        if(age<18){
            throw 'bacha cacha not allowed';
            
        }
        else if(age >40){
            throw 'murubbi ra allowed na';
        }
    }
    catch(err){
        
        errDisplay.innerText='Error : ' + err;
    }
    // console.log(1111)
}