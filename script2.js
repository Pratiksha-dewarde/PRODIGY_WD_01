document.getElementById('homeLink').addEventListener('click', function() {
    showSection('home');
});

document.getElementById('collectionLink').addEventListener('click', function() {
    showSection('Collection');
});

document.getElementById('contactLink').addEventListener('click', function() {
    showSection('contact');
});

document.getElementById('showContactFormBtn').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'block';
});

function showSection(sectionId) {
    const sections = ['home', 'collection', 'contact'];
    sections.forEach(function(id) {
        const section = document.getElementById(id);
        section.style.display = id === sectionId ? 'block' : 'none';
    });
}
