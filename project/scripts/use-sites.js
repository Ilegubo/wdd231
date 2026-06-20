// ======================FEATURED SITES======================
import { sites } from './tourist-sites.mjs';

const featuredDestinations = document.getElementById('featured-destinations');
function getRandomSites(siteList, count) {
    if (!Array.isArray(siteList) || siteList.length === 0) return [];
    const shuffled = [...siteList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

async function loadFeaturedSites() {
    return getRandomSites(sites, 3);
}

async function renderFeaturedSites() {
    const allCardsContainer = document.getElementById('all-cards-container');
    const container = featuredDestinations;
    if (!allCardsContainer || !container) return;

    const heading = document.createElement('h2');
    heading.textContent = 'Featured Cards';
    allCardsContainer.prepend(heading);

    const featuredSites = await loadFeaturedSites();

    featuredSites.forEach(item => {
        const section = document.createElement('section');
        section.classList.add('card');
        
        const div1 = document.createElement('div');
        div1.classList.add('div1');
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        img.loading = 'lazy';
        img.classList.add('card-img');
        div1.appendChild(img);
        
        const div2 = document.createElement('div');
        div2.classList.add('div2');
        const h3 = document.createElement('h3');
        h3.textContent = item.name;
        const funfact = document.createElement('p');
        funfact.textContent = item.funfact;
        const url = document.createElement('a');
        url.href = item.url;
        url.target = '_blank';
        url.rel = 'noopener';
        url.textContent = 'Learn More';
        div2.append(h3, funfact, url);

        div1.classList.add('image-div');
        div2.classList.add('text-div');
        
        section.append(div1, div2);
        
        container.appendChild(section);
        section.classList.add('card');
    });
}

renderFeaturedSites();