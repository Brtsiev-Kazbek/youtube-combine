class VideoRecorder {
    #root = null;
    #video = null;
    #stream = null;
    #mediaRecorder = null;
    #dataChunks = null;

    constructor() {
        this.setVideoRecorderValues();
    }

    setVideoRecorderValues() {
        this.#root = document.querySelector('#movie_player');
        this.#video = this.#root?.querySelector('video');

        this.#stream = new MediaStream(this.#video.captureStream());
        this.#mediaRecorder = new MediaRecorder(this.#stream);
        this.#dataChunks = [];
    }

    get root() {
        return this.#root;
    }
    get video() {
        return this.#video;
    }

    get stream() {
        return this.#stream;
    }

    get mediaRecorder() {
        return this.#mediaRecorder;
    }

    get dataChunks() {
        return this.#dataChunks;
    }
}

export { VideoRecorder };
