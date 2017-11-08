window.onload = function() {
    var tweetButton = document.getElementsByName("tweet")[0];
    var text = document.getElementById("texto");
    var timeLine = document.getElementsByName("timeLine")[0];
        
    tweetButton.onclick = function() {
        if (text.value == "") {
            alert("you need to write something!");
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "written " ;
            dateSpan.textContent = new Date();
            tuitP.textContent = text.value;cument.
            /* Usamos timeLine.children para obtener los hijos
             del nodo, este siempre es un arreglo, aunque venga
             vacío. 
             YYYYYYYY... como insertBefore recibe dos parámetros y
             el segundo es opcional, si, el primer nodo no existe en 
             el arreglo children, entonces nos dará undefined. Y eso hará 
             que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
}


