function onSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username-input').value;
    const email = document.getElementById('email-input').value;

    alert('Utilizatorul' + username + ' s-a logat cu email-ul ' + email);
}