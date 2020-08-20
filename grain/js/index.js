let height = document.documentElement.clientHeight
let width = document.documentElement.clientWidth

let canvas = document.getElementById('canvas')


canvas.width =  width 
canvas.height = height
window.ctx = canvas.getContext('2d')

var arr = [] 


function bj(){
    ctx.beginPath();
    ctx.fillStyle = '#000'
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fill()
}

canvas.onclick=function(e){
    x  = e.layerX
    y  = e.layerY
    arr.push(new Yuan(x,y,parseInt(Math.random()*6) + 6))
}

function qingkong(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function getline(){
    let line =   document.getElementsByName('line')
    let value1;
    for(let i=0;i<line.length;i++){
        if(line[i].checked){
            value1 = line[i].value;
            break;
        }
    }
    return value1
}
function getshen(){
    let line = document.getElementsByName('shen')
    let value1;
    for(let i=0;i<line.length;i++){
        if(line[i].checked){
            value1 = line[i].value;
            break;
        }
    }
    return value1
}

setInterval(function(){

    qingkong()
    bj()

    if(getshen() == 1){
        arr.push(new Yuan(canvas.width/2,canvas.height/2,parseInt(Math.random()*6) + 6))
    }

    arr.map((item,index)=>{
        item.update()
        item.render()

        if(getline() == 1){
            arr.filter(item1 => Math.abs(item.x -item1.x)<100 && Math.abs(item.y -item1.y)<100 ).map((item3 , index3 )=>{
                ctx.beginPath();
                ctx.strokeStyle='rgba(255,255,255,0.2)';
                ctx.lineWidth=1
                ctx.moveTo(item.x,item.y)
                ctx.lineTo(item3.x,item3.y)
                ctx.stroke()
            })
        }
     
    })
    arr = arr.filter(item => item.x <= canvas.width &&  item.x >= 0 && item.y >= 0 && item.y <= canvas.height)
},40)


