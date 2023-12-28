function animateAndRedirect(event) {
    event.preventDefault();

    var btn = document.getElementById('submitBtn');
    btn.classList.add('animate-on-submit');

    btn.addEventListener('animationend', function () {
        btn.classList.remove('animate-on-submit');
        btn.closest('form').submit();
    }, { once: true });
}