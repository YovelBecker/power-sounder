<template>
  <section
    @click.self="play"
    class="sound-preview-container"
    :class="{ playing: isPlaying }"
  >
    <h4>{{ sound.name | capitalizeAll }}</h4>
  </section>
</template>

<script>

export default {
  props: {
    sound: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      currSound: new Audio(require(`../../assets/sounds/${this.sound.id}.mp3`)),
      isPlaying: false
    }
  },
  created() {
    this.currSound.ontimeupdate = () => {
      if (this.currSound.ended) {
        this.isPlaying = false;
      } else {
        this.isPlaying = (!this.currSound.paused) ? true : false;
      }
    }
  },
  methods: {
    play() {
      if (this.isPlaying) {
        this.currSound.pause();
      } else {
        this.isPlaying = true;
        this.currSound.play();
      }
    }
  },
}
</script>

<style lang="scss">
.sound-preview-container {
  width: 15vw;
  height: 15vw;
  margin: 20px;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  cursor: pointer;
  display: flex;
  flex-direction: column-reverse;
  h4 {
    text-align: center;
  }
}

.playing {
  background-image: linear-gradient(to top, #eb4444 0%, #fefa04 100%);
}
</style>