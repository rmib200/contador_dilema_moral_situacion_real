//Contador para el shock electrico administrado a los ratones

//@autor: Ruddy Illanes

//https://keycode.info/

var timer = 20;
var elapsedTime;
var running = false;
var trialBegan;
function setup() {
  // put setup code here
  textAlign(CENTER);

  createCanvas(windowWidth, windowHeight);
  currentTime = second();
}
function preload()
{
	soundFormats('mp3','ogg');
	sonido = loadSound('electricSound1.mp3');
  button = createButton('Iniciar');
  button.size(80,40);
  

}

function draw() {
  // put drawing code here
background(160);
textSize(40);
button.position( windowWidth/2,windowHeight/2);
button.mousePressed(btnPressed);

 if(running == true)
 {

  contador();


 }
 
 
}

function btnPressed()
{

running = true;
trialBegan = millis();
  button.remove();

}

function contador()
{
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  //  elapsedTime = millis();
  //  console.log(millis()-elapsedTime);
    timer --;
    console.log(timer);
    //if(keyCode === 69)
      
  }
if ((keyIsPressed == true) && (keyCode == 32)) //32 espace bar
    {
      elapsedTime = millis()-trialBegan;
      console.log(elapsedTime);
      timer =0;

    }


  drawTime(timer);
  if (timer == 0) {
    background(160);
    text("El experimento a concluido. \n Gracias por participar.", width/2,height/2);
    text(elapsedTime,width/2,height/2+250 );
}
function drawTime(x)
{

  textSize(100);
  fill(35)
  text(x,width/2,height/2);
}

function efectoSonido()
{
	sonido.setVolume(0.4);
	sonido.play();
}


}