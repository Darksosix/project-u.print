<template>
  <div
    class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-yellow-50 overflow-hidden"
  >
    <!-- วงกลมเลเยอร์ 1 (ชมพู + pulse) -->
    <div
      class="absolute w-80 h-80 bg-pink-200 rounded-full
             -top-32 -left-24 opacity-30 animate-pulse pointer-events-none"
    ></div>
    <!-- วงกลมเลเยอร์ 2 (เหลือง + bounce) -->
    <div
      class="absolute w-80 h-80 bg-yellow-200 rounded-full
             -bottom-32 -right-20 opacity-30 animate-bounce pointer-events-none"
    ></div>

    <!-- เนื้อหา Serve -->
    <div class="relative z-10 text-center px-6 max-w-3xl">
      <h1
        class="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg tracking-tight"
      >
        บริการของเรา
      </h1>
      <p class="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
        เรารับงานจ้างแบบ Freelance ครอบคลุมงานดีไซน์ทุกประเภท
        และจำหน่าย <span class="font-semibold">PowerPoint Template</span>
        ที่ทันสมัย ช่วยคุณสร้างสไลด์แบบมืออาชีพ
      </p>

      <!-- กลุ่มปุ่มลิงก์ -->
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <!-- ปุ่มไปยัง LINE -->
        <a
          href="https://lin.ee/i0Lf6IS"
          target="_blank"
          rel="noopener"
          class="inline-block px-8 py-3 bg-green-400 text-white font-semibold rounded-full
                 shadow-md hover:shadow-xl hover:scale-105 transition-transform
                 focus:outline-none"
        >
          ติดต่อผ่าน LINE
        </a>
        <!-- ปุ่มไปยัง Gmail -->
        <a
          href="mailto:minztt05@gmail.com"
          class="inline-block px-8 py-3 bg-pink-500 text-white font-semibold rounded-full
                 shadow-md hover:shadow-xl hover:scale-105 transition-transform
                 focus:outline-none"
        >
          ติดต่อผ่าน Gmail
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Serve',
  mounted() {
    // สมมติจำลองโหลด 1 วินาที
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
