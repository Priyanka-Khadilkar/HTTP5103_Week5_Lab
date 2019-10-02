//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  I OBJECT!
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

var meObject = {
	firstName : "Priyanka",
	lastName : "Khadilkar",
	Email : "piyu.khadilkar@gmail.com",
	PhoneNumber : "647-687-0653",
	popupMsg : function ()
	{
		alert("My name is :" + meObject.firstName +" "+ meObject.lastName);
	}
};

console.log("Priyanka's email: "+meObject.Email);
console.log("Priyanka's PhoneNumber: "+meObject.PhoneNumber);

//alert("My name is :" + meObject.firstName +" "+ meObject.lastName);

meObject.popupMsg();
