class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }
  
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
      if (number === "+/-") {
        if (isNegative) {
          this.isNegative = false;
          this.currentOperand = this.currentOperand.substring(1);
        } else {
          this.isNegative = true;
          this.currentOperand = "-" + this.currentOperand;
        }
      } else {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
      }
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === "") return;
      if (this.previousOperand !== "") {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }
  
    compute(equal) {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if(!isNaN(prev) && !isNaN(current)){
        switch (this.operation) {
          case "+":
            computation = prev + current;
            break;
          case "-":
            computation = prev - current;
            break;
          case "x":
            computation = prev * current;
            break;
          case "÷":
            computation = prev / current;
            break;
          default:
            return;
        }
      }else if(isNaN(prev)&& isNaN(this.operation)){
        computation = current
      }else{
        return;
      }
      if (equal === "=") {
        this.currentOperand = computation;
      } else if (equal === "%") {
        this.currentOperand = computation / 100;
      } else if (equal === "1/x") {
        if (computation === 0) {
          this.currentOperand = "";
        } else {
          this.currentOperand = 1 / computation;
        }
      } else if (equal === "√x") {
        if (computation === 0) {
          this.currentOperand = "";
        } else {
          this.currentOperand = Math.sqrt(computation);
        }
      } else {
        this.currentOperand = Math.pow(computation, 2);
      }
      this.operation = undefined;
      this.previousOperand = "";
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split(".")[0]);
      const decimalDigits = stringNumber.split(".")[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0,
        });
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousOperandTextElement.innerText = "";
      }
    }
  }
  
  const number = document.querySelectorAll(".num");
  const operation = document.querySelectorAll(".operation");
  const equalsButton = document.querySelectorAll(".result");
  const deleteButton = document.querySelector(".delete");
  const allClearButton = document.querySelectorAll(".all-clear");
  const previousOperandTextElement = document.querySelector(".previous");
  const currentOperandTextElement = document.querySelector(".current");
  
  const isNegative = false;
  
  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );
  
  number.forEach((item) => {
    item.addEventListener("click", () => {
      calculator.appendNumber(item.innerText);
      calculator.updateDisplay();
    });
  });
  
  operation.forEach((item) => {
    item.addEventListener("click", () => {
      calculator.chooseOperation(item.innerText);
      calculator.updateDisplay();
    });
  });
  
  allClearButton.forEach((item) => {
    item.addEventListener("click", () => {
      calculator.clear();
      calculator.updateDisplay();
    });
  });
  
  equalsButton.forEach((item) => {
    item.addEventListener("click", () => {
      calculator.compute(item.innerText);
      calculator.updateDisplay();
    });
  });
  
  deleteButton.addEventListener("click", (div) => {
    calculator.delete();
    calculator.updateDisplay();
  });