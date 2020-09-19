<template>
  <section
    @click="play"
    @contextmenu.prevent="console.log('right-click')"
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
      if (this.currSound.ended || this.currSound.paused) {
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
      }
    }
  },
  computed: {
    console() {
      return console;
    }
  },
  methods: {
    play() {
      if (this.isPlaying) {
        this.currSound.pause();
        this.currSound.currentTime = 0;
      } else {
        this.currSound.play();
      }
      this.isPlaying = !this.isPlaying;
    },
  },
}
</script>

<style lang="scss">
.sound-preview-container {
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  cursor: pointer;
  user-select: none;

  h4 {
    text-align: center;
  }

  &.playing {
    background-image: linear-gradient(to top, #eb4444 0%, #fefa04 100%);
  }
}
</style>