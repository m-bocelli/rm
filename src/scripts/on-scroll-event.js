const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

// Assign hidden class to all entries that are visible, this is incase JS is disabled
const utils = document.body.querySelectorAll('*');
utils.forEach((util) => {
    if (util.checkVisibility()) {
        util.classList.add('hidden');
    }
});

utils.forEach((util) => {
    observer.observe(util);
});
