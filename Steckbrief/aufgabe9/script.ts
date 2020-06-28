let todoitems: string = ["finish the billion drawings", "cook", "cry", "cry but at 3am"];
let trash = document.querySelector(".fas fa-trash-alt");
todolist();


function todolist () {
        document.querySelector("#newtodo").innerHTML = "";
        for (let index = 0; index < todoitems.length; index++) {
            document.querySelector("#newtodo").innerHTML += "<div>" + todoitems[index] + "<input type='checkbox'>" + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "<div>";
        }
        var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }

document.querySelector("#but1").addEventListener("click", todo);
function todo () {
        var newwtodo = document.querySelector("#text").value;
        todoitems.push(newwtodo);
        todolist();
    }

document.querySelector("#trash").addEventListener("click", trash);
function trash() {
        clearInterval(index);
    }
