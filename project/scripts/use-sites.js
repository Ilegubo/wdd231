// ======================FEATURED SITES======================
import { sites } from './tourist-sites.mjs';

function getRandomSites(siteList, count = 3) {
    if (!Array.isArray(siteList) || siteList.length === 0) return [];
    const shuffled = [...siteList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

export async function loadFeaturedSites(count = 3) {
    return getRandomSites(sites, count);
}

function createHeading(text) {
    const heading = document.createElement('h2');
    heading.textContent = text;
    return heading;
}

function getRenderTargets(destinationSelector, headingContainerSelector) {
    let destination = destinationSelector ? document.querySelector(destinationSelector) : null;
    let headingContainer = headingContainerSelector ? document.querySelector(headingContainerSelector) : null;

    if (!destination) {
        destination = document.querySelector('#featured-destinations') || document.querySelector('#destinations');
    }

    if (!headingContainer) {
        headingContainer = document.querySelector('#all-cards-container') || destination?.parentElement || destination;
    }

    return { destination, headingContainer };
}

export async function renderFeaturedSites({
    destinationSelector,
    headingContainerSelector,
    headingText = 'Featured Cards',
    count = 3
} = {}) {
    const { destination, headingContainer } = getRenderTargets(destinationSelector, headingContainerSelector);
    if (!destination) return;

    const heading = createHeading(headingText);
    if (headingContainer) {
        headingContainer.prepend(heading);
    } else if (destination.parentNode) {
        destination.parentNode.insertBefore(heading, destination);
    }

    const featuredSites = await loadFeaturedSites(count);

    featuredSites.forEach(item => {
        const section = document.createElement('section');
        section.classList.add('card');

        const div1 = document.createElement('div');
        div1.classList.add('div1', 'image-div');
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        img.loading = 'lazy';
        img.classList.add('card-img');
        div1.appendChild(img);

        const div2 = document.createElement('div');
        div2.classList.add('div2', 'text-div');
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

        section.append(div1, div2);
        destination.appendChild(section);
    });
}

if (document.title === "Tourist Guide Visit"){
    renderFeaturedSites();
}

else if (document.title === "Explore Tourist Sites"){
    renderFeaturedSites({ count: sites.length });
}
document.querySelectorAll('img').forEach(img => {
  img.loading = 'lazy';
});