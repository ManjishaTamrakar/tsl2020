function hello()
{
	alert("hello from function");
}

var num1 = 10;
num2 = 20
let num3 = 30;
sum = num1 + num2 + num3;
document.write("<br/> The sum of " + num1 + " , " + num2 + " ," + num3 + " is " + sum);

 

num1 = 5;
num2 = 4;
if(num1 === num2) {
	document.write("True")
}
else{
	document.write("False");
}
var username = "manjisha";
var phone = 9860039749
var email = "manjishatamrakar5@gmail.com";
var password = "p@ssword";
if ( password =="p@ssword" && (username =="manjisha" || phone == "9860039749")) {
	alert("Login Success");
}
else {
	alert("Credentials not match");
}

counter = 1;
while(counter <= 5){
	document.getElementById("result").innerHTML+=  "Counter: " + counter + "<br>"
	counter++;
}





var num = parseInt(prompt("Enter the number"));
document.getElementById("multable").innerHTML+= "<table border = 1 width= 300px>"; 
for(i = 1; i <=10; i++){
	var mul = i* num ;
	document.getElementById("multable").innerHTML+= "<tr><td>"+ num + "x" + i + "="+ mul +"<br></td></tr>";
}
document.getElementById("multable").innerHTML+= "</table>";


document.write(parseInt(3.1415927))
 var num1 = 5;
 var num2 = "5";
 add = parseInt(num1) + parseInt(num2);
 document.write("<br/>The sum is "+add);

//arrray with date
var da = new Date();
var yr = da.getFullYear();
var dat = da.getDate();
var mon = da.getMonth();
var day = da.getDay();
var tday = new Array("Sunday" , "MOnday" , "Tuesday" , "");
var today = tday[day];
var months = new Array("jan" , "Feb" , "Mar" , "Apr" ,)
var cmonth= months[mon];
document.getElementById("date").innerHTML="Date: "+ today+"," +cmonth + " "+dat + " "+ yr;

function getTotal(){

var qty= document.getElementById("qty").value;
var price= document.getElementById("price").value
var total= qty*price;
document.getElementById("nettotal").innerHTML=total;
return false;
}

function square ( y ){
	return y * y ;
}

function ranImage(){
var myCollection = new Array("Image/1.jpg" , "Image/2.jpg" , "Image/3.jpg" , "Image/4.jpg" , "Image/5.jpg")
var randomImage = Math.floor(Math.random()*myCollection.length)

alert("Random number is" + randomImage);
document.getElementById("randomImages").src=myCollection[randomImage];
}



function ranImage(){
	var myCollection = new Array("Image/a.jpg" , "Image/b.jpg" , "Image/c.jpg" , "Image/d.jpg" , "Image/e.jpg")
	var randomImage = Math.floor(Math.random()*myCollection.length)
	
	
	document.getElementById("randomImages").src=myCollection[randomImage];
	}



function start()
{ 
	var array1 = [ [ 1 , 2 , 3 ], // row 0
				  [4 , 5 , 6 ]  ]; //row 1
	var array2 = [ [ 1 , 2 ], // row 0
				   [3], //row 1
				   [ 4 , 5 , 6 ] ]; // row 2

	outputArray("Values in array1 by row", array1,
		document.getElementById("output1") );
	outputArray("Values in array2 by row", array2,
	   document.getElementById("output2") );
} // end function start

//display array contents
function outputArray( heading, theArray, output )
{
	var results = "";

	// iterates through the set of one-dimensional arrays
	for ( var row in theArray )
	{
		results += "<ol>"; // start ordered list

		//iterates through the elements of each one-dimensional array
		for ( var column in theArray[ row ] )
	{
		results += "<li>" + theArray[ row ][ column ] + "</li>";
	} // end inner for

	results += "</ol>"; //end ordered list
	} // end outer for

	output.innerHTML = results;
} // end function outputArray

window.addEventListener( "load", start, false);

