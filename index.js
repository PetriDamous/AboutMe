const form = document.getElementById("form");
const entriesSection = document.getElementById("entries-section");
const entryTxtBox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");

const addEntryToDom = (e) => {    
    const entryTxt = entryTxtBox.value;
    createDisplayBtn(numCount); 
    createEntry(entryTxt, numCount, createEntryBtn);
    clearEntry();        
    e.preventDefault();
}

const clearEntry = () => {
    entryTxtBox.value = "";
}

const createEntry = (entryTxt, idNum, entryBtn) => {
    const entry = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = entryTxt;
    entry.appendChild(p);    
    entry.id = idNum();    
    entry.classList.add("single-entry");    
    entry.style.display = "none";
    entry.append(entryBtn());
    entriesSection.appendChild(entry);
    
}

const createEntryBtn = () => {
    const entryBtn = document.createElement("button");
    entryBtn.classList.add("entry-button");
    entryBtn.style.display = "inline-block";
    entryBtn.textContent = "Back";    
    return entryBtn;
}

const createDisplayBtn = (btnNum) => {
    const displayBtn = document.createElement("button");
    displayBtn.classList.add("display-btn");
    entriesNav.appendChild(displayBtn);
    displayBtn.textContent = `Entry - #${btnNum()}`;
    displayBtn.id = btnNum();    
}

const showHideEntry = (e) => {
    const entryClass = document.getElementsByClassName("single-entry");
    const displayBtnClass = document.getElementsByClassName("display-btn");

    if (e.target.className === "display-btn") {
        
        for (let i = 0; i < entryClass.length; i++) {
            if (entryClass[i].id === e.target.id) {
                entryClass[i].style.display = "block";

                for (let j = 0; j < displayBtnClass.length; j++) {
                    displayBtnClass[j].style.display = "none";
                } 
                
                break;
            }            
        }
    }

    if (e.target.className === "entry-button") {
        e.target.parentElement.style.display = "none";

        for (let j = 0; j < displayBtnClass.length; j++) {
            displayBtnClass[j].style.display = "inline-block";
        }
    }

    return
}

const numCount = () => document.getElementsByClassName("display-btn").length;

form.addEventListener("submit", addEntryToDom);

entriesSection.addEventListener("click", showHideEntry);