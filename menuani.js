window.addEventListener('load', function() {
    let menumov;
    menumov = this.document.getElementById('menuMov');
    menumov.addEventListener('click', function() {

        menumov.classList.toggle('active');

    })
})