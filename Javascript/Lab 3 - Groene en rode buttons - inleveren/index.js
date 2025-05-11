let aantal_buttons = 31

for (let x = 1; x < aantal_buttons ; x++) {
    var color_button = document.createElement("button");
    color_button.appendChild(document.createTextNode(x));
    color_button.id = (`Button`)
    var page = document.getElementById("container");
    page.appendChild(color_button);
    
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        if( this.style.backgroundColor === "red"){
            this.style.backgroundColor = "green"
        }else{
            this.style.backgroundColor = "red"
        };
    });
});