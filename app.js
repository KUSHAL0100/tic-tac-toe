let boxs=document.querySelectorAll(".box")
let turn ='x';
let isWin=false
let ding=new Audio("ding.mp3")
let win=new Audio("win.mp3")
let line=document.querySelector(".line")
let changeTurn=()=>{
    turn=(turn==='x'? 0 : 'x')
}
let checkWin=()=>{
    let boxtexts=document.querySelectorAll(".boxtext")
    let arr=[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,-45],
    ]
    arr.forEach((e )=>{ //ahi e etle [0,1,2] ee e che and e[1] ma 1 avse next itereation ma e aeee [3,4,5] kevase ema e[1] etle 4 ganase
        if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !==''))
        {
            isWin=true;
            document.querySelector(".info").innerText=turn+" Won";
            document.querySelector(".winGif").style.width="20vw";
            boxtexts[e[0]].style.color="rgb(151 139 139)";
            boxtexts[e[1]].style.color="rgb(151 139 139)";
            boxtexts[e[2]].style.color="rgb(151 139 139)";
            line.style.width="30vw"
            line.style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            win.play();
        }
    })
}
boxs.forEach(box =>{
    box.addEventListener("click",function(){
        let text=box.querySelector(".boxtext")
        if(text.innerText==='' && !isWin )
        {
            text.innerText=turn;
            ding.currentTime = 0;
            ding.play();
            checkWin();
            if(!isWin){
                changeTurn();
                document.querySelector(".info").innerText="Now "+turn+" turn"
            }
        }
    }) 
})

let reset=()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    boxtext.forEach((boxT)=>{
        boxT.innerText="";
        document.querySelector(".winGif").style.width="0vw"
        turn='x';
        document.querySelector(".info").innerText="Now "+turn+" turn"
        isWin=false;
        boxT.style.color="black";
        line.style.width="0"
    })
}