function list() {
    const tbody = document.getElementById('tbody')
    var categories = JSON.parse(localStorage.getItem('categories') || '[]')
    categories.map((category, index) => {
        tbody.innerHTML += `
    <tr>
    <td scope="col">${category.id}</td>
    <td scope="col">${category.nameOfCategory}</td>
    <td scope="col">${category.descriptionOfCategory}</td>
    <td scope="col"><button class="btn btn-outline-info" onclick="ToUpdate(${index})"  type="button">update</button>
    <button class="btn btn-outline-danger" type="button" onclick="removeCategory(${index})"  id="delete">delete</button>
    </td>
  </tr>
    `;
    })
    // console.log(categories);
}
function removeCategory(index) {
    var categories = JSON.parse(localStorage.getItem('categories') || '[]')
    categories.splice(index, 1)
    localStorage.setItem('categories', JSON.stringify(categories))
    // console.log(products);
    location.reload();
}
function ToUpdate(index) {
    localStorage.setItem('upDateCategoryIndex', JSON.stringify(index))
    location.href='upDateCategory.html'
}
