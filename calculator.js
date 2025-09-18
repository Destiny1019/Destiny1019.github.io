document.write("<h2>Calculation Results</h2>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

// Array to store valid numeric results for summary calculations
let results = [];

while (true) {
    // Prompt for first number. If user clicks Cancel, prompt returns null
    let xInput = prompt("Enter the first number:");
    if (xInput === null) break; 

    // Prompt for second number
    let yInput = prompt("Enter the second number:");
    if (yInput === null) break; 

    // Prompt for operator. Accept +, -, *, /, %
    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break; 

    // Convert the number strings to numbers
    // parseFloat preserves decimal values. It will return NaN for invalid input
    let x = parseFloat(xInput);
    let y = parseFloat(yInput);

    let result;

    if (isNaN(x) || isNaN(y)) {
        // If either input is not a number, set an error message
        result = "Error: Invalid number input";
    } else {
        // Both inputs are numeric. Use the operator to compute the result.
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = (y !== 0) ? x / y : "Error: Division by zero";
                break;
            case '%':
                result = (y !== 0) ? x % y : "Error: Division by zero";
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // If the result is a number, store it for summary stats
    if (typeof result === "number" && !isNaN(result)) {
        results.push(result);
    }

    document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

// After the loop, create a summary table for valid numeric results
if (results.length > 0) {
    // Compute minimum, maximum, total and average
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, val) => acc + val, 0);
    let avg = total / results.length;

    document.write("<h2>Summary Table</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    // If there are no valid numeric results, show a message
    document.write("<p>No valid numeric results were entered, so no summary is available.</p>");
}

