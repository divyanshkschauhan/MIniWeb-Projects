const search_icon = document.querySelector(".search-icon i");
const srch_inp_wrp = document.querySelector(".search-input-wrapper");
const srch_inp = document.querySelector(".search-input input");
const cls_i = document.querySelector(".close-icon");

search_icon.addEventListener("click", () => {
    search_icon.parentElement.classList.add("change");
    srch_inp_wrp.classList.add("change");
    setTimeout(() => {
        srch_inp.focus();
    }, 1000);
});

cls_i.addEventListener("click", () => {
    search_icon.parentElement.classList.remove("change");
    srch_inp_wrp.classList.remove("change");
});
