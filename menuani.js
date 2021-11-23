window.addEventListener('load', function() {
    let menumov;
    menumov = this.document.getElementById('menuMov');
    menumov.addEventListener('click', function() {

        menumov.classList.toggle('active');

    })

    let tog3, grande;
    grande = this.document.getElementById('gran')
    tog3 = this.document.getElementById('abce');
    tog3.addEventListener('click', function() {
        tog3.classList.toggle('active');
        grande.classList.toggle('active');
    })
})