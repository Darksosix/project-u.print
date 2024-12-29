<template>
    <div
      class="relative min-h-screen flex items-center justify-center
             bg-gradient-to-br from-pink-50 via-white to-yellow-50 overflow-hidden"
    >
      <!-- เลเยอร์ Polka Dots -->
      <div
        class="absolute inset-0 bg-repeat pointer-events-none
               mix-blend-multiply opacity-20 polka-dots"
      ></div>
  
      <!-- วงกลม 1 (ชมพู + pulse) -->
      <div
        class="absolute w-96 h-96 bg-pink-200 rounded-full
               -top-32 -left-20 opacity-30 animate-pulse pointer-events-none"
      ></div>
      <!-- วงกลม 2 (เหลือง + bounce) -->
      <div
        class="absolute w-96 h-96 bg-yellow-200 rounded-full
               -bottom-32 -right-24 opacity-30 animate-bounce pointer-events-none"
      ></div>
  
      <!-- กล่องเนื้อหา (ขยายความกว้าง) -->
      <div
        class="relative z-10 w-full max-w-5xl px-10 py-12
               bg-white/70 backdrop-blur-md rounded-xl shadow-xl text-center"
      >
        <h1
          class="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg tracking-tight"
        >
          เกี่ยวกับเรา
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto">
          เราเป็นทีมงานที่หลงใหลในการออกแบบและสร้างสรรค์ผลงานใหม่ ๆ
          พร้อมประสบการณ์มืออาชีพ
          เพื่อให้ลูกค้าได้สัมผัสงานดีไซน์ที่โดดเด่น
          ทันสมัย และแตกต่างไม่เหมือนใคร
        </p>
        <!-- ข้อมูลเพิ่มเติม -->
        <div
          class="mt-8 text-base md:text-lg text-gray-700 space-y-4 max-w-5xl mx-auto"
        >
          <p>
            <strong class="text-pink-600">วิสัยทัศน์ (Vision):</strong>
            สร้างสรรค์งานออกแบบ
            ที่ผสานความคิดสร้างสรรค์กับประสบการณ์ผู้ใช้ได้อย่างสมบูรณ์แบบ
          </p>
          <p>
            <strong class="text-pink-600">พันธกิจ (Mission):</strong>
            มุ่งมั่นพัฒนาความเชี่ยวชาญในด้านดีไซน์
            เพื่อยกระดับผลงานของลูกค้าให้เหนือคู่แข่ง
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'about',
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
  /* Polka Dots Pattern */
  .polka-dots {
    background-image: repeating-radial-gradient(
      circle at 0 0,
      rgba(236, 72, 153, 0.08), /* pink-500 + opacity */
      rgba(236, 72, 153, 0.08) 4px,
      transparent 4px,
      transparent 30px
    );
    background-size: 30px 30px;
    background-position: 0 0;
  }
  </style>
  