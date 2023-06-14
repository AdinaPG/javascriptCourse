///Write a JavaScript program to display the current day and time in the following format.
//Output:Today is Tuesday
var currentDay = new Date();
console.log('Today is: ', currentDay.toDateString());

//Current time is : 10 PM : 30 : 38
var currentTime = new Date();
console.log('Current time is: ', currentDay.toString());

//Write a JavaScript function to find out if 1st January will be a Sunday between 2014 and 2050.

for(var year = 2014; year <=2050; year++)
{
  var day = new Date(year, 0 , 1);
  if(day.getDay() == 0)
  {
    console.log("1st January is being a Sunday  " , year);
  }
}
//Write a JavaScript function to calculate the days left before Christmas.
currentDay = new Date();
var dayTillChristmas = new Date(today.getFullYear(), 11, 25);
if (currentDay.getMonth() == 11 && currentDayday.getDate() >25) 
{
  dayTillChristmas.setFullYear(dayTillChristmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((dayTillChristmas.getTime()-currentDay.getTime())/(one_day)), " days left until Christmas!");

//Write a JavaScript function to get the website URL (loading page).
console.log(document.URL);

//?? Write a JavaScript function to get the filename extension from a filename given as parameter.
//??Write a JavaScript function to create another string from a given string with the first character of the given string added to the front and back.

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function uppercase(string)
{
  var array1 = string.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("accept string as a parameter"));

//Write a function with an array of employee object as parameter. Display the employees which have more that 3 years since they have a job.
// Employee object {name: 'Name', employment-date: '2001-1-1'}
// Sort ascending and descending an array of string dates E.g ['2001-1-1', '2003-2-3', '2009-8-8']
// Write a function to check if a string is palindrom.
// Add in an existing html page an div with a span and an image as childs. After that modify the text and the background color as you wish.

