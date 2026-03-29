function showSection(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* IMAGE POPUP */
function openModal(src) {
    let modal = new bootstrap.Modal(document.getElementById('imgModal'));
    document.getElementById('modalImg').src = src;
    modal.show();
}
