


function Yuan(x,y,r){
    this.x = x     
    this.y = y 
    this.r = r      // 开始圆半径
    this.r1 = r/2     // 结束园半径
    this.r2 = 1     // 最小半径
    this.ra = true  // 半径增大
    this.a = true   // 开始圆半径增大
    this.c =  'rgb(' +  parseInt(Math.random()*255) + ',' +  parseInt(Math.random()*255) + ',' +  parseInt(Math.random()*255)+ ')' 
    this.jw =  Math.random()*10 -5
    this.jy =  Math.random()*10 -5

    this.f = 0
    this.shan  =  parseInt(Math.random()*4) + 1
}

Yuan.prototype.update = function(){

    if(this.a ){
        this.r ++ 
        if(this.r > 30){
            this.a=false
        }
    }else{
        this.r --
        if(this.r <= this.r1*2){
            this.a = true
        }
    }
    
    // 碰撞检测
    this.x += this.jw
    this.y += this.jy
    if(getshen() == 0){
        if(this.x > canvas.width ){
            this.x =  canvas.width
            this.jw = -this.jw
        }
        if(this.x < 0 ){
            this.x =  0
            this.jw = -this.jw
        }
        if(this.y > canvas.height ){
            this.y =  canvas.height
            this.jy = -this.jy
        }
        if(this.y < 0 ){
            this.y =  0
            this.jy = -this.jy
        }
    }

   
 
    this.f ++ 
}
Yuan.prototype.render = function(){
    ctx.beginPath();

    // 渐变的开始圆的 x 坐标
    // 渐变的开始圆的 y 坐标
    // 开始圆的半径
    // 渐变的结束圆的 x 坐标
    // 渐变的结束圆的 y 坐标
    // 结束圆的半径
    let radialGradient=ctx.createRadialGradient(this.x,this.y,this.r,this.x,this.y,this.r1)
    // radialGradient.addColorStop(0,"rgba(0,0,0,0.1)");
    radialGradient.addColorStop(0,"rgba(0,0,0,0.1)");
    radialGradient.addColorStop(1,this.c);
    ctx.fillStyle=radialGradient;
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fill()

}


console.log()