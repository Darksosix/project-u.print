<template>
    <div
      class="relative min-h-screen bg-gradient-to-tr from-pink-50 via-white to-yellow-50 overflow-hidden flex flex-col justify-center items-center"
    >
      <!-- วงกลมตกแต่ง -->
      <div
        class="absolute w-80 h-80 bg-pink-200 rounded-full -top-20 -left-28 opacity-30 animate-pulse pointer-events-none"
      ></div>
      <div
        class="absolute w-80 h-80 bg-yellow-200 rounded-full -bottom-24 -right-16 opacity-30 animate-bounce pointer-events-none"
      ></div>
  
      <!-- เนื้อหาหลัก -->
      <div class="relative z-10 max-w-4xl text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          เริ่มต้นใช้งาน <span class="text-pink-500">u.print</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          ยินดีต้อนรับ! เราจะแนะนำคุณเกี่ยวกับวิธีการใช้งาน <span class="text-pink-500 font-semibold">u.print</span> อย่างมีประสิทธิภาพ เพื่อให้การออกแบบและสร้างเทมเพลตของคุณง่ายและสนุกขึ้น
        </p>
  
        <!-- ขั้นตอนการใช้งาน -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <!-- ขั้นตอนที่ 1 -->
          <div
            class="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 ring-1 ring-pink-200"
          >
            <div class="w-16 h-16 flex items-center justify-center bg-pink-500 text-white rounded-full mb-4">
              <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">เลือกเทมเพลต</h3>
            <p class="text-gray-600 text-sm text-center">
              เรียกดูเทมเพลตที่ออกแบบไว้แล้ว หรือเลือกจากหมวดหมู่ที่คุณชอบ เช่น Minimal, Business หรือ Creative
            </p>
          </div>
  
          <!-- ขั้นตอนที่ 2 -->
          <div
            class="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 ring-1 ring-yellow-200"
          >
            <div class="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white rounded-full mb-4">
              <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">ปรับแต่งดีไซน์</h3>
            <p class="text-gray-600 text-sm text-center">
              เพิ่มข้อความ รูปภาพ และปรับแต่งสีได้ตามใจชอบ ด้วยเครื่องมือแก้ไขที่ใช้งานง่าย
            </p>
          </div>
  
          <!-- ขั้นตอนที่ 3 -->
          <div
            class="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 ring-1 ring-pink-200"
          >
            <div class="w-16 h-16 flex items-center justify-center bg-pink-500 text-white rounded-full mb-4">
              <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">ดาวน์โหลดหรือแชร์</h3>
            <p class="text-gray-600 text-sm text-center">
              ดาวน์โหลดเทมเพลตของคุณในรูปแบบไฟล์ที่ต้องการ หรือแชร์ผลงานกับทีมและเพื่อน ๆ
            </p>
          </div>
        </div>
  
        <!-- ปุ่มเริ่มต้นใช้งาน -->
        <div class="mt-12">
          <router-link to="/template">
            <button
              class="px-8 py-3 bg-pink-500 text-white font-bold rounded-full shadow-xl hover:bg-pink-600 hover:-translate-y-1 transform transition focus:outline-none"
            >
              เริ่มต้นใช้งาน
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: 'OnboardingPage',
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
  /* ปรับแต่งลาย Polka Dots */
  .polka-dots {
    background-image: repeating-radial-gradient(
      circle at 0 0,
      rgba(236, 72, 153, 0.08),
      rgba(236, 72, 153, 0.08) 4px,
      transparent 4px,
      transparent 30px
    );
    background-size: 30px 30px;
    background-position: 0 0;
  }
  </style>
  