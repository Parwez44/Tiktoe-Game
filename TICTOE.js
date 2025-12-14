let boxes=document.querySelectorAll(".box");
let restBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


for(let box of boxes){
    box.addEventListener("click",()=>{
        console.log("box clicked",box[0]);
        // box.innerText="x";
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
}
const checkWinner=()=>{
    for(let pattern of winpatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);
                
                showWinner(pos1val);
            }
        }
    }
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;//HTML: <button disabled>Click</button>
        //JS equivalent:button.disabled = true;
    }

}

const showWinner=(winner)=>{
    msg.innerText= `congrats, winner is : ${winner}`;
    msgcontainer.classList.remove("hide");//This means:

//// 👉 "Find the HTML element stored in msgcontainer, and remove the CSS class named "hide" from it."
    disableboxes();
}


const resestGame=()=>{
    turnO=true;
    newGame();
    msgcontainer.classList.add("hide");
};

const newGame=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

newgamebtn.addEventListener("click",resestGame);
restBtn.addEventListener("click",resestGame);