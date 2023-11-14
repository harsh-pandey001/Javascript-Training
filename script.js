function addTask() {
    const Fname = document.getElementById("Fname");
    const Lname = document.getElementById("Lname");
    const conList = document.getElementById("conList");

    if (Fname.value.trim() !== "") {
      const contacts = document.createElement("li");
      contacts.className = "contacts";

      const FnameText = document.createElement("span");
      FnameText.textContent = Fname.value;
      const LnameText = document.createElement("span");
      FnameText.textContent = Lname.value;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = function () {
        conList.removeChild(contacts);
      };

      contacts.appendChild(FnameText);
      contacts.appendChild(LnameText);
      contacts.appendChild(removeButton);

      conList.appendChild(contacts);
      Fname.value = ""; // Clear the input field after adding the task
      Lname.value = ""; // Clear the input field after adding the task
    }
  }
