window.onload = function(e){ 
    loadDescriptionContainers();
}

const loadDescriptionContainers = ()=>{
    let containers = document.querySelectorAll(".description-container")
    for(let i = 0; i < containers.length; i+=1){
        let container = containers[i]
        let descriptionArray = descriptions[container.id]();
        console.log(!!descriptionArray)
        if(!!descriptionArray){
            for(let i = 0 ; i < descriptionArray.length; i+=1){
                let newDiv = document.createElement("div");
                newDiv.innerText = descriptionArray[i];
                container.appendChild(newDiv);
                container.appendChild(document.createElement("br"));
            }
        }
    }    
}