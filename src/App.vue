<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 font-anakotmai">
    <!-- Header -->
    <Header />
    <router-view />

    <!-- Content -->
    <div class="flex-grow flex items-center justify-center">
      <div class="text-center space-y-8">
        <h1 class="text-6xl font-bold text-gray-900 drop-shadow-lg tracking-tight">
          เปลี่ยนไอเดียให้เป็นจริงกับ <span class="text-yellow-500">u.print</span>
        </h1>
        <p class="text-gray-600 text-lg font-light max-w-lg mx-auto leading-relaxed">
          เราให้บริการออกแบบฟรีแลนซ์และเทมเพลต PowerPoint ระดับมืออาชีพ ด้วยดีไซน์ทันสมัยไม่ซ้ำใคร
        </p>
        <div class="flex justify-center space-x-4">
          <button class="px-8 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all">
            เริ่มต้นใช้งาน
          </button>
          <button class="px-8 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 hover:scale-110 transition-all">
            ดูเทมเพลต
          </button>
        </div>
      </div>
    </div>

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
