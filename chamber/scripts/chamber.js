// select the ham-btn
hamButton = document.querySelector("#ham-btn");
navLink = document.querySelector("#navigation");

hamButton.addEventListener('click',() =>{
    hamButton.classList.toggle('show');
    navLink.classList.toggle('show');
});

//===========OBJ============

// const date = document.getElementById("year").textContent = `Last Modified: ${document.lastModified}`;

document.querySelectorAll("img").forEach(img => { img.setAttribute("loading", "lazy")});




async function getCards() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`Failed to load members: ${response.status}`);
        }

        const companies = await response.json();
        return companies;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function renderBusinesses() {
    const data = await getCards();
    const sectionGrid = document.querySelector('.businesses');
    if (!sectionGrid || !Array.isArray(data)) return;

    data.forEach(item => {
        const section = document.createElement('section');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.loading = 'lazy';
        img.classList.add('business-img');

        const h3 = document.createElement('h3');
        h3.textContent = item.name;

        const url = document.createElement('a');
        url.href = item.url;
        url.target = '_blank';
        url.rel = 'noopener';
        url.textContent = 'Website';

        const phone = document.createElement("p");
        phone.textContent = item.phone;

        const address = document.createElement("p");
        address.textContent = item.address;

        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        
        div1.append(img)
        div2.append(h3, address, url, phone)


        section.append(div1, div2);
        section.classList.add('business-card')
        sectionGrid.appendChild(section);
    });
}

renderBusinesses();

changeView = document.querySelector("#change-view");
changeView.addEventListener('click', ()=> {
    classList.toggle('change');

})