










const display = document.querySelector("input");
const button = document.querySelector("button");
const copybtn= document.querySelector("sapn.far");
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

button.onclick = () =>{
    let i;
    randonPassword = "";

    for (i = 0; i < 12; i++) {
        randonPassword = randonPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randonPassword;
}
function copy(){
    display.select();
    document.execCommand("copy");
}