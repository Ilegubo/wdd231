if (!localStorage.getItem('noVisits')) {
    localStorage.setItem('noVisits', '1');
}
else {
    localStorage.setItem('noVisits', parseInt(localStorage.getItem('noVisits')) + 1);
}

const params = new URLSearchParams(window.location.search);
const name = params.get('last');
const email = params.get('email');
const visits = localStorage.getItem('noVisits');

document.getElementById('name').textContent = name;
document.getElementById('email').textContent = email;
document.getElementById('visits').textContent = visits;