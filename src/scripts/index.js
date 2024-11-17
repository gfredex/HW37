import { greet } from "./first-module";
import { myLogo } from "./add-img";
import '../style/main.css';

const title = document.createElement('h1');
title.textContent = 'Моя первая сборка проекта';

const root = document.getElementById('root');
root.append(title);

const imgTitle = document.createElement('p');
imgTitle.classList.add('img-title');
imgTitle.textContent = 'Подпись для картинки';

greet();
myLogo();
root.append(imgTitle);
