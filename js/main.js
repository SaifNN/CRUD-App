
let productName = document.getElementById("productname")
let productPrice = document.getElementById("price")
let productCategory = document.getElementById("category")
let productCount = document.getElementById("count")
let productDesc = document.getElementById("descripation")
let mood = "create"
let allproducts = []
tmp = ""
let search = document.getElementById("search")

if (localStorage.getItem("products") != null) {
    allproducts = JSON.parse(localStorage.getItem("products"))
    showProducts()
}

function addproduct() {
    let product = {
        name: productName.value.toLowerCase(),
        price: productPrice.value,
        category: productCategory.value,
        count: productCount.value,
        desc: productDesc.value
    }
    if (productName.value != "") {
        if (mood == "create") {
            allproducts.push(product)
            localStorage.setItem("products", JSON.stringify(allproducts))
            productName.value = ""
            productPrice.value = ""
            productCategory.value = ""
            productCount.value = ""
            productDesc.value = ""
            showProducts()

        } else {
            allproducts[tmp] = product
            localStorage.setItem("products", JSON.stringify(allproducts))
            document.querySelector(".Add").innerHTML = "Add Product"
            mood = "create"
            productName.value = ""
            productPrice.value = ""
            productCategory.value = ""
            productCount.value = ""
            productDesc.value = ""
            showProducts()

        }

    }

}
let counts = ""

function showProducts() {

    let counts = ""

    for (i = 0; i < allproducts.length; i++) {
        counts += `<tr>
            <th scope="row">${i}</th>
            <td>${allproducts[i].name}</td>
            <td>${allproducts[i].price}</td>
            <td>${allproducts[i].category}</td>
            <td>${allproducts[i].count}</td>
            <td>${allproducts[i].desc}</td>
            <td><button class="btn btn-danger" onclick=" deleteProduct(${i})">Delete</button></td>
            <td><button class="btn btn-warning" onclick="updateproduct(${i})">Update</button></td>
            
            
        </tr>`
    }
    document.querySelector("tbody").innerHTML = counts
}

function deleteProduct(index) {
    allproducts.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(allproducts))
    showProducts()
}

function updateproduct(i) {

    productName.value = allproducts[i].name
    productPrice.value = allproducts[i].price
    productCategory.value = allproducts[i].category
    productCount.value = allproducts[i].count
    productDesc.value = allproducts[i].desc
    document.querySelector(".Add").innerHTML = "update Product"
    mood = "update"
    tmp = i


}
function searchproduct(value) {

    console.log(value);
    let counts = ""
    for (i = 0; i < allproducts.length; i++) {
        if (allproducts[i].name.includes(value.toLowerCase())) {
                counts += `<tr>
                <th scope="row">${i}</th>
                <td>${allproducts[i].name}</td>
                <td>${allproducts[i].price}</td>
                <td>${allproducts[i].category}</td>
                <td>${allproducts[i].count}</td>
                <td>${allproducts[i].desc}</td>
                <td><button class="btn btn-danger" onclick=" deleteProduct(${i})">Delete</button></td>
                <td><button class="btn btn-warning" onclick="updateproduct(${i})">Update</button></td>
            </tr>`

        }

    }
    document.querySelector("tbody").innerHTML = counts
}   