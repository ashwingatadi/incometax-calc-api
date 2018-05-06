var payChart = [
    {
        taxLowerLimit: 0,
        taxUpperLimit: 18200,
        taxOverLimit: 0,
        tax: 0,
        additionalTax: 0
    },
    {
        taxLowerLimit: 18201,
        taxUpperLimit: 37000,
        taxOverLimit: 18200,
        tax: 0.19,
        additionalTax: 0
    },
    {
        taxLowerLimit: 37001,
        taxUpperLimit: 87000,
        taxOverLimit: 37000,
        tax: 0.325,
        additionalTax: 3572
    },
    {
        taxLowerLimit: 87001,
        taxUpperLimit: 180000,
        taxOverLimit: 87000,
        tax: 0.37,
        additionalTax: 19822
    },
    {
        taxLowerLimit: 180001,
        taxUpperLimit: Number.MAX_VALUE,
        taxOverLimit:180000,
        tax: 0.45,
        additionalTax: 54232
    }
]

module.exports = {payChart};