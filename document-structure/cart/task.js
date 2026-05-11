let cartProductsContainer = document.querySelector(".cart__products")

document.querySelectorAll(".product__quantity-control").forEach((button) => {
  button.addEventListener("click", function () {
    let isIncrement = this.classList.contains("product__quantity-control_inc")
    let quantityValueElement = this.closest(
      ".product__quantity-controls"
    ).querySelector(".product__quantity-value")
    let currentQuantity = parseInt(quantityValueElement.textContent, 10)

    if (isIncrement) {
      currentQuantity++
    } else {
      currentQuantity = Math.max(1, currentQuantity - 1)
    }

    quantityValueElement.textContent = currentQuantity
  })
})

document.querySelectorAll(".product__add").forEach((addButton) => {
  addButton.addEventListener("click", function () {
    let productCard = this.closest(".product")
    let productId = productCard.getAttribute("data-id")
    let productImageSrc = productCard
      .querySelector(".product__image")
      .getAttribute("src")
    let quantityElement = productCard.querySelector(".product__quantity-value")
    let selectedQuantity = parseInt(quantityElement.textContent, 10)

    let existingCartProduct = cartProductsContainer.querySelector(
      `.cart__product[data-id="${productId}"]`
    )

    if (existingCartProduct) {
      let countElement = existingCartProduct.querySelector(
        ".cart__product-count"
      )
      let currentCount = parseInt(countElement.textContent, 10)
      countElement.textContent = currentCount + selectedQuantity
    } else {
      let newCartProduct = document.createElement("div")
      newCartProduct.className = "cart__product"
      newCartProduct.setAttribute("data-id", productId)

      newCartProduct.innerHTML = `<img class="cart__product-image" src="${productImageSrc}">
          <div class="cart__product-count">${selectedQuantity}</div>`

      cartProductsContainer.appendChild(newCartProduct)
    }
  })
})