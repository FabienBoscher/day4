document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productName").innerHTML = "Samsung 22"
    document.getElementById("description").innerHTML = "Never miss that perfect shot again. <br><br>Designed to revolutionise video and<br> photography, with beyond cinematic <br>16K resolution.<br><br>Get yours now !"
    document.getElementById("price").textContent = "890€"
    document.getElementById("tag").remove()
    
    let image = document.querySelector('img[src="../Iphone22.png"]')
    image.src="Samsung22.png"



    let monBouton = document.getElementById("addToCart")
    let cartCount = 0

    
    if (monBouton)
       
        monBouton.addEventListener("click", function () {
            cartCount++
            document.getElementById("addToCart").innerHTML+= `<h3>In cart: ${cartCount} </h3>`
        })
     
})


