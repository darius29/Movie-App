var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["year"] = document.getElementById("year").value;
    formData["rating"] = document.getElementById("rating").value;
    formData["relase"] = document.getElementById("relase").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("movieList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.year;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.rating;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.relase;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("year").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("relase").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("year").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rating").value = selectedRow.cells[2].innerHTML;
    document.getElementById("relase").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.year;
    selectedRow.cells[2].innerHTML = formData.rating;
    selectedRow.cells[3].innerHTML = formData.relase;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("movieList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


// LocalStorage

const form = document.querySelector("form");
const getName = document.querySelector("fullName");
const getYear = document.querySelector("year");
const getRating= document.querySelector("rating")
const getRelase = document.querySelector("relase");
const submitBtn = document.querySelector("#submit");

form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  
  submitBtn.addEventListener("click", function () {
    localStorage.setItem("name", getName.value);
    localStorage.setItem("year", getYear.value);
    localStorage.setItem("rating", getRating.value);
    localStorage.setItem("relase", getRelase.value);
  
    
  });