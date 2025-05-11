let aantal_buttons = 31

for (let x = 1; x < aantal_buttons ; x++) {
    var color_button = document.createElement("button");
    color_button.appendChild(document.createTextNode(x));
    color_button.id = (`Button`)
    var page = document.getElementById("container");
    page.appendChild(color_button);
    color_button.setAttribute("data-clicks", 0);
}
document.querySelectorAll("button").forEach(button => { //does a query over all buttons on screen and uses a for loop to loop trough all of them and give them a specific atribute
    button.addEventListener("click", function() { 
        let clicks = parseInt(this.getAttribute("data-clicks"));
        clicks++;
        this.setAttribute("data-clicks", clicks);
        if(clicks === 1){
        this.style.backgroundColor = "red"
        }else if(clicks === 2){
        this.style.backgroundColor = "purple"
        }else if(clicks === 3){
        this.style.backgroundColor = "blue"
        }else if(clicks === 4){
        this.style.backgroundColor = "black"
        }else if(clicks === 5){
        this.remove()
        }; 
        });
});