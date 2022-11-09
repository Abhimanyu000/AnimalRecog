Dog=0;
cat=0;

function startRecognition(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", ModelLoaded);
}

function ModelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        random_red=Math.floor(Math.random()*255)+1;
        random_green=Math.floor(Math.random()*255)+1;
        random_blue=Math.floor(Math.random()*255)+1;
        document.getElementById("body_label").innerHTML="Sound Detected is -"+results[0].label;
        document.getElementById("body_accuracy_display").innerHTML="Dog noise = "+Dog+" Cat noise = "+cat;
        document.getElementById("body_label").style.color="rgb("+random_red+", "+random_green+", "+random_blue+")";
        document.getElementById("body_accuracy_display").style.color="rgb("+random_red+", "+random_green+", "+random_blue+")";

        img=document.getElementById("image");

        if(results[0].label=="Barking"){
            img.src="DOG.jpg";
            Dog=Dog+1;
        }

        else if(results[0].label=="Meowing"){
            img.src="cat.jpg";
            cat=cat+1;
        }

        else{
            img.src="EAR.png";
        }
    }
}