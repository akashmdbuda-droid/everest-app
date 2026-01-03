export const scrollToSection = (e: React.MouseEvent | React.TouchEvent, href: string, callback?: () => void) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        if (callback) callback();

        // Small timeout to allow the menu close animation to start/layout to settle
        setTimeout(() => {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 100);
    } else if (callback) {
        callback();
    }
};
