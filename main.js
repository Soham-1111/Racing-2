canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img="track.jpg";

car1_img="car1.jpeg";
car1_width="150";
car1_height="90";
car1_x=10;
car1_y=10;

car2_img="car2.jpeg";
car2_width="150";
car2_height="90";
car2_x=10;
car2_y=100;

function add(){

    background_image_load= new Image();
    background_image_load.onload= upload_background;
    background_image_load.src=background_img;

    car1_image_load= new Image();
    car1_image_load.onload= upload_car1;
    car1_image_load.src=car1_img;

    car2_image_load= new Image();
    car2_image_load.onload= upload_car2;
    car2_image_load.src=car2_img;


}

function upload_background(){
    ctx.drawImage(background_image_load,0,0, canvas.width, canvas.height );
}

function upload_car1(){
    ctx.drawImage(car1_image_load,car1_x, car1_y, car1_width, car1_height );
}

function upload_car2(){
    ctx.drawImage(car2_image_load,car2_x, car2_y, car2_width, car2_height );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_up=e.keyCode;
    console.log(key_up);
    if(key_up=="38"){
        up();
        console.log("up is pressed");   
    }
    if(key_up=="40"){
        down();
        console.log("down is pressed");

    }
    if(key_up=="37"){
        left();
        console.log("left is pressed");
    }

    if(key_up=="39"){
        right();
        console.log("right is pressed");
    }


    if(key_up=="87"){
        up2();
        console.log("w is pressed");   
    }
    if(key_up=="83"){
        down2();
        console.log("s is pressed");

    }
    if(key_up=="65"){
        left2();
        console.log("a is pressed");
    }

    if(key_up=="68"){
        right2();
        console.log("d is pressed");

    if(car1_x>650){
        console.log("Car 1 won!!!");
        document.getElementById("game_status").innerHTML= "Car 1 Won!!!";
    }

    if(car2_x>650){
        console.log("Car 2 won!!!");
        document.getElementById("game_status").innerHTML= "Car 2 Won!!!";
    }
    }


    
}

function up(){
    if(car1_y>=0){
        car1_y-=10;
        upload_background();
        upload_car1();
        upload_car2();
        console.log("x=" + car1_x + "y=" + car1_y);
        

    }

}

function down(){
    if(car1_y<=500){
    car1_y+=10;
        upload_background();
        upload_car1();
        upload_car2();
        console.log("x=" + car1_x + "y=" + car1_y);
        

    }

}

function left(){
    if(car1_x=0){
    car1_x-=10;
        upload_background();
        upload_car1();
        upload_car2();
        console.log("x=" + car1_x + "y=" + car1_y);
        

    }

}

function right(){
    if(car1_x<=700){
    car1_x+=10;
        upload_background();
        upload_car1();
        upload_car2();
        console.log("x=" + car1_x + "y=" + car1_y);
        

    }

}

function up2(){
    if(car2_y>=0){
        car2_y-=10;
        upload_background();
        upload_car2();
        upload_car1();
        console.log("x=" + car2_x + "y=" + car2_y);
        

    }

}

function down2(){
    if(car2_y<=500){
    car2_y+=10;
        upload_background();
        upload_car2();
        upload_car1();
        console.log("x=" + car2_x + "y=" + car2_y);
        

    }

}

function left2(){
    if(car2_x=0){
    car2_x-=10;
        upload_background();
        upload_car2();
        upload_car1();
        console.log("x=" + car2_x + "y=" + car2_y);
        

    }

}

function right2(){
    if(car2_x<=700){
    car2_x+=10;
        upload_background();
        upload_car2();
        upload_car1();
        console.log("x=" + car2_x + "y=" + car2_y);
        

    }

}

