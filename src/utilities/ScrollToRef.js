export const scrollToRef = (section) => {
    let scrollToY;
    let header = document.getElementById('myHeader');

    switch(section) {
        case 'top':
            scrollToY = 0;
            break;
        case 'about':
            // scrollToY = document.getElementById('about').offsetTop - (window.pageYOffset > document.getElementById('myHeader').offsetTop ? 0 : 50);
            scrollToY = document.getElementById('about').offsetTop - 30;
            break;
        case 'projects':
            // scrollToY = document.getElementById('projects').offsetTop - (window.pageYOffset > document.getElementById('myHeader').offsetTop ? 20 : 40);
            scrollToY = document.getElementById('projects').offsetTop - 10;
            break;
        default:
            scrollToY = 0;
            break;
    }

    window.scrollTo({left: 0, top: scrollToY, behavior: 'smooth'});
}