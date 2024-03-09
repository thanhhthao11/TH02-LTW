function showpass(){
    var cf = window.confirm("Bạn muốn hiện mật khẩu")
    if(cf){
        document.getElementById("password").type = "text"
    }else{
        document.getElementById("password").type = "password"

    }
}