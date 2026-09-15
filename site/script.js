const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];

const navigationTargets = navigationLinks
  .map((link) => {
    const section = document.getElementById(link.hash.slice(1));

    return section ? { link, section } : null;
  })
  .filter(Boolean);

function setCurrentNavigation(target) {
  for (const { link, section } of navigationTargets) {
    if (section === target) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

for (const { link, section } of navigationTargets) {
  link.addEventListener('click', () => {
    setCurrentNavigation(section);
  });
}

if ('IntersectionObserver' in window && navigationTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const currentEntry = entries.find((entry) => entry.isIntersecting);

      if (currentEntry) {
        setCurrentNavigation(currentEntry.target);
      }
    },
    {
      rootMargin: '-15% 0px -65%',
      threshold: 0,
    },
  );

  for (const { section } of navigationTargets) {
    observer.observe(section);
  }
}
