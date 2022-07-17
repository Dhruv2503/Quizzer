function clipboard(id){
    var a = "link"+id;
    var text = document.getElementById(a);
    // console.log(text.innerText);
    navigator.clipboard.writeText(text.innerText);
}