function calVal()
{
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const operator = document.getElementById("operator").value;

    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
    
            case '-':
            result = num1 - num2;
            break;
    
            case '*':
            result = num1 * num2;
            break;
    
            case '/':
            result = num1 / num2;
            break;
    
        default:
            break;
    }
    document.getElementById("result").innerText = "Result : "+ result;
    
}