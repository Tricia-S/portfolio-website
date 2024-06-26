document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for 3D interactive effects
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const rotateX = (offsetY - clientHeight / 2) / clientHeight * 15;
            const rotateY = (offsetX - clientWidth / 2) / clientWidth * -15;

            target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        section.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
});

