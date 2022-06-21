const Name=document.getElementById('nom');
const prenom=document.getElementById('prenom');
const form=document.getElementById('registerForm');
const  NoRequired=document.getElementById('noRequired')


form.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    if (Name.value =='') {
        Name.classList.remove('is-valid')
        Name.classList.add('is-invalid')
        NoRequired.innerText='le nom est obligatoire';
    }
    else{
        Name.classList.add('is-valid')
        Name.classList.remove('is-invalid')
        NoRequired.innerHTML='';
    }
    
});