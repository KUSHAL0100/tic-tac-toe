let boxs=document.querySelectorAll(".box")
let turn ='x';
let isWin=false
let ding=new Audio()
let changeTurn=()=>{
    turn=(turn==='x'? 0 : 'x')
}
let checkWin=()=>{
    let boxtexts=document.querySelectorAll(".boxtext")
    let arr=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    arr.forEach((e )=>{ //ahi e etle [0,1,2] ee e che and e[1] ma 1 avse next itereation ma e aeee [3,4,5] kevase ema e[1] etle 4 ganase
        if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !==''))
        {
            isWin=true;
            document.querySelector(".info").innerText=turn+" Won";
            document.querySelector(".winGif").style.width="20vw"
        }
    })
}
boxs.forEach(box =>{
    box.addEventListener("click",function(){
        let text=box.querySelector(".boxtext")
        if(text.innerText==='' && !isWin )
        {
            text.innerText=turn;
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
    })
}