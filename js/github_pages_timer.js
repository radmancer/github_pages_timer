if (typeof(Storage) !== "undefined") {
    if (sessionStorage.firstPageLoad) {
        sessionStorage.firstPageLoad = false;
        var alertDiv = document.createElement("div");
        alertDiv.id = "alertDiv";
        alertDiv.style.width = "100vw";
        alertDiv.style.height = "10vh";
        alertDiv.style.backgroundColor = "red";
        alertDiv.innerHTML = "Changes are now ready!";
        alertDiv.style.color = "white";
        alertDiv.style.fontSize = "5vh";
        alertDiv.style.textAlign = "center";
        alertDiv.style.verticalAlign = "middle";
        alertDiv.style.lineHeight = "10vh";
        var closeButton = document.createElement("input");
        closeButton.type = "button";
        closeButton.value = "ok";
        closeButton.style.marginLeft = "2vw";
        closeButton.onclick = function(){document.getElementById("alertDiv").remove();};
        alertDiv.appendChild(closeButton);
        document.body.insertBefore(alertDiv, document.body.childNodes[0]);
    } else {
        sessionStorage.firstPageLoad = true;
        setTimeout(function(){
            window.location.href = "github_pages_timer.html";
        }, 60000);
    }
} else {
    alert("Sorry, your browser does not support web storage.");
}