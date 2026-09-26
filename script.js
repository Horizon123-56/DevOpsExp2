function addStudent() {
    const nameInput = document.getElementById("studentName");
    const ageInput = document.getElementById("studentAge");
    const studentList = document.getElementById("studentList");

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (name === "" || age === "") {
        alert("Please enter both name and age!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `Name: ${name} | Age: ${age}`;
    studentList.appendChild(li);

    nameInput.value = "";
    ageInput.value = "";
}