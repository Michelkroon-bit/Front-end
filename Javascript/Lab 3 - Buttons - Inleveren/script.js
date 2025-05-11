for (let x = 1; x < 4; x++) {
    var color_button = document.createElement("button");
    color_button.appendChild(document.createTextNode(`Button ${x}`));
    color_button.id = (`Button${x}`)
    var page = document.getElementById("container");
    page.appendChild(color_button);
    
}

color_one_button = document.getElementById(`Button1`)
    color_one_button.addEventListener("click" , function(){
        document.body.style.backgroundColor = "green";
    }
);

color_one_button = document.getElementById(`Button2`)
    color_one_button.addEventListener("click" , function(){
        document.body.style.backgroundColor = "red";
    }
);

color_one_button = document.getElementById(`Button3`)
    color_one_button.addEventListener("click" , function(){
        document.body.style.backgroundColor = "blue";
    }
);