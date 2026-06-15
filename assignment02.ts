
function checkLoanEligibility(
    customerName:string,
    creditScore:number,
    income:number,
    isEmployed:boolean,
    debtToIncomeRatio:number) : string
{
    if(creditScore>750)
    {
    return "creditScore satisfied and Loan is automatically approved";
    }
    else if(creditScore<=750 && creditScore>=650)
    {
    if(income>=50000)
    {
        if(isEmployed)
        {
            if(debtToIncomeRatio<40)
            {
                return  customerName + "Loan is approved";
            }
            else
            {
                return customerName +"Loan is denied";
            }
        }
        else
        {
                return customerName +" is unemployed and Loan is denied";
        }
    }
    else
    {
        return customerName +" income is low and Loan is denied";
    }
    }
    else
    {
    return customerName +"Loan is denied";
    }
}

console.log(checkLoanEligibility("John Doe",720,55000.0,true,35.0));