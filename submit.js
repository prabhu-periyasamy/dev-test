function submitForm() {
    var aa = document.getElementById("form-section"),
        form = document.getElementById("webinar_form");

    setTimeout(() => {
        aa.classList.toggle("toogle-success");
        form.reset();
    }, 3000);
}