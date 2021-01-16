function send(element) {
    const formData = new FormData(element.parentElement);
    const request = new XMLHttpRequest();
    request.open('POST', '/login');
    request.send(formData);
    request.onload = function (ev) {
        const data = JSON.parse(request.responseText);
        const label = element.previousElementSibling.previousElementSibling;
        if (data.success) {
            element.parentElement.style = '';
            window.location.reload();
        } else {
            element.parentElement.classList.add('error');
        }
    }
}