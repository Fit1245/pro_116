mustachex = 0;
mustachey = 0;
function preload() {
mustache_clown = loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
    canvas = createCanvas(400,400);
    canvas.position(300,300);
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded() {
    console.log("modelLoaded");
}
function gotposes(results) {
    if (results.length > 0)
    {
       console.log(results);
     mustachex = results[0].pose.nose.x-30;
       mustachey = results[0].pose.nose.y-5;
    }
}
function draw() {
image(video,0,0,400,400);
image(mustache_clown,mustachex,mustachey,50,50);
}


function take_snapshot() {
    save("yourposing_image.png");
}