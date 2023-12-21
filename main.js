//https://teachablemachine.withgoogle.com/models/SWEK9U5tj/model.json

var prediction0 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})


camera = document.getElementById("camera")
Webcam.attach("#camera")

function take_pic(){
    Webcam.snap(function(dataURL){
        document.getElementById("result").innerHTML="<img id='takenpic' src='"+dataURL+"'>"
    })
}

console.log(ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SWEK9U5tj/model.json', modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function speak(){
    var synth = window.speechSynthesis
    speakData1="The prediction zero is "+prediction0
    var speakThis=new SpeechSynthesisUtterance(speakdata0)
    synth.speak(speakThis)
}

function checkthing(){
    img = document.getElementById("takenpic")
    classifier.classify(img, getresult)
}

function getresult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)

        document.getElementById("result").innerHTML=results[0].label

        prediction0 = results[0].label


        speak()

        if(results[0].label=="Okay"){
            document.getElementById("update_emoticon0").innerHTML="&#9996;"
        }

        if(results[0].label=="Thumbs Up"){
            document.getElementById("update_emoticon0").innerHTML="&#128077;"
        }

        if(results[0].label=="Peace"){
            document.getElementById("update_emoticon0").innerHTML="&#128076;"
        }
    }
}