function numPromt() {
    var input;
    while (true) {
    input = prompt("Please enter a number:");
        if (!isNaN(input)&& input !== null && input.trim() !== "") {
            return parseInt(input, 10);
        } else {
            alert("invalid try again");
        }
    }
}

function numOutput(num, x) {
    let result = '';
    for (let i = 0; i < x; i++) {
        result += num + ' ';
    }
    return result.trim();
        }

function oddNum(n) {
    let cout = 'Number inputted: ' + n + '\n';
    for (let i = n; i > 0; i--) {
        cout += numOutput(i, n) + '\n';
    }
    return cout;
}

function evenNum(n) {
    let cout='Number inputted: '+n+'\n';
    for (let i = n; i > 0; i--) {
        cout+=numOutput(i, i)+'\n';
    }
    return cout;
}

function main() {
    const num1=numPromt();
    let cout;
    if (num1%2===0) {
        cout=evenNum(num1);
    } else {
        cout=oddNum(num1);
    }
    document.getElementById('output').innerText=cout;
}

window.onload = main;