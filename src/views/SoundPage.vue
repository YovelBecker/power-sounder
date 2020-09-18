<template>
  <div class="sound-page-container">
    <SoundList v-if="soundList" :soundList="soundList" />
  </div>
</template>

<script>
import SoundList from '@/components/Sound/SoundList.vue';
import soundService from '@/services/soundService'

export default {
  name: 'SoundPage',
  data() {
    return {
      soundList: null,
    }
  },
  async created() {
    this.soundList = await soundService.getSounds();
  },
  components: { SoundList }
}
</script>

<style lang="scss">
.sound-page-container {
  background-image: linear-gradient(to top, #229292 0%, #330867 100%);
  min-height:70vh;
  max-width: 85%;
  margin: 0 auto;
  border-radius:20px;
  box-shadow: 0px 0px 17px 1px rgba(0,0,0,0.3);
}
</style>