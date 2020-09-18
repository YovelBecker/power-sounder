<template>
  <section class="sound-preview-container">
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
  created() {
    console.log(this.sound)
  }
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
</style>