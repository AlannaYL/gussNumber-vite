import './style.css'

let answer = Math.floor(Math.random() * 100)
console.log("answer", answer)

let range = {
  maxNum: 100,
  minNum: 0
}

let inputNum = document.querySelector("#subNumber")
const submitButton = document.querySelector("#submitBtn")
const guessedList = document.getElementById('guessedList')
const rangeNum = document.getElementById('rangeNum')
const rangeText = rangeNum.children[1]
rangeText.innerText = range.minNum + "-" + range.maxNum;

submitButton.addEventListener("click", () => {
  let getNum;
  getNum = inputNum.value;
  inputNum.value = ''
  const addNew = document.createElement("p")
  addNew.innerText = getNum
  addNew.classList.add("text-base", "text-gray-200")
  guessedList.appendChild(addNew)
  gameStar(getNum)
})

inputNum.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // 防止表單提交或其他預設行為
    let getNum = inputNum.value;
    inputNum.value = '';
    const addNew = document.createElement("p");
    addNew.innerText = getNum;
    addNew.classList.add("text-base", "text-gray-200");
    guessedList.appendChild(addNew);
    gameStar(getNum);
  }
});

function updateRangeText() {
  rangeText.textContent = range.minNum + "-" + range.maxNum;
}

function gameStar(num) {
  if (num > answer) {
    range.maxNum = num
  } else if (num < answer) {
    range.minNum = num
  } else if (num == answer) {
    rangeText.textContent = "恭喜猜對數字 " + num;
    const addNew = document.createElement("button")
    addNew.classList.add("flex-none", "rounded-md", "bg-indigo-500", "px-3.5", "mt-2", "py-2.5", "text-sm", "font-semibold", "text-white", "shadow-sm", "hover:bg-indigo-400")
    addNew.innerText = "再來一次？"
    rangeNum.appendChild(addNew)

    addNew.addEventListener('click', () => {
      while (guessedList.children.length > 1) {
        guessedList.removeChild(guessedList.lastChild);
      }
      answer = Math.floor(Math.random() * 100);
      console.log("again", answer)
      range.maxNum = 100;
      range.minNum = 0;
      updateRangeText();
      rangeNum.removeChild(addNew);
    })
    return;
  }

  updateRangeText()
}