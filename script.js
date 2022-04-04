const menubtn = document.querySelector(".menu")
let menuclosed = false;
menubtn.addEventListener("click", () => {
    if (!menuclosed) {
        menubtn.classList.add("open");
        menuclosed = true;
    } else {
        menubtn.classList.remove("open");
        menuclosed=false;  
    }
});