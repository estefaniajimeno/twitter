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
            tuitP.textContent = text.value;
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
}

