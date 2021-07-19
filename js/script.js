const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    console.log(convertData);

    let content = document.getElementById('content');

    let cadastrado = '<p> Bem vindo!</p>';

    content.innerHTML = cadastrado;

})