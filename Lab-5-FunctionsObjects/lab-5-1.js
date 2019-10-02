//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  AN AVERAGE FUNCTION
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//################## CREATE YOUR AVERAGE FUNCTION
var HTTP01  = 90 , HTTP02 = 8, HTTP03 = 9, HTTP04 = 6, HTTP05 = 80;


function calculateAverage(par1, par2, par3,par4,par5)
{
	var average = (par1 + par2 +par3 +par4 + par5)/5;
	return average.toFixed(1);
}

console.log(calculateAverage(5,10, 15, 20,25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var overallAverage = calculateAverage(HTTP01, HTTP02, HTTP03, HTTP04, HTTP05);

console.log("overall Average: "+ overallAverage);

if(overallAverage >= 70)
{
	alert ("Sucess");
}
else
{
	alert("Review Required");
}
