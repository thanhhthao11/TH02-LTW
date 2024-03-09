function display(){
    const name = document.getElementById("name").value
    
    const email = document.getElementById("email address").value

    const title = document.getElementById("title").value

    const content = document.getElementById("content").value
    window.confirm("Họ và tên: "+name+"\nE-mail: "+email+"\nTiêu đề: "+title+"\nNội dung góp ý:\n"+content)
    //alert()
}