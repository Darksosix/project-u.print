<template>
  <div
    class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-50 via-white to-yellow-50 overflow-hidden"
  >
    <!-- วงกลมเลเยอร์ 1 (ชมพู+pulse) -->
    <div
      class="absolute w-80 h-80 bg-pink-200 rounded-full
             -top-20 -left-28 opacity-40 mix-blend-multiply
             animate-pulse pointer-events-none"
    ></div>
    <!-- วงกลมเลเยอร์ 2 (เหลือง+bounce) -->
    <div
      class="absolute w-80 h-80 bg-yellow-200 rounded-full
             -bottom-24 -right-16 opacity-40 mix-blend-multiply
             animate-bounce pointer-events-none"
    ></div>

    <!-- เนื้อหา (อยู่บนสุดด้วย z-10) -->
    <div class="relative z-10 text-center space-y-8 max-w-2xl px-4">
      <!-- หัวข้อใหญ่พร้อม Text Gradient -->
      <h1
        class="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg tracking-tight"
      >
        เปลี่ยนไอเดียให้เป็นจริงกับ
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          u.print
        </span>
      </h1>

      <!-- ข้อความอธิบาย -->
      <p class="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
        เราให้บริการออกแบบฟรีแลนซ์และเทมเพลต PowerPoint
        ระดับมืออาชีพ ด้วยดีไซน์ทันสมัยไม่ซ้ำใคร
      </p>

      <!-- ปุ่มต่าง ๆ -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center
               space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <button
          class="px-8 py-3 bg-pink-500 text-white font-bold rounded-full shadow-xl
                 hover:bg-pink-600 hover:-translate-y-1 transform transition
                 focus:outline-none"
        >
          เริ่มต้นใช้งาน
        </button>
        <router-link to="/template">
          <button
            class="px-8 py-3 bg-gray-800 text-white font-bold rounded-full shadow-xl
                   hover:bg-gray-700 hover:-translate-y-1 transform transition
                   focus:outline-none"
          >
            ดูเทมเพลต
          </button>
        </router-link>
      </div>
    </div>

    <!-- SVG Wave ด้านล่างของหน้า -->
    <div class="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden">
      <svg
        class="w-full h-[200px] md:h-[250px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <!-- โทนชมพูอ่อน (Tailwind => pink-100) -->
        <path
          fill="#FED7E2"
          fill-opacity="1"
          d="M0,256L40,229.3C80,203 ... 0,320Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // สมมติจำลองโหลด 2 วินาที
    this.$emit('loading', true);

    setTimeout(() => {
      this.$emit('loading', false);
    }, 300);
  }
};
</script>

<style scoped>
/* ปรับแต่งเพิ่มเติมใน tailwind.config.js ได้ */
</style>
