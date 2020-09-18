<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
import soundService from './services/soundService'
export default {
  components:{
    NavBar
  }
}
</script>