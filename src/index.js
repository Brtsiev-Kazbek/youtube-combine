import { insertButton } from './helpers/insertButton';
import { hotKey } from './helpers/hotKey';
import { shootClip } from './helpers/shootClip';

function main() {
    setTimeout(insertButton, 2000);
    hotKey(shootClip, 'ControlLeft', 'KeyM');
}

main();
