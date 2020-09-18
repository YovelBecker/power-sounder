
<template>
  <section class="sound-list-container">
    <SoundPreview v-for="sound in soundList" :key="sound.id" :sound="sound" />
  </section>
</template>

<script>
import SoundPreview from './SoundPreview'
export default {
  props: {
    soundList: {
      type: Array,
      required: false
    }
  },
  components: { SoundPreview }
}
</script>

<style lang="scss">
.sound-list-container{
  margin: 0 auto;
  display:flex;
  flex-wrap: wrap;
  // justify-content:center;
}
</style>