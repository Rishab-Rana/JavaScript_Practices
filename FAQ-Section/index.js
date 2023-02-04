var list = 0;
var x;    

for (let i = 0; i <= 2; i++) {
        var x = document.querySelectorAll(".arrow-btn")[i].addEventListener("click", function (e) {
            document.querySelectorAll(".list-para")[i].style.display = "block";
            
        })
    }