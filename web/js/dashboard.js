
function list() {
    const tbody = document.getElementById('tbody')
    var products = JSON.parse(localStorage.getItem('products') || [])
    products.map((product, index) => {
        tbody.innerHTML += `
    <tr>
    <td scope="col">${product.id}</td>
    <td scope="col"><img src='${product.photo}' width='50px' height='50px'></td>
    <td scope="col">${product.productName}</td>
    <td scope="col">${product.ProductNumber}</td>
    <td scope="col">${product.price}</td>
    <td scope="col">${x(product.category)}</td>
    <td scope="col"><button class="btn btn-outline-info" onclick="ToUpdate(${index})" type="button">update</button>
    <button class="btn btn-outline-danger" type="button" onclick="removeProduct(${index})" id="delete">delete</button>
    </td>
  </tr>
    `;
    })
    // console.log(products);
}
function removeProduct(index) {
    var products = JSON.parse(localStorage.getItem('products') || '[]')
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    // console.log(products);
    location.reload();
}
function ToUpdate(index) {
    localStorage.setItem('updateIndex', JSON.stringify(index))
    location.href='updateProduct.html'
}
// switch the id by the name of category
function x(idCat){
    var categories = JSON.parse(localStorage.getItem('categories') || '[]')
    var e = categories.find(category=>{
       return idCat == category.id
    })
  var result =  e ?   e.nameOfCategory : ""
  return result;
}


