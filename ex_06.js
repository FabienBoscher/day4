
document.addEventListener('DOMContentLoaded', function() {
   
    window.addEventListener('resize', function() {
        alert("Size matters");
    });
    
    let ima = document.querySelector('img[src="../Iphone22.png"]')
    ima.addEventListener('mouseover', function() {
        alert("Pretty, isn't it?");
    });
});
