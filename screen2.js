img="";
dstatus="";
object = "";
function preload(){
    img = loadImage("");
}
function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}
function setup(){
    canvas = createCanvas(620, 420);
    canvas.center();
}
function modelLoaded(){
    console.log("model loaded");
    dstatus= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
object = results;
}
function draw(){
    image(img, 0, 0, 620, 420);
    if(dstatus != ""){
      for (i = 0; i < object.length; i++){
        fill("#0000FF");
        percent = floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
        noFill();
        stroke('#0000FF');
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
      }      
    }
    
}

function home(){
    window.location = "index.html"
}
