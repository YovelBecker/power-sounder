export default {
    state: {
        currSound: null,
    },
    mutations: {
        setCurrSound(state, soundId) {
            if (state.currSound) {
                this.commit({ type: 'pause' })
                state.currSound = null;
            }
            state.currSound = new Audio(require(`@/assets/sounds/${soundId}.mp3`));
            state.currSound.id = soundId
        },
        pause(state) {
            state.currSound.pause();
            state.currSound.currentTime = 0;
            state.currSound = null;

        },
        play(state) {
            state.currSound.play();
        }
    },
    getters: {
        currSound(state) {
            return state.currSound;
        }
    },
}