document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".cart-btn").innerHTML = 'CHANGE COLOR'

    function fondChange(){
        const aaa = '#' + Math.floor(Math.random() * 1000000).toString(16) 
        document.body.style.backgroundColor = aaa
    }

    document.querySelector(".cart-btn").addEventListener("click",fondChange )
 })