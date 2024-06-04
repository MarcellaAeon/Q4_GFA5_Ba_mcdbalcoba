let contacts = [];

function display() {
    const contacts_list = document.getElementById('lis');
    contacts_list.innerHTML = '';
    for (let contact of contacts) {
        let li = document.createElement('li');
        li.textContent = contact;
        contacts_list.appendChild(li);
    }
}

function addContact() {
    const contact_input = document.getElementById('contact_input');
    const contact_name = contact_input.value.trim();
    
    if (contact_name) {
        if (contacts.length >= 7) {
            contacts.shift();
        }
        contacts.push(contact_name);
        contact_input.value = '';
        displar();
    } else {
        alert("Please enter a contact name.");
    }
}

function removeContact() {
    if (contacts.length > 0) {
        contacts.pop();
        display();
    } else {
        alert("no contacts to remove");
    }
}

displar();