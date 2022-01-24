import { shootClip } from './shootClip';

export const insertButton = () => {
    let controls = document.querySelector('.ytp-right-controls');
    let shootClipButton = document.createElement('div');

    shootClipButton.setAttribute('class', 'ytp-button');
    shootClipButton.setAttribute('style', 'font-size: 1.6em; text-align: center;');
    shootClipButton.innerHTML = '&#128249;';

    controls.insertAdjacentElement('afterbegin', shootClipButton);
    shootClipButton.addEventListener('click', shootClip);
};
