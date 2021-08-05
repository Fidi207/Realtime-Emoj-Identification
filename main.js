function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(527.5, 290);
    video = createCapture(VIDEO);
    video.hide();
    mod = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k_Lx-evnT/model.json", loaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    mod.classify(video, getResult);
}

function loaded(){
    console.log("yes I am loaded. Stop checking me every time it is not necesarry.👿");
}

console.log("vs5hgt", ml5.version);

function getResult(error, arrar){
    if (error){
        console.error(error);
    }
    else {
        console.log(arrar);
        ob_name = arrar[0].label;
        ob_accu = arrar[0].confidence.toFixed(2)*100 + "%";
        document.getElementById("result_objec").innerHTML = ob_name;
        document.getElementById("result_accu").innerHTML = ob_accu;
    }
}