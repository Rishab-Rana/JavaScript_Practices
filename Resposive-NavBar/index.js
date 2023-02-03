
document.getElementById('nav-icon').addEventListener("click", menu);

let a = 0;
function menu() {
    var x = document.getElementById('mobile-nav-list');
    if(a==1){
        x.style.display = 'none';
        a--;
    }
    else{
        x.style.display = 'flex';
        a++;
    }
   
}