let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let cellInput = document.querySelector("#cell-input");
let cityInput = document.querySelector("#city-input");
let list = document.querySelector("#saves-conteiner");
const info = document.querySelector("#info-conteiner");
const cadastro = document.querySelector("#cadastro-conteiner");
const bntCadastrar = document.querySelector("#bnt-cadastrar");
const bntConfirma = document.querySelector("#bnt-confirmar");
const bntCancel = document.querySelector("#bnt-cancel");

function createList() {

    const item = document.createElement("div");
    item.classList.add("item-list");

    const paragraf = document.createElement("p");
    paragraf.classList.add("paragraf");
    item.appendChild(paragraf);
    
    const spanName = document.createElement("span");
    spanName.classList.add("span");
    spanName.classList.add("add-name");
    spanName.textContent = nameInput.value;
    paragraf.appendChild(spanName);

    const spanEmail = document.createElement("span");
    spanEmail.classList.add("span");
    spanEmail.classList.add("add-email");
    spanEmail.textContent = emailInput.value;
    paragraf.appendChild(spanEmail);

    const spanCell = document.createElement("span");
    spanCell.classList.add("span");
    spanCell.classList.add("add-cell");
    spanCell.textContent = cellInput.value;
    paragraf.appendChild(spanCell);

    const spanCity = document.createElement("span");
    spanCity.classList.add("span");
    spanCity.classList.add("add-city");
    spanCity.textContent = cityInput.value;
    paragraf.appendChild(spanCity);

    const bntEdit = document.createElement("button");
    bntEdit.classList.add("bnt-edit");
    bntEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    paragraf.appendChild(bntEdit);

    const bntRemove = document.createElement("button");
    bntRemove.classList.add("bnt-remove");
    bntRemove.innerHTML = '<i class="fa-solid fa-user-xmark"></i>';
    paragraf.appendChild(bntRemove);

    list.appendChild(item);
}

//EVENTS//

bntCadastrar.addEventListener("click", ()=> {

    info.classList.toggle("hide");
    cadastro.classList.toggle("hide");
});

bntConfirma.addEventListener("click", ()=> {

    if(nameInput.value == "" || emailInput.value == "" || cellInput.value == "" || cityInput.value == "") {
        alert("Verifique se todos os campos foram preenchidos!!!");
        return;
    }
    
    createList();
    info.classList.toggle("hide");
    cadastro.classList.toggle("hide");
    nameInput.value = "";  
    emailInput.value = ""; 
    cellInput.value = "";
    cityInput.value = "";
});

bntCancel.addEventListener("click", ()=> {
   
    info.classList.toggle("hide");
    cadastro.classList.toggle("hide");
});

document.addEventListener("click", (event)=> {
    let target = event.target;
    let father = target.closest(".item-list");

    if(target.classList.contains("bnt-remove") || target.classList.contains("fa-user-xmark")) {
        father.remove();
    }
});




