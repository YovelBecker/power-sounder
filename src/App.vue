<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
export default {
  components:{
    NavBar
  }
}
</script>