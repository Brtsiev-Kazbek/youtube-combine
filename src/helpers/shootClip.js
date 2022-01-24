import { saveDownload } from './download.js';
import { VideoRecorder } from '../VideoRecorder.js';

// Это временное решение. TODO: допилить VideoRecorder и логику обновления
let videoRecorder = new VideoRecorder();

function shootClip() {
    // Времени нема ибо сессия. Позже переделаю.

    window.recorder = videoRecorder.mediaRecorder;

    videoRecorder.mediaRecorder.ondataavailable = (e) => {
        videoRecorder.dataChunks.push(e.data);

        const blob = new Blob(videoRecorder.dataChunks, {
            type: 'video/webm'
        });
        console.log(blob);
        console.log(videoRecorder.dataChunks);
        const link = URL.createObjectURL(blob);
        saveDownload(link, 'video.webm');
    };

    if (videoRecorder.mediaRecorder.state == 'inactive') {
        videoRecorder.setVideoRecorderValues();
        videoRecorder.mediaRecorder.start();
        console.log('started');
    } else if (videoRecorder.mediaRecorder.state == 'recording') {
        videoRecorder.mediaRecorder.stop();
        console.log('stopped');
    }
}

export { shootClip };
