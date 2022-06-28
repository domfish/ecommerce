const category=document.getElementById('categorie')
const categoryReq=document.getElementById('categoryReq')
const area=document.getElementById('area')
const areaReq=document.getElementById('areaReq')
const btn=document.getElementById('btn')

function showData(){
    var index=JSON.parse(localStorage.getItem('upDateCategoryIndex')|| '')
    var categories = JSON.parse(localStorage.getItem('categories') || '[]')
    category.value =categories[index].NameOfCategory
    area.value =categories[index].DescriptionOfCategory
}
btn.addEventListener('click', (e)=>{
    
    e.preventDefault();
    var hasError = false;
    // console.log(category);
    if(category.value == ''){
        category.classList.remove('is-valid')
        category.classList.add('is-invalid')
        categoryReq.innerHTML='You must enter a new Category '
        hasError = true;
    }
    else {
        category.classList.add('is-valid')
        category.classList.remove('is-invalid')
        categoryReq.innerHTML=''
    }
    if(area.value == ''){
        area.classList.remove('is-valid')
        area.classList.add('is-invalid')
        areaReq.innerHTML='You must enter a description '
        hasError = true;
    }
    else {
        area.classList.add('is-valid')
        area.classList.remove('is-invalid')
        areaReq.innerHTML=''
    }
    if (hasError == false) {
        var categories = JSON.parse(localStorage.getItem('categories') || '[]')
        var index=JSON.parse(localStorage.getItem('upDateCategoryIndex')|| '')
        var categoryData = {
            NameOfCategory : category.value,
            DescriptionOfCategory : area.value,
        }
        categories.splice(index,1,categoryData);
        localStorage.setItem('categories',JSON.stringify(categories))
        location.href='categories.html'
    }

    
})

