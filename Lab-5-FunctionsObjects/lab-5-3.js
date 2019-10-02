//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 3:  MAKE THE BANK
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

var bankCustomer = {
	lastName : "Khadilkar",
	branchNumber : 100898,
	accountBalance : 1000,
	interestRate : 0.03,
	multipleAccounts : true,
	makeDeposit: function (depositAmmount){
		
		bankCustomer.accountBalance = bankCustomer.accountBalance + depositAmmount;
		bankCustomer.accountBalance.toFixed(2);
		return "Thank you, your current balance is now $"+ bankCustomer.accountBalance;
		
	},
	makeWithdrawal : function (withdrawalAmmount){
		bankCustomer.accountBalance = bankCustomer.accountBalance - withdrawalAmmount;
		return "Thank you, your current balance is now $"+ bankCustomer.accountBalance;
	},
	addInterest : function (){
        if(bankCustomer.multipleAccounts=== true){
			 
			bankCustomer.accountBalance = (bankCustomer.accountBalance * (0.005 + bankCustomer.interestRate)) + bankCustomer.accountBalance ;
			bankCustomer.accountBalance = bankCustomer.accountBalance.toFixed(2);
			return "Thank you, your current balance is now $"+ bankCustomer.accountBalance;
			 
		 }		
		else
		{	
	
			bankCustomer.accountBalance = (bankCustomer.accountBalance * bankCustomer.interestRate) + bankCustomer.accountBalance ;
			return "Thank you, your current balance is now $"+ bankCustomer.accountBalance;
			
		}
		
	}	
}

console.log("Starting Balance: $"+bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());
