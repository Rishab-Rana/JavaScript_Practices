
document.getElementById('nav-icon').addEventListener("click", menu);
var x = document.getElementById('mobile-nav-list');
x.style.transform = 'translateX(200%)'
let a = 0;
function menu() {
    
    x.style.transition= 'all 0.5s';
    if(a==1){
        x.style.transform = 'translateX(0%)';
        x.style.display = 'flex';
        a--;
    }
    else{
        x.style.transform = 'translateX(100%)';
        a++;
    }
   

}
