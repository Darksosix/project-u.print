<template>
  <footer class="relative overflow-hidden">
    <!-- เลเยอร์ Gradient พื้นหลัง -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-pink-50 via-white to-yellow-50
             pointer-events-none"
    ></div>
    <!-- เลเยอร์ Stripes เฉียงซ้อนบน Gradient -->
    <div
      class="absolute inset-0 pointer-events-none striped-bg
             mix-blend-multiply opacity-20"
    ></div>

    <!-- ส่วนคอนเทนต์ Footer -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <!-- โลโก้ -->
        <div
          class="text-xl font-extrabold bg-clip-text text-transparent
                 bg-gradient-to-r from-pink-500 to-yellow-500 neon-hover"
        >
          u.print
        </div>

        <!-- Copyright -->
        <div class="text-sm text-gray-600 text-center">
          &copy; 2024 u.print. สงวนลิขสิทธิ์.
        </div>

        <!-- ไอคอนโซเชียลมีเดีย -->
        <div class="flex justify-center space-x-6 text-gray-700">
          <!-- TikTok -->
          <a
            href="https://tiktok.com"
            class="hover:text-pink-500 transition-transform hover:scale-125 neon-hover-icon"
            aria-label="TikTok"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.75 9.75c-.69 0-1.25-.56-1.25-1.25V4.5h-1.25v4c0 1.38 1.12 2.5 2.5 2.5h1.25v-1.25h-1.25zm-3.75 1.25c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5h-1.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25 1.12-1.25 2.5-1.25v-1.25h-1.25z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
/* ========== STRIPES BACKGROUND ========== */
/* สร้างลายแถบเฉียงซ้ำ ๆ ด้วย repeating-linear-gradient */
.striped-bg {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 192, 203, 0.08), /* Pink-ish with low opacity (pinkish) */
    rgba(255, 192, 203, 0.08) 10px,
    transparent 10px,
    transparent 20px
  );
  background-size: 20px 20px; /* ปรับระยะ 20px / 20px เพื่อความถี่ของแถบ */
  background-position: 0 0;
}

/* โลโก้ “u.print” ใช้ Glow แนวนีออนเมื่อโฮเวอร์ */
.neon-hover:hover {
  text-shadow: 0 0 8px rgba(236,72,153,0.7),  /* pink-500 glow */
               0 0 15px rgba(236,72,153,0.5);
}

/* ไอคอนโซเชียล เรืองแสงเบา ๆ เมื่อโฮเวอร์ */
.neon-hover-icon:hover {
  text-shadow: 0 0 8px rgba(236,72,153,0.7);
  color: #ec4899; /* pink-500 */
}
</style>
