const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

// Assign hidden class to all entries, this is incase JS is disabled
const utils = document.body.querySelectorAll('*');
utils.forEach((util) => {
    util.classList.add('hidden');
});

utils.forEach((util) => {
    observer.observe(util);
});
