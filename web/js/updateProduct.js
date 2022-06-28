const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
function showData(){
    const photo=document.getElementById('photo')
    const Name=document.getElementById('productName')
    const number=document.getElementById('productQuantity')
    const price =document.getElementById('productPrice')
    const category=document.getElementById('category')
    var products =JSON.parse(localStorage.getItem('products') || [])
    var index =localStorage.getItem('updateIndex') || ''
    // console.log(products[index]); 
    Name.value=products[index].productName
    number.value=products[index].ProductNumber
    price.value=products[index].price
    category.value=products[index].category
}

const photo=document.getElementById('photo')
const Name=document.getElementById('productName')
const NameReq=document.getElementById('NameReq')
const photoReq=document.getElementById('photoReq')
const btn=document.getElementById('btn')
const number=document.getElementById('productQuantity')
const numberReq=document.getElementById('numberReq')
const price =document.getElementById('productPrice')
const priceReq=document.getElementById('priceReq')
const category=document.getElementById('category')

btn.addEventListener('click',async (e) =>{
    e.preventDefault();
    var hasError = false;
    if (Name.value == '') {
        Name.classList.remove('is-valid')
        Name.classList.add('is-invalid')
        NameReq.innerText = 'Le nom du produit est obligatoire';
        hasError = true;
    }
    else {
        Name.classList.add('is-valid')
        Name.classList.remove('is-invalid')
        NameReq.innerHTML = '';
    }
    if (number.value == '') {
        number.classList.remove('is-valid')
        number.classList.add('is-invalid')
        numberReq.innerText = 'Entrez le nombre des produits';
        hasError = true;
    }
    else {
        number.classList.add('is-valid')
        number.classList.remove('is-invalid')
        numberReq.innerHTML = '';
    }
    if (price.value == '') {
        price.classList.remove('is-valid')
        price.classList.add('is-invalid')
        priceReq.innerText = 'Entrez le prix de produit  ';
        hasError = true;
    }
    else {
        price.classList.add('is-valid')
        price.classList.remove('is-invalid')
        priceReq.innerHTML = '';
    }
    if(category.value == 'category'){
        category.classList.remove('is-valid')
        category.classList.add('is-invalid')
        hasError = true;
    }
    else {
        category.classList.remove('is-invalid')
        category.classList.add('is-valid')
    }
    if (hasError == false){
        var products =JSON.parse(localStorage.getItem('products')) || [];
        var index =localStorage.getItem('updateIndex') || ''
        let base64 = "";
        if(photo.files.length>0){
            const image = photo.files[0];
            base64 = await toBase64(image);
        }else{
            base64 = products[index].photo
        }
        var product ={
            productName:Name.value,
            photo:base64,
            ProductNumber:number.value,
            price:price.value,
            category:category.value,
        }
        products.splice(index,1,product)
        localStorage.setItem('products',JSON.stringify(products))
        console.log(products);
        location.href = "dashboard.html";
    }
    
})
// load function to show categiries in select

function loadCategories(){
    var categories=JSON.parse(localStorage.getItem('categories') || '[]')
    categories.map(category=>{
        const cat=document.getElementById('category')
        cat.innerHTML+=`
        <option value="${category.nameOfCategory}">${category.nameOfCategory}</option>                   
        `
        console.log(category.nameOfCategory);
    })
}