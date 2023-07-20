let list = document.querySelector('.list-container');

let inputField = document.querySelector('#add-btn');

function addBtn(){
    if(inputField.value === ''){
        alert('You Must add an Item')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        list.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);


        
    }
    inputField.value = '';
    saveData()

};

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
};
function showData(){
    list.innerHTML = localStorage.getItem("data");
};
showData();


