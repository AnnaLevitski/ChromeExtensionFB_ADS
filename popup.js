let all = document.querySelector('body');
all.style.font = 'caption';

let btn = document.querySelector('.yellow_btn');
btn.style.background = 'yellow';
btn.style.marginTop = '40px';
btn.style.borderRadius = '3px';

let add = document.querySelector('.add');
let addBtn = document.querySelector('.add_btn');
let addBtnLast = add.lastElementChild;
addBtn.style.marginBottom = '10px';

function addClick(){
    add.insertAdjacentHTML("beforeend", `<div> <input type="text" size="50">
    <input type="submit" value="+" class="btn add_btn"> </div>`);
    addBtnLast = add.lastElementChild;
    addBtnLast.style.marginBottom = '10px';
    addBtnLast.addEventListener( "click" , addClick);
};
addBtnLast.addEventListener( "click" , addClick);

let text = document.querySelector('.text');
let textPost;
let photos = document.querySelector('.photo');
let photoPost;



function post (){
    textPost = text.value;
    console.log(textPost);
    
    for(const photo of photos.files){
        console.log(photo);
        console.log(photo.name);
    };
    
}
btn.addEventListener( "click" , post);

function errorPrint(){
    btn.insertAdjacentHTML("afterend", `<h2 class="red">Something went wrong</h2>`);
    let errorPrintRed = document.querySelector('.red');
    errorPrintRed.style.color = 'red';
    
    
};

errorPrint();