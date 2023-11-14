let links = document.getElementsByTagName("a");
let arrLinks = [...links];
arrLinks.forEach(link => link.addEventListener("click", (e) => {
    if(!link.href.startsWith("tel:")) {
        e.preventDefault();
    }
}));