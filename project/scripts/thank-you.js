if (!localStorage.getItem('noVisits')) {
    localStorage.setItem('noVisits', '1');
}
else {
    localStorage.setItem('noVisits', parseInt(localStorage.getItem('noVisits')) + 1);
}