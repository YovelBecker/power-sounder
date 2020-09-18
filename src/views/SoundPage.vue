<template>
  <div class="sound-page-container">
    <SoundList />
  </div>
</template>

<script>
import SoundList from '@/components/Sound/SoundList.vue';

export default {
  name: 'SoundPage',
  components:{SoundList}
}
</script>
