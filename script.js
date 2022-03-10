const button = document.querySelector('#btn');
var textarea = document.getElementById("textarea");
var keyboard  = document.getElementById("keyboard");
var keyBoardBtn = document.querySelector('.keyBtn'); 
var capslock = document.getElementById("btn-21");

var linebreak = '\n';
var key = [
    "1", "2","3","4","5","6","7","8","9","0","Backspace",
    "q","w","e","r","t","y","u","i","o","p",
    "a","s","d","f","g","h","i","j","k","l","enter",
    "z","x","c","v","b","n","m",",",".","?","/",
    " "
]
// var key2 = key.map(x => x.toUpperCase());

// console.log(key2);

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
    // else if (item == " ") {
    //     document.getElementById("btn-44").style.padding = "15px 130px";
    // }

    char.addEventListener('click', (e) => {
        if(item == "Backspace") {
        textarea.value = textarea.value.slice(0,-1);
        }
        else if(item == "enter"){
            textarea.value = textarea.value + "\n";
        }
        else if (item == "capslock") {
            e.preventDefault();
            // key.splice(0, key.length, ...key2);
            // key2.forEach(myFunction);
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

// key2.forEach(myFunction2);

// function myFunction2(item,index) {
//     var char = document.createElement("button");
//     var lineBreak = document.createElement("br");
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
//     char.style.backgroundColor = "#" + randomColor;
//     char.setAttribute('class','keyBtn');
//     char.setAttribute('id','btn-' + index);
//     char.textContent += item;
//     // console.log(char);

//     keyboard.appendChild(char);
//     if(item == "BACKSPACE" || item=="P" || item=="ENTER" || item=="/" ) {
//         keyboard.appendChild(lineBreak);
//     }
//     else if (item == "CAPSLOCK") {
//         // e.preventDefault();
//         // char.classList.toggle("uCase");
//     }
//     else if (item == " ") {
//         document.getElementById("btn-44").style.padding = "15px 130px";
//     }

//     char.addEventListener('click', (e) => {
//         if(item == "BACKSPACE") {
//         textarea.value = textarea.value.slice(0,-1);
//         }
//         else if(item == "ENTER"){
//             textarea.value = textarea.value + "\n";
//         }
//         else if (item == "CAPSLOCK") {
//             e.preventDefault();
//             key.forEach(myFunction);
//         }    
//         else if (item == " ") {
//             textarea.value +=  " ";
//         }
//         else{
//         textarea.value += item;
//         document.getElementById("view-wrapper").style.backgroundColor = "#" + randomColor;
//     }
//     })
    
// }

// capslock.addEventListener('click', (e) => {
    
//     key2.forEach(myFunction);

// });