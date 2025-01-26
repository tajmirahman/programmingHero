// using  inner text create a new section.

const newSection= document.getElementById('section');

const h1= document.createElement('h1');
h1.innerText= 'My Food List';

const ul=document.createElement('ul');

const li1= document.createElement('li');
li1.innerText= 'Biriyani';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText= 'Borhani';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText= 'Salad';
ul.appendChild(li3);


newSection.appendChild(h1);

newSection.appendChild(ul);


// using inner html by create a new section

const sectionDress= document.createElement('section');

sectionDress.innerHTML=`
<h1>This is dress section</h1>
<ul>
<li>Shirt</li>
<li>pant</li>
<li>Shoe</li>
</ul>

`

newSection.appendChild(sectionDress);
