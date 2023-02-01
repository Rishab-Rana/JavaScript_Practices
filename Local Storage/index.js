var x = document.getElementById("btn").addEventListener("click", function(e) {
    var z = localStorage.setItem("store", x);
    var el = localStorage.getItem("store");
    console.log(el);
})