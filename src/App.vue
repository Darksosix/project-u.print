<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 font-anakotmai">
    <!-- Header -->
    <Header />
    <router-view />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anakotmai:wght@300;400;700&display=swap');
.font-anakotmai {
  font-family: 'Anakotmai', sans-serif;
}
</style>