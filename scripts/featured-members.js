// Fetch and display random featured members (level 1 or 2)
async function fetchFeaturedMembers() {
    try {
        const response = await fetch('chamber/data/members.json');
        if (!response.ok) {
            throw new Error(`Failed to load members: ${response.status}`);
        }
        const members = await response.json();
        
        // Filter members with level 1 or 2
        const featuredMembers = members.filter(member => member.membershipLevel === 1 || member.membershipLevel === 2);
        
        // Shuffle and pick 2 random members
        const randomMembers = getRandomMembers(featuredMembers, 2);
        
        // Display the cards
        displayMemberCards(randomMembers);
    } catch (error) {
        console.error('Error fetching featured members:', error);
    }
}

// Fisher-Yates shuffle to get random members
function getRandomMembers(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}

// Display member cards
function displayMemberCards(members) {
    const container = document.getElementById('member-cards');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing cards
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.loading = 'lazy';
        
        const name = document.createElement('h3');
        name.textContent = member.name;
        
        const address = document.createElement('p');
        address.textContent = member.address;
        
        const phone = document.createElement('p');
        phone.textContent = member.phone;
        
        const link = document.createElement('a');
        link.href = member.url;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = 'Visit Website';
        
        const level = document.createElement('span');
        level.className = 'membership-level';
        level.textContent = `Level ${member.membershipLevel}`;
        
        card.append(img, name, address, phone, link, level);
        container.appendChild(card);
    });
}

// Load featured members when page loads
document.addEventListener('DOMContentLoaded', fetchFeaturedMembers);
