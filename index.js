const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
const tableContainer = document.querySelector(".table-element");

//Adding showing data in a table
function onAddForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const startDate = document.getElementById("startDate").value;
  const gender = document.getElementById("gender").value;

  

  tbodyEl.innerHTML += `
      <tr>
          <td>${name}</td>
          <td>${age}</td>
          <td>${startDate}</td>
          <td>${gender}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
  `;

  //saving and showing in localstorage 

  localStorage.setItem("name",JSON.stringify(name))
  localStorage.setItem("age",JSON.stringify(age))
  localStorage.setItem("startDate",JSON.stringify(startDate))
  localStorage.setItem("gender",JSON.stringify(gender))


 

};


//deleting one row at a time

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}


formEl.addEventListener("submit", onAddForm);
tableEl.addEventListener("click", onDeleteRow);