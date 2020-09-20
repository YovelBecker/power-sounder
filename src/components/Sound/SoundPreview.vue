<template>
  <section
    @click="playSound"
    @contextmenu.prevent
    class="sound-preview-container"
    :class="{ playing: isPlaying }"
  >
    <h4>{{ sound.name | capitalizeAll }}</h4>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    sound: {
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters(['currSound']),
    isPlaying() {
      return this.currSound?.id === this.sound.id
    }
  },
  methods: {
    ...mapMutations(['setCurrSound', 'play', 'pause']),
    playSound() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.setCurrSound(this.sound.id);
        this.play(this.sound.id)
      }
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