let inputTitle = document.getElementById('title-notes');
let add = document.getElementById('add');
let inputText = document.getElementById('content-notes');
let remove = document.querySelector('.remove');
let output = document.getElementById('output');


add.addEventListener('click', function(){
    if(inputTitle.value === "" | inputTitle.value === " "){
        alert("please enter an title")
    }
    else if(inputText.value === "" | inputText.value === " "){
        alert("please enter an text")
    }
    else{
            
        
        var item = document.createElement("div")

        var btnCeck = document.createElement("button")

        var btnDel = document.createElement("button")

        var h2 = document.createElement("h3")

        var p = document.createElement("p")

        h2.innerHTML = inputTitle.value;
        p.innerHTML = inputText.value;
        btnDel.innerHTML = "<i class='fa-solid fa-trash todo-suprime-btn' style='color: #df113a;'></i>";
        btnCeck.innerHTML = "<i class='fa-regular fa-circle-check todo-success-btn' style='color: #097756;'></i>";
        inputTitle.value = "";
        inputText.value = "";

        item.classList.add("itemm");
        btnDel.classList.add("remove");
        h2.classList.add("hh");
        p.classList.add("pa");
        btnCeck.classList.add("check");

        item.append(btnCeck);
        item.append(btnDel);
        item.append(h2);
        item.append(p);
        output.append(item);


        btnDel.addEventListener("click",function(){
            output.removeChild(this.parentElement);
        });

        btnCeck.addEventListener("click",function(){
            item.classList.toggle("completed")
        });
    }
});


for(let i = 1; i < 16; i++){
    console.log(i)
}

