const form = document.querySelector('form');
const deleteButton = document.querySelector('.delete-button');

function trackExpense(event) {
event.preventDefault();
console.log(event);
// const [name, date, amount] = event.target
const [name, date, amount] = [...event.target].map(el => el.value);
// const [name, date, amount] = [event.target[0].value, event.target[1].value, event.target[2].value]
event.target = [name.value, date.value, amount.value]
  let tbody = document.querySelector('.exp-container')
  let tr = document.createElement('tr')
  let td1 = document.createElement('td')
  const nameValue = document.createTextNode(name);
  const dateValue = document.createTextNode(date);
  const amountValue = document.createTextNode(amount);
  let td4 = document.createElement('td')
  let deleteBox = document.createElement('input')
  deleteBox.setAttribute('type', 'checkbox');
  td1.appendChild(nameValue);
  tr.appendChild(td1);
  let td2 = document.createElement('td')
  td2.appendChild(dateValue);
  tr.appendChild(td2);
  let td3 = document.createElement('td');
  td3.appendChild(amountValue);
  tr.appendChild(td3);
  td4.appendChild(deleteBox)
  tr.appendChild(td4)
  tbody.appendChild(tr);
  form.reset();
}

function removeAll(event) {
//  console.log(event)
 let expenses = event.target.parentElement.parentElement.parentElement.nextElementSibling.children
 for(const item of expenses) {
   if(item.lastElementChild.lastElementChild.checked)
    item.remove()
  console.log(item)
 }
}

form.addEventListener('submit', trackExpense)
deleteButton.addEventListener('click', removeAll)

