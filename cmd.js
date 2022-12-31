document.getElementById("btn-nght").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","Noite");
})

document.getElementById("btn-lght").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","Dia");
})

function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == 'adm' && senha == '1234'){
        alert("Ok")
    } else{alert("Error")}
}
