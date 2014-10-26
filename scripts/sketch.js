var putin;
var stalin;
var lenin;
var click;
var t;
var y;
var u;
var posx;
var posy;
var b;
var g;
var r;
var placex;
var placey;
var c;
var numr;
var numg;
var numb;




function preload(){

	putin = loadImage('http://upload.wikimedia.org/wikipedia/commons/6/6f/RIAN_archive_100306_Vladimir_Putin%2C_Federal_Security_Service_Director.jpg');
	stalin = loadImage('http://upload.wikimedia.org/wikipedia/commons/1/16/Stalin_lg_zlx1.jpg');
	lenin = loadImage('http://upload.wikimedia.org/wikipedia/commons/2/2d/Vladimir_Ilyich_Ulyanov-Lenin.jpg');

};

function setup() {

	console.log('Setup');
	c=0;
	createCanvas(windowWidth, windowHeight);
	t=0;
	y=0;
	u=0;
	placex=50;
	placey=50;
	click=0;

	
	b=0;
	r=0;
	g=0;



};

function draw() {

	r=255*(mouseX/windowWidth);
	g=255*(mouseY/windowHeight);
	numr=Math.round(100*mouseX/windowWidth);
	numg=Math.round(100*mouseY/windowHeight);
	numb=Math.round(100*b/255);

	numr=numr.toString();

	numg=numg.toString();

	numb=numb.toString();



	console.log("Drawing");
	console.log('Click',click);
	console.log('t', t);
	console.log('y', y);
	console.log('u', u);
	console.log(r,g,b);
	background(0,0,0);




	textSize(20);
	fill(255,0,0);
	rect((r*windowWidth)/255,500,60,50);
	text('<-- mouse left',(r*windowWidth)/255-150,500,200,50);
	text('mouse right -->',(r*windowWidth)/255+80,500,200,50);

	fill(0,0,0);
	text(numr+'%',(r*windowWidth)/255+16,516,200,50);


	fill(0,255,0);
	rect((g*windowWidth)/255,550,60,50);
	text('<-- mouse up',((g*windowWidth)/255)-150,550,200,50);
	text('mouse down -->',((g*windowWidth)/255)+80,550,200,50);

	fill(0,0,0);
	text(numg+'%',(g*windowWidth)/255+16,576,200,50);

	fill(0,0,255);
	rect((b*windowWidth)/255,600,60,50);
	text('<-- press q',((b*windowWidth)/255)-150,600,200,50);
	text('press e -->',((b*windowWidth)/255)+80,600,200,50);

	fill(0,0,0);
	text(numb+'%',(b*windowWidth)/255+16,616,200,50);


	

	
	
	if (t<0){

		t=0;
	}

	if (y<0){

		y=0;
	}

	if (u<0){

		u=0;
	}



	if (click<3){

		click=0;
		t-=10
		
	}

	else if(click<25){

		t-=10;
		


	}
	if(click<85 && click>=25){

		if (t<255){
		t+=10;
		}
		if (y>12){
			y-=10;
		}
		else{
			y=0;
		}
	}


	else if(click>=85 && click<170){

		if (y<255){
		y+=10;
	    }
		if (t>12){
			t-=10;
		}
		else{
			t=0;
		}
		if (u>12){
			u-=10;
		}
		else{
			u=0;
		}

	}

	else if(click>=170){
		if (u<255){
			u+=10;

		}
		
		if (y>12){
			y-=10;
		}
		else{
			y=0;
		}


	}

	if(click>=180){

	tint(r,g,b,255);
	image(lenin, random(0,0.8*windowWidth),random(0,0.8*windowHeight),((click-180)/(200-180))*200,((click-180)/(200-180))*200);
	tint(r,g,b,255);
	image(stalin, random(0,0.8*windowWidth),random(0,0.8*windowHeight),((click-180)/(200-180))*200,((click-180)/(200-180))*200);
	tint(r,g,b,255);
	image(putin, random(0,0.8*windowWidth),random(0,0.8*windowHeight),((click-180)/(200-180))*200,((click-180)/(200-180))*200);

	}


	tint(r,g,b,t);
	image(lenin, 0.25*windowWidth,0.25*windowHeight,0.25*windowWidth,0.5*windowHeight);
	tint(r,g,b,y);
	image(stalin, 0.25*windowWidth,0.25*windowHeight,0.25*windowWidth,0.5*windowHeight);
	tint(r,g,b,u);
	image(putin, 0.25*windowWidth,0.25*windowHeight,0.25*windowWidth,0.5*windowHeight);
	

	fill(r,g,b);
	if (c%2 == 0){

	
	textSize(click);
	
	if(click<10){
		fill(r,g,b);
		textSize(20);
		text('Click!!!',mouseX-70,mouseY-20,100,100);
	}
	else if(click>=2 &&click<40){

		text('Click faster!',mouseX+20,mouseY-20,100,100);
	}
	else if(click>=40 &&click<=175){

		text('FASTER!!!',placex,placey,100,100);
	}
	
	else if (click>175){
		text('ENOUGH!!!!!',random(0,0.4*windowWidth),random(0,0.8*windowHeight),100,100);

	}
	
	}
	else if(c%2 !=0 && click<10){

		text('Faster!!!',mouseX+10,mouseY-20,100,100);
}


	click-=2;

	





};

function mouseClicked(){
	c+=1
	if (click<=200){

		click+=8;

		placex = random(0,windowWidth);
		placey = random(0,windowHeight);

}
};

function keyTyped(){
	console.log('typed');
		if(key=='e'){
			if (b>=250){
			b=0;}
			b+=5;
			console.log('t');
	}
		if(key=='q'){
			if (b<=5){
			b=255;}
			b-=5;
			console.log('t');

}
};