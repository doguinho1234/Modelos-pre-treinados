narizX = 0;
narizY = 0;

function preload() {
    filtro = loadImage('Sallyfacepng.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet foi inicializado');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        narizX = results[0].pose.nose.x;
        narizY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(filtro, narizX -120, narizY -130, 230, 230);
}

function takeSnapshot() {
    save('meuFiltro.png');
}