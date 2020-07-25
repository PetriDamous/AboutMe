const form = document.getElementById("form");
const entries = document.getElementById("entries");
const entryTxtBox = document.getElementsByClassName("entry-textbox");

const addEntryToDom = (e) => {    
    let entryTxt = entryTxtBox[0].value;
    createEntry(entryTxt);
    e.preventDefault();
}

const createEntry = (entryTxt) => {
    let entry = document.createElement("div");
    entry.classList.add("single-entry");
    entry.textContent = entryTxt;
    entries.appendChild(entry);
}

form.addEventListener("submit", addEntryToDom);

