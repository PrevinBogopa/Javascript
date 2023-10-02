'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// console.log((document.querySelector('.guess').value));
// document.querySelector('.guess').value=23;

let score=20;
let secretnumber=Math.trunc(Math.random()*21);
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
   const guess=Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);
if(!guess){
    document.querySelector('.message').textContent='No number';
}
else if(guess===secretnumber){
    document.querySelector('.message').textContent='Correct Number';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secretnumber;

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
else if(guess>secretnumber){

        
if(score>0){
    document.querySelector('.message').textContent='Too high,go lower';
    score--;
    document.querySelector('.score').textContent=score;
}else{
    document.querySelector('.message').textContent='You Lost the game!';
    document.querySelector('.score').textContent=0; 
    document.querySelector('body').style.backgroundColor='#60b347';

}
  
}
else if(guess<secretnumber){
   
    if(score>1){
        document.querySelector('.message').textContent='Too Low,go higher';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='You Lost the game!';
        document.querySelector('.score').textContent=0; 
    }
}

});

document.querySelector('.again').addEventListener('click',function(){

     score=20;
     secretnumber=Math.trunc(Math.random()*101);
     document.querySelector('.message').textContent='Start guessing...';
     document.querySelector('.score').textContent=score;
    
     document.querySelector('.number').textContent='?';
     document.querySelector('.guess').value='';
    

     document.querySelector('body').style.backgroundColor='#222';
     document.querySelector('.number').style.width='15rem';
///front schock n back....shock mountain *2 
})
