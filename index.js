let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
let answer = 0

// Your Code Here
let expenseArray = [weeklyExpenseQuestions, monthlyExpenseQuestions, annualExpenseQuestions]
let totalArray = [0, 0, 0]
for (let i = 0; i < expenseArray.length; i++) {
    // let total = 0
    for (let j = 0; j < expenseArray[i].length; j++) {
        answer = parseFloat(window.prompt(expenseArray[i][j]))
        totalArray[i] += answer
        // total += answer
        // console.log(totalArray[i] + ", " + answer)
    }
    // totalArray[i] = total
}
weeklyExpenses = totalArray[0];
monthlyExpenses = totalArray[1];
annualExpenses = totalArray[2];
