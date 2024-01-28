const moment = require('moment')

const buildContract = (data) => {
    const { startDate, endDate, rate, retainer } = data

    //Calculate amount of days
    const totalDays = moment(endDate).diff(moment(startDate), 'days') + 1
    
    //Calculate Total Income
    let totalIncome = totalDays * rate
    if (retainer)
        totalIncome = rate

    //Build a contract
    const updatedContract = {
        ...data,
        totalDays,
        totalIncome
    }
    return updatedContract
}

module.exports = buildContract