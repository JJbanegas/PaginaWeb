window.addEventListener("DOMContentLoaded", ()=>{
    const orderButton = document.querySelectorAll("button[data-order]")

    orderButton.forEach((item) =>{
        item.addEventListener("click", (event) =>{
            const button = event.currentTarget
            const container = button.parentNode

            const order = {
                id : button.getAttribute("data-order"),
                titulo : container.querySelector(".titulo").innerText,
                precio : container.querySelector(".precio").innerText
            }

            localStorage.setItem("order", JSON.stringify(order))

            const url = window.location.href.replace("catalogo.html", "orden.html")
            window.location.href = url
        })
    })
})