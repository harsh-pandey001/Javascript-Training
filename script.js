function addContact() {

  const conList = document.getElementById("conList");

  let contactArrays = [];



  if (Fname.value.trim() !== "") {
    const contacts = document.createElement("li");
    contacts.className = "contacts";

    const contactlist =
    {
      Fname: document.getElementById("Fname").value.trim(),
      Lname: document.getElementById("Lname").value.trim(),
      Phone: document.getElementById("Phone").value.trim(),
    }

    contactArrays.push(contactlist);


    const FnameText = document.createElement("span");
    FnameText.textContent = contactlist.Fname;
    const LnameText = document.createElement("span");
    LnameText.textContent = contactlist.Lname
    const num = document.createElement("span");
    num.textContent = contactlist.Phone;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.onclick = function () {
      conList.removeChild(contacts);
    };

    
    contacts.appendChild(FnameText);
    contacts.appendChild(LnameText);
    contacts.appendChild(num);
    contacts.appendChild(removeButton);

    conList.appendChild(contacts);
    Fname.value = ""; // Clear the input field after adding the task
    Lname.value = ""; // Clear the input field after adding the task
    Phone.value = ""; // Clear the input field after adding the task
  }
}



function searchContacts() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredContacts = contactArrays.filter(contact => contact.name.toLowerCase().includes(searchTerm));

  updateContactList(filteredContacts);
}
