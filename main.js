function record(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zmTk4uMGJ/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results)  {
    if(error)   {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("hear_text").innerHTML='I could hear voice of '+ results[0].label;
        document.getElementById("accuracy_text").innerHTML= 'Accuracy:' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("hear_text").style.color="rgb ("+ random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accuracy_text").style.color="rgb ("+random_number_b+", "+random_number_g+","+random_number_r+")";

        img= document.getElementById('Horse')
        img1= document.getElementById('Lion')
        img2= document.getElementById('Dog')
        img3= document.getElementById('Elephant')
      
        if (results[0].label == "Horse") {
            img.src= 'Horse.gif';
            img1.src= 'Lion pic.jpg';
            img2.src= 'Dog pic.jpg';
            img3.src= 'Elephant pic.jpg';
        }
        else if (results[0].label == "Lion") {
            img.src= 'Horse pic.png';
            img1.src= 'Lion.gif';
            img2.src= 'Dog pic.jpg';
            img3.src= 'Elephant pic.jpg';
        }
        else if (results[0].label == "Dog") {
            img.src= 'Horse pic.png';
            img1.src= 'Lion pic.jpg';
            img2.src= 'Dog.gif';
            img3.src= 'Elephant pic.jpg';
        }
        else {
            img.src= 'Horse pic.png';
            img1.src= 'Lion pic.jpg';
            img2.src= 'Dog pic.jpg';
            img3.src= 'Elephant.gif';
        }

    }
}