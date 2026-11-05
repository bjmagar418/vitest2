export function generateResultText(calculateResult){
    let resultText ='';

    if(result === "invalid"){
        resultText = 'invalid input.You must enter valid numver';
    } else if (result !== 'no-calc'){
resultText= "Result:" + result;
    }
    return resultText;
}

export function outputResult(resultText){
    const output = document.getElementById("result");
    outputResult.textContent = resultText;
}