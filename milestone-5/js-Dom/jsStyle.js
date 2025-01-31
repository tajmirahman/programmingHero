const sections= document.getElementsByTagName('section');

for(const section of sections){
    section.style.fontSize= '20px';
    section.style.border='2px solid yellow';
    section.style.marginBottom= '5px';
    section.style.backgroundColor= 'lightblue'; 
}

const somePlacess= document.getElementById('somePlaces');

somePlacess.style.textAlign= 'center';
somePlacess.classList.add('text-color');