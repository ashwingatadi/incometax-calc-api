const payChart = require('./paychart').payChart;

var paySlab = (annualIncome) => {
    return new Promise((resolve, reject)=>{
        payChart.forEach(pay => {
            if(annualIncome>= pay.taxLowerLimit && annualIncome <= pay.taxUpperLimit){
                resolve(pay);
            }
        });
    })
}

var calculateTax = (income) => {
    return new Promise((resolve, reject)=>{
        var annualIncome = isNaN(parseInt(income)) ? income : parseInt(income)
        if(typeof(annualIncome) != 'number'){
            reject('The annual income is not a number')
        }
        if(annualIncome < 0){
            reject('The annual income should not be less than 0')
        }
        paySlab(annualIncome).then((pay)=>{
            resolve(Math.round((((annualIncome - pay.taxOverLimit) * pay.tax) +  pay.additionalTax)/12))
        }).catch((error) =>{
            reject(error)
        })
    });
}

module.exports = {calculateTax}




