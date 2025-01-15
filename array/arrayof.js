const firends=['Rahim', 'Karim', 'Jamal', 'Kamal', 'Moni'];

for(let i=0; i<firends.length; i++){
    // console.log(i);
    // console.log(firends[i]);
}

const rev_friends=[];

for(const frnd of firends){
    rev_friends.unshift(frnd);
}
console.log(rev_friends);

for(let frnd of firends){
}
console.log(frnd);