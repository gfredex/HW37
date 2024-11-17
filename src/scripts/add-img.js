import logoSrc from '../assets/logo.png'

export function myLogo() {
    const root = document.getElementById('root');
    const imgBlock = document.createElement('div');
    imgBlock.classList.add('img-block');
    const img = document.createElement('img');
    img.alt = 'logo';
    img.src = logoSrc;
    imgBlock.appendChild(img);
    root.appendChild(imgBlock);
}