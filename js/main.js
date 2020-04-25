function setup(){
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    translate(width/2, height/2);
    rotate(-90);
    var x=30;
    let h = hour();
    let m = minute();
    let s = second();
    let d = day();
    let mon = month();
    let y = year();
    strokeWeight(2);
    textFont("cursive");
    push();
    rotate(90);
    text(y+"."+mon+"."+d,60,0);
    text(s+":"+m+":"+h, -21, 120);
    text(12,0,-155);
    text(3,-160,0);
    text(6,0,165);
    text(9,155,0);
    pop();
    strokeWeight(5);
    fill(0,1,1);
    
    let sAngle = map(s, 0, 60, 0, 360);
    stroke(255, 0, 0);
    arc(0, 0, 300, 300, 0, sAngle);
    
    let mAngle = map(m, 0, 60, 0, 360);
    stroke(255, 150, 0);
    arc(0, 0, 280, 280, 0, mAngle);
    
    let hAngle = map(h%12, 0, 12, 0, 360);
    stroke(255, 255, 0);
    arc(0, 0, 260, 260, 0, hAngle);
    
    if(mon ==1){
            x=32;
    }else if(mon == 2){
        if(y%4==0){
            x=30;
        }else{
            x=29;
        }
    }else if(mon ==3){
            x=32;
    }else if(mon==4){
            x=31;
    }else if(mon==5){
            x=32;
    }else if(mon==6){
            x=31;
    }else if(mon==7){
            x=32;
    }else if(mon==8){
            x=32;
    }else if(mon==9){
            x=31;
    }else if(mon==10){
            x=32;
    }else if(mon==11){
            x=32;
    }else if(mon==12){
            x=32;
    }
    let dAngle = map(d%x, 0, x, 0, 360)
    stroke(200, 255, 0);
    arc(0, -80, 60, 60, 0, dAngle);
    
    let monAngle = map(mon%12, 0, 12, 0, 360)
    stroke(0, 255, 0);
    arc(0, -80, 80, 80, 0, monAngle);
    
    push();
    rotate(sAngle);
    stroke(255, 0, 0);
    line(0, 0, 102, 0);
    pop();
    
    push();
    rotate(mAngle);
    stroke(255, 150, 0);
    line(0, 0, 80, 0);
    pop();
    
    push();
    rotate(hAngle);
    stroke(255, 255, 0);
    line(0, 0, 50, 0);
    pop();
    
    
    
    stroke(255);
    strokeWeight(10);
    point(0, 0);
    
}
