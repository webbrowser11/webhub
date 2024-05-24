function setLanguage(language) {
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(element => {
        element.innerHTML = element.getAttribute(`data-${language}`);
    });
}
