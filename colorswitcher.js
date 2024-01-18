// queryselectorall to select all the buttons
const buttons = document.querySelectorAll('.button');
// another queryselector for body to change the background color
const body =document.querySelector('body');

//function lagaya change karne ke liye saare button pe for each use karke
buttons.forEach(function(button){
    console.log(button);// print button
    button.addEventListener('click',function(e){//used event listener to perform click operation
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'red'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
      }
    });
});