let contactArrays = [];

function addContact() {

  if (Fname.value.trim() !== "") {

    const contactlist =
    {
      Fname: document.getElementById("Fname").value.trim(),
      Lname: document.getElementById("Lname").value.trim(),
      Phone: document.getElementById("Phone").value.trim(),
    }
    contactArrays.push(contactlist);
    displayContacts(contactlist)

  }

}



function displayContacts(contactlist) {

  console.log(contactlist)
  const conList = document.getElementById("conList");
  const contacts = document.createElement("li");
  contacts.className = "contacts";

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

}

function searchContacts() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm.value !== "") {
    const filteredContacts = contactArrays.filter(contact => contact.Fname.toLowerCase().includes(searchTerm));

    const contactlist =
    {
      Fname: filteredContacts.map(obj => obj.Fname),
      Lname: filteredContacts.map(obj => obj.Lname),
      Phone: filteredContacts.map(obj => obj.Phone)
    }

    if (contactlist.Fname.length != 0) {

      console.log(contactlist)
      const contactList = document.getElementById("conList");
      contactList.innerHTML = "";
      displayContacts(contactlist)
    }

    else {
      alert("No Contact available")
    }

  }

  else{
    alert("Please Enter some values")
  }

}
