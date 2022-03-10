const button = document.querySelector('#btn');
var textarea = document.getElementById("textarea");
var keyboard  = document.getElementById("keyboard");
var linebreak = '\n';


var key = [
    "1", "2","3","4","5","6","7","8","9","0","Backspace",
    "q","w","e","r","t","y","u","i","o","p",
    "capslock","a","s","d","f","g","h","i","j","k","l","enter",
    "z","x","c","v","b","n","m",",",".","?","/",
    " "
]

// const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

key.forEach(myFunction);

function myFunction(item,index) {
    var char = document.createElement("button");
    var lineBreak = document.createElement("br");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    char.style.backgroundColor = "#" + randomColor;
    char.setAttribute('class','keyBtn');
    char.setAttribute('id','btn-' + index);
    char.textContent += item;
    // console.log(char);
    keyboard.appendChild(char);
    if(item == "Backspace" || item=="p" || item=="enter" || item=="/" ) {
        keyboard.appendChild(lineBreak);
    }
    else if (item == "capslock") {
        // e.preventDefault();
        // char.classList.toggle("uCase");
    }
    else if (item == " ") {
        document.getElementById("btn-44").style.padding = "15px 130px";
    }

    char.addEventListener('click', (e) => {
        if(item == "Backspace") {
        textarea.value = textarea.value.slice(0,-1);
        }
        else if(item == "enter"){
            textarea.value = textarea.value + "\n";
        }
        else if (item == "capslock") {
            e.preventDefault();
            // toUpperCaseLetter();
            var keyBoardBtn = document.querySelector('.keyBtn'); 
            keyBoardBtn.forEach(toUpperCaseLetter());
        }
        else if (item == " ") {
            textarea.value +=  " ";
        }
        else{
        textarea.value += item;
        document.getElementById("view-wrapper").style.backgroundColor = "#" + randomColor;
    }
    })
    
}


function toUpperCaseLetter() {
    keyBoardBtn.classList.add("uCase");
    // keyBoardBtn.classList.add("uCase");
    console.log(keyBoardBtn);
}


