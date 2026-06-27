let balance = 5000;
let action = prompt("Enter 'withdraw' or 'deposit':");
let amount = Number(prompt("Enter the amount you deposit or withdraw:"));


function ATM(action,amount)
{
if (amount > balance )
    console.log ("Can't possible!");
else if ( amount < balance )
{
    if(action == 'withdraw')
    {
        balance = balance - amount;
        console.log("Current Balance = " + balance);
    }
    else if(action == 'deposit')
    {
        balance = balance + amount;
        console.log("Current Balance = " + balance);
    }
}
}

ATM(action,amount);
