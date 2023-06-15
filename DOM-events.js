// import'./style.css';

// function buttonPressed(){
//   document.getElementsByTagName('p')[0].innerHTML = "button was pressed"};

//   function mouseOver()
//   {
//     document.getElementsByClassName('divStyle')[0].innerHTML = 'mouse over '
//     document.getElementsByClassName('divStyle')[0].style.backgroundColor = 'red';
//   }

//   function mouseOut()
//   {
//     document.getElementsByClassName('divStyle')[0].innerHTML = 'mouse out'
//     document.getElementsByClassName('divStyle')[0].style.backgroundColor = 'lightblue';
//   }

//   // document.getElementById('buttonOne').onclick = buttonPressed;
//   // document.getElementsByClassName('divStyle')[0].onmouseover = mouseOver;
//   // document.getElementsByClassName('divStyle')[0].onmouseout = mouseOut;

//   document.getElementById('buttonOne').addEventListener('click', buttonPressed);

//   document.getElementById('buttonOne').removeEventListener('click', buttonPressed);

//   document.getElementsByClassName('divStyle')[0].addEventListener('mouseover', mouseOver);

//  document.getElementsByClassName('divStyle')[0].addEventListener('mouseout',mouseOut);


// console.log('first');
// setTimeout(() => console.log('second'), 3000);
// console.log('third');

// function displayInConsole(result){
// console.log('result:', result)
// }
// function.displayInDiv(result)
// {
//   document.getElementById('demo').innerHTML =result;
// }

// function calculate(p1,p2,displayCallback){
//   let sum = p1+p2;
//   displayCallback(sum);
// }
// calculate(2, 3, dislayInConsole);
// calculate(2,3,displayInDiv)

// function showTime(){
//   let date = new Date();
//   let div = document.getElementById('time');
//   div.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + data.getSeconds();
// }

// //showTime este callbackul nostru, ce vrem sa faca si in ce interval
// setInterval(showTime,3000);

function doSomething(callback){
  console.log('do something');
  callback();
}
function doSomethingElse(callback){
  console.log('do something else');
  callback();
}

function doThirdThing(callback){
  console.log('do third thing');
  callback();
}

doSomething(function(){
  console.log('first call back');
  doSomethingElse(function(){
    console.log('second callback');
    doThirdThing(function(){
      console.log('third callback');
    })
  })
})


