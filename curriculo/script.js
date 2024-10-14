
document.querySelectorAll('section h2').forEach((heading) => {
    heading.addEventListener('click', () => {
        const sectionContent = heading.nextElementSibling;
        if (sectionContent.style.display === 'none') {
            sectionContent.style.display = 'block';
        } else {
            sectionContent.style.display = 'none';
        }
    });
});
