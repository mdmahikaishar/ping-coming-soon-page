const $field = document.querySelector(".heroField input");
const $submitBtn = document.querySelector(".heroSubmit");

$submitBtn.onclick = (e) => {
    e.preventDefault();

    if (!$field.value || $field.value.replace(/[\w\d\.\-\_\@]+/g, "")) {
        $field.parentNode.classList.add("heroFieldError");
        return;
    }
    $field.parentNode.classList.remove("heroFieldError");
};
