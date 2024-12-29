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
          <!-- Facebook -->
          <a
            href="https://facebook.com"
            class="hover:text-pink-500 transition-transform hover:scale-125 neon-hover-icon"
            aria-label="Facebook"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"
              />
            </svg>
          </a>
          <!-- Twitter -->
          <a
            href="https://twitter.com"
            class="hover:text-pink-500 transition-transform hover:scale-125 neon-hover-icon"
            aria-label="Twitter"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724
                   9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482
                   13.942 13.942 0 0 1-10.129-5.146 4.916 4.916 0 0 0
                   1.523 6.573 4.897 4.897 0 0 1-2.229-.616c-.054
                   2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084
                   4.918 4.918 0 0 0 4.59 3.417 9.867 9.867 0 0 1-6.102
                   2.104c-.395 0-.788-.023-1.177-.068 9.057 0
                   14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.012
                   10.012 0 0 0 24 4.557z"
              />
            </svg>
          </a>
          <!-- Instagram -->
          <a
            href="https://instagram.com"
            class="hover:text-pink-500 transition-transform hover:scale-125 neon-hover-icon"
            aria-label="Instagram"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062
                   2.633.332 3.608 1.308.975.975 1.245 2.242
                   1.308 3.608.058 1.266.07 1.646.07 4.85s-.012
                   3.584-.07 4.85c-.062 1.366-.332 2.633-1.308
                   3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07
                   c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.175
                   15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633
                   1.308-3.608.975-.975 2.242-1.245 3.608-1.308C8.416
                   2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014
                   7.052.072 5.771.131 4.603.378 3.678 1.303c-.925.925-1.172
                   2.093-1.231 3.374C2.014 5.668 2 6.077 2
                   12c0 5.923.014 6.332.072 7.612.059 1.281.306 2.449
                   1.231 3.374.925.925 2.093 1.172 3.374
                   1.231 1.28.058 1.689.072 7.612.072s6.332-.014
                   7.612-.072c1.281-.059 2.449-.306
                   3.374-1.231.925-.925 1.172-2.093
                   1.231-3.374.058-1.28.072-1.689.072-7.612s-.014-6.332-.072-7.612c-.059-1.281-.306-2.449-1.231-3.374C19.049.378
                   17.881.131 16.6.072 15.32.014 14.911 0
                   12 0zm0 5.838a6.162 6.162 0 1 0 0
                   12.324 6.162 6.162 0 0 0 0-12.324zm0
                   10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44
                   1.44 0 1 1-2.88 0 1.44 1.44 0 0 1
                   2.88 0z"
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
