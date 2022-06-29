function isAuth(){
    let connectedUser= JSON.parse(localStorage.getItem('authUser'))
    if(connectedUser == null){
        location.href='login.html'
   }

}