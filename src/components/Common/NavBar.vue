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
  padding: 40px 0;
  margin-bottom: 20px;
  h1 {
    width: fit-content;
    margin: 0 auto;
    font-size: $font-size-large;
    letter-spacing: 2px;
    font-weight: $font-weight-semi-bold;
    transition: letter-spacing 0.2s;
    
    &:hover {
      letter-spacing: 5px;
    }
  }
}
</style>