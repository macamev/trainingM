let button = document.getElementById("buttonCalc");
let buttonSets = document.getElementById("buttonSets");
let plusFive = 0;
let inputSet = document.getElementById("tSet");


button.onclick = function() {
    
    let weight = document.getElementById("tWeight").value;
    let reps = document.getElementById("tReps").value;
    let oneMax =  weight / (1.0278 - (0.0278 * reps));
    let list = document.getElementsByClassName("specific");
    
    list[0].innerHTML = Math.round(oneMax * 0.90);

    for(var i=0; i < list.length; i++){
        list[i].innerHTML = Math.round(oneMax * (0.65 + plusFive));
        console.log(list);
        console.log(plusFive);
        plusFive += 0.05;
    }
    plusFive = 0;
}

// buttonSets.onclick = function(){
//     let finalValue = document.getElementsByClassName("finalValue");
//     let percentage = document.getElementsByClassName("percentMultiply");
//     let trainingMax = document.getElementById("tSet").value;

//     console.log(trainingMax);
//     console.log(percentage);

//     for(var i=0; i < percentage.length; i++){
//         finalValue[i].innerHTML = Math.round(percentage[i].innerHTML * trainingMax);
//     }
// }


inputSet.onkeyup =  function(){

        let finalValue = document.getElementsByClassName("finalValue");
        let percentage = document.getElementsByClassName("percentMultiply");
        let trainingMax = document.getElementById("tSet").value;

        console.log(trainingMax);
        console.log(percentage);

        for(var i=0; i < percentage.length; i++){
            finalValue[i].innerHTML = Math.round(percentage[i].innerHTML * trainingMax);
        }
        
}

inputSet.onkeydown = function(){
    if(window.event.keyCode == 13){
        return false;
    }
}
