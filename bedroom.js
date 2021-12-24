objects=[]
status = ""
function preload () {
bedroom = loadImage("bedroom.jpg")
}

function setup () {
canvas = createCanvas(600,400)
canvas.position(400,200)

cocossd = ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML="Status : Detecting Objects"
}

function draw () {
image(bedroom,0,0,600,400)
if (status != "") {
    for(i=0;i<objects.length;i++) {
        document.getElementById("status").innerHTML="Status :  Object Detected  "
        fill("red") 
        percent = floor(objects[i].confidence*100)
        text(objects[i].label+ " "+ percent + "%",objects[i].x,objects[i].y)
        noFill()
        stroke("red")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}
}

function modelloaded () {
    console.log("The Model has been loaded")
    status = true
    cocossd.detect(bedroom,gotresult)
}

function gotresult (error,result) {
    if (error) {
        console.log(error)
    }
    else {
        
        console.log(result)
        objects = result

    }
    
}

