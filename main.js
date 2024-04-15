noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

canvas = createCanvas(550, 550);
canvas.position(950, 110)
 
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet has been initialized");
}
function draw() {
    background('#82CAFF');
    fill('#efefef')
    stroke('#efefef')
    text('hi', noseX, noseY, difference);
textSize(difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY= " + noseY);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " +leftWristX + "right wrist x = "+rightWristX + "difference = "+ difference);
    }
}