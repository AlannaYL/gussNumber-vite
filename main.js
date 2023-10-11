import './style.css'

let answer = Math.floor(Math.random() * 100)

let range = {
  maxNum: 100,
  minNum: 0
}

let inputNum = document.querySelector("#subNumber")
const submitButton = document.querySelector("#submitBtn")
const guessedList = document.getElementById('guessedList')


submitButton.addEventListener("click", () => {
  let getNum;
  getNum = inputNum.value;
  inputNum.value = ''
  const addNew = document.createElement("p")
  addNew.innerText = getNum
  addNew.classList.add("text-base", "text-gray-200")
  guessedList.appendChild(addNew)

})

function gameStar(num) {
  if (num > answer) {
    return range.maxNum = num
  } else if (num < answer) {
    return range.minNum = num
  }
}