function update(){
    var date = new Date
    var hours = date.getHours();
    if(hours < 10)
    hours = '0'+hours;
documnet.getElementById('hour').innerHTML = hours;
var minutes = date.getMinutes();
if(minutes < 10)
     minutes = '0'+minutes;
document.getElementById('min').innerHTML = minutes;
var seconds = date.getSeconds();
if(seconds < 10)
seconds = '0'+seconds;
document.getElementById("sec").innerHTML = seconds;     
}

//September 8
// Multidimension Arrya
//JavaScript Live Clock
//Math Object

//String Object
var email = "k@meGmal.com";
//alert(email.charAt(2));

var checkat = email.indexOf("@");
var checkdot = email.lastIndexOf(".")
if(checkat >= 1 && checkdot >=1 ) {
   document.write("<br/> Valid Email" ); }
else {
   document.write("<br>Not valid Email");  }

//
document.write("<br> Total length of email "+ email.length);
document.write ("<br>Substring " + email.substr(-4)) ; 
document.write ("<br>toUpperCase " + email.toUpperCase()) ; 
document.write("<br/>toLowerCase " + email.toLowerCase())

function validateForm(){
  var email = document.login.eml.value;
  var pass =  document.login.password.value;
  var checkat = email.indexOf("@");
  var checkdot = email.lastIndexOf(".")

   if(email == "" && pass == "")
   {
    document.getElementById("errorMessage").innerHTML = "Email and Password Required";  
    document.login.eml.focus();
    return false;
   }
   else if(email == ""){
    document.getElementById("errorMessage").innerHTML = "Email is Required";  
    document.login.eml.focus();
    return false;
   }
   else if(pass == ""){
    document.getElementById("errorMessage").innerHTML = "Password is Required";  
    document.login.password.focus();
    return false;
   }
   else if(checkat <= 2 && checkdot <=2 ) {
    document.getElementById("errorMessage").innerHTML = "Email Not Valid";  
    document.login.eml.focus();
    return false;
   }
 
  else if(email == "manjisha@gmail.com" && pass == "manjisha123")
  {
    window.location.href = "welcome.html";
    return false;
  }
  else {

    document.getElementById("errorMessage").innerHTML = "Username and Password Not Valid";  
    document.login.eml.focus();
    return false;

  }
return true;
}



function admissionOpen(){
  window.open('admissionOpen.html','popUpWindow','height=470,width=960,left=100,top=100,resizeable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}

  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  //When page loads, open the modal
  document.body.onload = function(){
    modal.style.display = "block";
  }

  // When the user clicks the button, open the modal
  btn.onclick = function(){
    modal.style.display = "block";
  }
   

   // When the user clicks on <span> (x), close tha modal
   span.onclick = function(){
     modal.style.display = "none";
   }
   

   //When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event){
     if (event.target == modal) {
       modal.style.display = "none";
     }
    }


    function validateForm(){
      var firstname = document.login.fname.value;
      var lastname = document.login.lname.value;
      var email = document.login.eml.value;
      var pass = document.login.password.value;
      var emailfilter =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
      var passfilter = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      var finalEm=emailfilter.test(email)
      var finalPass = passfilter.test(pass)
      if( finalEm == "" && finalPass == "" && firstname =="" && lastname=="")
     {
      document.getElementById("errorMessage").innerHTML = "Fill all the required Field ";  
      document.login.fname.focus();
      return false;
     }else if(firstname == ""){
      document.getElementById("errorMessage").innerHTML = "Name is Required";  
      document.login.fname.focus(); b 
      return false;
     }
     else if(lastname == ""){
      document.getElementById("errorMessage").innerHTML = "Lastname is Required";  
      document.login.lname.focus();
      return false;
     }
     else if(finalEm  == ""){
      document.getElementById("errorMessage").innerHTML = "Email is Required";  
      document.login.eml.focus();
      return false;
     }
     else if(finalPass == ""){
      document.getElementById("errorMessage").innerHTML = "Password is Required";  
      document.login.password.focus();
      return false;
     }
    else if(finalEm==true  && finalPass == true)
    {
      window.location.href = "\welcome.html";
      return false;
    }
    else {
      document.getElementById("errorMessage").innerHTML = "email and password Not Valid";  
      document.login.eml.focus();
      return false;
    }
  return true;
  }


  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHtml = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }





	

