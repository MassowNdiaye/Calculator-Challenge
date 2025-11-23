const buttons = document.querySelectorAll(".calc-buttons button");
const display = document.getElementById("display");
const historyList = document.getElementById("history-list");


// Adding function to add history
function addToHistory (operations, result) {
    const item = document.createElement("li");
    item.textContent = `${operations} = ${result}`;
    historyList.prepend(item); //.prepend -> inserts content before existing children
}


// Setting how the buttons works 
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value; //.dataset is an object that contains all attributes that start with data-

    if (value === "C"){
        display.value = "";
        return;
    }

    else if (value === "BACK"){
        display.value = display.value.slice(0, -1 );  //.slice(start, end)
        return
    }

    else if (value === "MC") {
        historyList.innerHTML = ""; //.innerHtml takes all child inside <li> element
        return;
    }

    else if (value === "="){
        const expression = display.value;

        try {
            const answer = eval(expression);
            
            // division by 0 print Infinity so !isFintite help to prevent division for 0
            if (!isFinite(answer)){
                display.value = "Error division by 0";
            } else {
                display.value = answer;
                addToHistory(expression, answer);
            }

            //Using catch to catch potenzial syntax errors
            } catch {
                display.value = "Syntax Error"
            }
            return;
    } else {

    display.value += value; //this append each click combining numbers
    }
});

});