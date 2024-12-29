<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 font-anakotmai"
  >
    <!-- Header -->
    <Header />

    <!-- Page Transition -->
    <!-- mode="out-in" ให้หน้าที่เก่า fade out ก่อน แล้วหน้าใหม่ค่อย fade in -->
    <transition name="page" mode="out-in">
      <router-view @loading="handleLoading" />
    </transition>

    <!-- Footer -->
    <Footer />

    <!-- Loading Spinner (ถ้าต้องการ Overlay แสดงตอนโหลด) -->
    <LoadingSpinner :visible="isLoading" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue' // สมมติว่ามีไฟล์นี้

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false, // ควบคุมการแสดง/ซ่อน Spinner
    };
  },
  methods: {
    handleLoading(state) {
      this.isLoading = state; // true = loading start, false = loading end
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anakotmai:wght@300;400;700&display=swap');

.font-anakotmai {
  font-family: 'Anakotmai', sans-serif;
}

/* ============ Page Transition (Fade ตัวอย่าง) ============ */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}
.page-enter,
.page-leave-to {
  /* ก่อนเข้ากับหลังออก = 0 */
  opacity: 0;
}

/* 
หากอยากได้ Slide/Flip/Bounce โหด ๆ:
.page-enter-active,
.page-leave-active {
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.4s;
}
.page-enter {
  transform: translateX(100%);
  opacity: 0;
}
.page-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
*/
</style>
