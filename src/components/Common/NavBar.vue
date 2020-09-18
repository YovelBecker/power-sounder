<template>
  <section class="nav-bar-container">
    <h1>Power Sounder</h1>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/styles/mixins.scss";
@import "@/styles/vars.scss";

.nav-bar-container {
  margin: 20px 0;
  padding: 20px 0;
  h1 {
    @include flex-center;
    font-size: $font-size-large;
    letter-spacing: 2px;
    font-weight: $font-weight-semi-bold;
  }
}
</style>