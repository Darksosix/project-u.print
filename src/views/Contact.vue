<template>
    <div
      class="relative min-h-screen flex flex-col items-center justify-center
             bg-gradient-to-br from-pink-50 via-white to-yellow-50 overflow-hidden"
    >
      <!-- ลวดลาย Polka Dots -->
      <div
        class="absolute inset-0 bg-repeat pointer-events-none
               mix-blend-multiply opacity-20 polka-dots"
      ></div>
  
      <!-- วงกลมอนิเมชัน 1 (ชมพู + pulse) -->
      <div
        class="absolute w-80 h-80 bg-pink-200 rounded-full
               -top-32 -left-16 opacity-30 animate-pulse pointer-events-none"
      ></div>
      <!-- วงกลมอนิเมชัน 2 (เหลือง + bounce) -->
      <div
        class="absolute w-80 h-80 bg-yellow-200 rounded-full
               -bottom-32 -right-16 opacity-30 animate-bounce pointer-events-none"
      ></div>
  
      <!-- กล่องคอนเทนต์ Contact (Glassmorphism เบาๆ) -->
      <div
        class="relative z-10 w-full max-w-3xl px-8 py-10
               bg-white/70 backdrop-blur-md rounded-xl shadow-xl text-center"
      >
        <h1
          class="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg
                 tracking-tight"
        >
          ติดต่อเรา
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed max-w-2xl mx-auto">
          หากคุณสนใจบริการหรือมีคำถามเกี่ยวกับงานของเรา
          สามารถกรอกข้อมูลในฟอร์มติดต่อด้านล่าง หรือส่งอีเมล / LINE ได้เลยค่ะ
        </p>
  
        <!-- Contact Form -->
        <form class="mt-8 space-y-6 max-w-xl mx-auto text-left">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              ชื่อของคุณ
            </label>
            <input
              type="text"
              placeholder="กรอกชื่อ"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-pink-300
                     focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              อีเมล
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-pink-300
                     focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              ข้อความ
            </label>
            <textarea
              rows="4"
              placeholder="ระบุรายละเอียดที่ต้องการ..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-pink-300
                     focus:border-transparent"
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full py-3 bg-gradient-to-r from-pink-400 to-yellow-400
                   text-white font-bold rounded-lg shadow-md
                   hover:shadow-xl hover:scale-105 transition-transform
                   focus:outline-none"
          >
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
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
  