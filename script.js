var fps = 30;//frames per second
 
//random color generator
function randColor() {
    var num = Math.floor(Math.random() * Math.pow(2,24));
    return '#' + ('00000' + num.toString(16)).substr(-6); 
}
 
//random number generator
function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}

//get the canvas element
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//box object
var box = {
    x: 100,    
    y: 380, 
    width: 50, 
    height:50, 
    color: randColor(), 
    vx: 0,  
    vy: 0,
    ax: 0,
    ay: 9500,  
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height); 
    },
    rotate: function(){
          
    },
    update: function(){
        this.x += this.vx/fps; 
        this.y += this.vy/fps;
        this.vx += this.ax/fps;
        this.vy += this.ay/fps;  
        

        if(this.y <= 200){
            this.ay = 2500; 
            console.log("Hi");   
        }
        if((this.y + this.height) > base.y + base.height){ 
            this.y = base.y - this.height; 
            this.vy = 0; 
            this.ay = 0;
        } 
        if(this.y < 0){
            this.vy = -this.vy;     
        } 
        if((((box.x + box.width) > (obstacle1.x) && (box.x) < (obstacle1.x + obstacle1.width)) && (box.y + box.height) > (obstacle1.y) && (box.y) < (obstacle1.y + obstacle1.height))){  
            obstacle1.vx = 0;  
            box.y = obstacle1.y - box.height;   
        } 
        if((box.y + box.height) > (obstacle2.y) && (box.x + box.width) > (obstacle2.x) && (box.x) < (obstacle2.x + obstacle2.width) && (box.y) < (obstacle2.y + obstacle2.height) ) {                  
            box.vy = 0; 
            obstacle2.vx = 0;
            box.y = obstacle2.y - box.height; 
        }
        if((((box.x + box.width) > (obstacle3.x) && (box.x) < (obstacle3.x + obstacle3.width)) && (box.y + box.height) > (obstacle3.y) && (box.y) < (obstacle3.y + obstacle3.height))){  
            obstacle3.vx = 0;  
            box.y = obstacle3.y - box.height; 
               
        } 
        if((((box.x + box.width) > (obstacle4.x) && (box.x) < (obstacle4.x + obstacle4.width)) && (box.y + box.height) > (obstacle4.y) && (box.y) < (obstacle4.y + obstacle4.height))){  
            obstacle4.vx = 0; 
            box.y = obstacle4.y - box.height;     
               
        } 
        if(this.x > 180){   
            this.x = 180 - 5;     
        }
        if(this.x < 60){
            this.x  = 60 + 5;    
        }
        if(this.y < 139){
            this.y = 139 + 5; 
            this.ay = 21000;  
        }

    }    
};    

var obstacle1 = { 
    x: 400,
    y: 410,  
    width:randNum(20, 30),  
    height:randNum(100, 170),
    color: randColor(),        
    vx: -200, 
    vy: 0,
    ax: 0,
    ay: 0,            
    draw2: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update2: function(){
        this.x += this.vx/fps;
        this.y += this.vy/fps;
        this.vx += this.ax/fps;
        this.vy += this.ay/fps;
        
        if(this.x <= 0){
            null;  
        } 
        if((this.x + this.width) > canvas.width){
            this.vx = -this.vx;       
        }
        if((this.y + this.height) > (base.y + base.height)){ 
            this.y = base.y - this.height; 
            this.vy = 0; 
            this.ay = 0;
        }
        if(2 && (box.y) < (obstacle2.y + obstacle2.height)){
                
        }
    }
};

var obstacle2 = { 
    x: 560,
    y: 420, 
    width:randNum(100, 200),    
    height:25,
    color: randColor(),         
    vx: -171.7, 
    vy: 0,
    ax: 0,
    ay: 0,
    draw3: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update3: function(){
        this.x += this.vx/fps; 
        this.y += this.vy/fps;
        this.vx += this.ax/fps;
        this.vy += this.ay/fps;
        
        if(this.x <= 120){
                
        }

    }
};

var obstacle3 = {
    x: 800,
    y: 430,  
    width:randNum(20, 30),  
    height:randNum(70, 100), 
    color: randColor(),           
    vx: -152.8, 
    vy: 0,
    ax: 0,
    ay: 0,            
    draw4: function(){  
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update4: function(){
        this.x += this.vx/fps;
        this.y += this.vy/fps;
        this.vx += this.ax/fps;
        this.vy += this.ay/fps;
        
        if(this.x <= 0){ 
    
        } 
        if((this.x + this.width) > canvas.width){
            this.vx = -this.vx;       
        }
        if((this.y + this.height) > (base.y + base.height)){ 
            this.y = base.y - this.height; 
            this.vy = 0; 
            this.ay = 0;
        }
    }    
};   

var obstacle4 = {
    x: 899,
    y: 420,
    width:randNum(100, 200),      
    height:25,
    color: randColor(),         
    vx: -121.9, 
    vy: 0,
    ax: 0,
    ay: 0,
    draw5: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update5: function(){
        this.x += this.vx/fps;
        this.y += this.vy/fps;
        this.vx += this.ax/fps;
        this.vy += this.ay/fps; 
         
        if(this.x <= 120){  
            
        }

    }    
}
var base = {
    x: 0,
    y: 480,
    width:3000,
    height:20,
    color: "lightgreen",         
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    draw6: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
};


//draws the box
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    box.draw();   
    obstacle1.draw2(); 
    obstacle2.draw3();
    base.draw6();
    obstacle3.draw4();
    obstacle4.draw5();
}

//updates the box
function update(){
    box.update(); 
    obstacle1.update2();
    obstacle2.update3();  
    obstacle3.update4(); 
    obstacle4.update5();
}

//wraps the drawing and update into one function
function ticks(){ 
    draw();
    update();
}

//ticks or draws and updates every second
gameLoop = window.setInterval(ticks, 1000/fps); 


window.onkeydown = function(e){ 
        e = e || window.event; 
        var code = e.keyCode;
        e.preventDefault();
    if (code === 32){
        box.height = 50;
        box.vy = -529; 
    }
    if(code === 37){
        box.vx = -300;
    }
    if(code === 38){ 
        box.vy = -300;
        box.height = 50;
    }
    if(code === 39){
        box.vx = 300;
    }
    if (code === 40){
        box.vy = 300; 
        box.height = 30;    
    }
};


window.onkeyup = function(e){    
    e = e || window.event;  
    var code = e.keyCode;
    if (code === 32) {    
        box.ay = 900;       
    } 
    if(code === 37){
        box.vx = 0;  
    }
    if(code === 38){
        box.vy = 0;
        box.height = 40;
    }
    if(code === 39){
        box.vx = 0;
    }
};
 
