function animateAndRedirect(event) {
    event.preventDefault();

    var btn = document.getElementById('submitBtn');
    btn.classList.add('animate-on-submit');

    btn.addEventListener('animationend', function () {
        btn.classList.remove('animate-on-submit');
        btn.closest('form').submit();
    }, { once: true });
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('a.button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        var destination = this.href;
        document.body.classList.remove('fade-in');
        setTimeout(function() {
            window.location.href = destination;
        }, 500);
    });
});
