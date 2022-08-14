let box=document.querySelector(".wrapper");

addEventListener("keydown",e=>{
    let currentleft = parseInt(box.style.left);
    let currenttop = parseInt(box.style.top);

    switch (e.keyCode) {
        case 38:
            box.style.top=`${currenttop-10}px`;
            break;
        case 40:
            box.style.top=`${currenttop+10}px`;
            break;
        case 39:
            box.style.left=`${currentleft+10}px`;
            break;
        case 37:
            box.style.left=`${currentleft-10}px`;
            break;
    }
})
