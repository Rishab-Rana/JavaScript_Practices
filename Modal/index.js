var button = document.getElementById("btn");
var card = document.getElementById("card");
var x = 0 ;

button.addEventListener('click', function(e) {
card.style.display ="block";

if(x==0)
{
    card.style.display ="block";
    x++;
}
else{
    card.style.display ="none";
    x--;
}
})  