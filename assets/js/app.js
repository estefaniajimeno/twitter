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
            nameSpan.textContent = "written" ;
            dateSpan.textContent = new Date();
            tuitP.textContent = text.value;
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
         

            }
         }
    }

     function contar(){
        var maximo = 140;
        var cadena = "";
        var caracteres= document.getElementById("texto").value.length;
        cadena = maximo-caracteres;
        document.getElementById("inputcaracteres").value=cadena;

        if(cadena<0){
            inputcaracteres.style.color="blue";
            }
        else if (cadena>=0 && cadena<120) {
            inputcaracteres.style.color="green";
        }
        else if (cadena>=120 && cadena<130) {
            inputcaracteres.style.color="yellow";
        }
        else  {
            inputcaracteres.style.color="black";
        }

    }

    
   