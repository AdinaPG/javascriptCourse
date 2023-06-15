// function loadRequest(url, callbackFunction){
//   let request = new XMLHttpRequest();
//   request.onload = function(){
//     callbackFunction(request);
//   };
//   request.open('GET', url);
//   request.send();
// }
// function displayCallback(req){
//   document.getElementById('demo').innerHTML = req.responseText;
 
// };
// loadRequest('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007', displayCallback);

// function loadRequest(url,callbackFunction){
//   let req = new XMLHttpRequest();
//   req.onreadystatechange = function(){
//     callbackFunction(req);
//   };
//   req.open('GET', url);
//   req.send();
// };

// function displayCallback(req){
//   if(req.readyState ==4 && req.status == 200)
//   {
// document.getElementById('demo').innerHTML  = req.responseText;
//   } else if(req.readyState == 4 && req.status == 404)
//   {
// console.error('NOT FOUND:  ', req.status);
//   } else 
//   {
// console.log('status: ' + req.status + ' ' + req.readyState);
//   }
// }
// loadRequest('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007', displayCallback);


//exemple http request + promise
// function makeRequest(method,url){
//   let promise = new Promise(function(resolve, reject){
//     var req = new XMLHttpRequest();
//     req.onload = function(){
//       if(req.status >= 200 && req.status <= 300){
//         resolve(req.responseText);
//       } else {
//         reject(req.status)
//       }
//     };
//     req.open(method,url);
//     req.send();
//   });
//   return promise;
// }

// makeRequest('GET','https://dog.ceo/api/breeds/image/random1').
// then((res) => {
// var result = JSON.parse(res);
// console.log(result);
// document.getElementsByTagName('img')[0].src = result.message;
// }, 
// (error) => console.log(error));

// .catch((err) => console.error(err) 
// );

//Async-Await ex

async function display(){
  let promise = new Promise(function(resolve,reject){
    resolve('Resolved promise');
  });
  document.getElementById('demo').innerHTML = await promise;
}
display();

function newDisplay(){
  let promise = new Promise(function(resolve,reject){
    setTimeout(() => resolve('Resolved promise with setTimeout'), 3000);
  });
  return promise;
};
async function waitForResponse(){
  document.getElementById('time').innerHTML = await newDisplay();
}
waitForResponse();



