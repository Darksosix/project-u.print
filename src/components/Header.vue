<template>
  <header class="sticky top-0 z-50 relative overflow-hidden">
    <!-- พื้นหลัง Gradient ชมพู -> ขาว -> เหลือง -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-pink-50 via-white to-yellow-50
             pointer-events-none"
    ></div>

    <!-- ลวดลาย Polka Dots -->
    <div
      class="absolute inset-0 pointer-events-none opacity-20 polka-dots
             mix-blend-multiply"
    ></div>

    <!-- เนื้อหา Nav -->
    <nav
      class="relative z-10 container mx-auto flex justify-between items-center px-6 py-4"
    >
      <!-- โลโก้: Gradient + Neon Glow เมื่อโฮเวอร์ -->
      <div
        class="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent
               bg-gradient-to-r from-pink-500 to-yellow-500 
               hover:scale-105 transition-transform neon-hover"
      >
        <router-link to="/">
          u.print
        </router-link>
      </div>

      <!-- เมนู (Desktop) -->
      <ul class="hidden md:flex space-x-8 font-medium text-gray-700">
        <li class="nav-item">
          <router-link to="/serve" class="text-gray-700 hover:text-gray-900">บริการ</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="text-gray-700 hover:text-gray-900">เกี่ยวกับเรา</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="text-gray-700 hover:text-gray-900">ติดต่อเรา</router-link>
        </li>
      </ul>

      <!-- ปุ่มเข้าสู่ระบบ หรือ Logout (Desktop) -->
      <div class="hidden md:flex items-center space-x-4">
        <template v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="px-5 py-2 bg-pink-500 text-white rounded-full shadow-lg
                   hover:bg-pink-600 hover:scale-105 transition-transform
                   focus:outline-none"
          >
            เข้าสู่ระบบ
          </router-link>
        </template>
        <template v-else>
          <div class="flex items-center space-x-4">
            <span class="text-gray-700">
              สวัสดี, <strong>{{ user.username }}</strong>
            </span>
            <button
              @click="handleLogout"
              class="px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg
                     hover:bg-red-600 hover:scale-105 transition-transform
                     focus:outline-none"
            >
              Logout
            </button>
          </div>
        </template>
      </div>

      <!-- ปุ่มเมนูบนมือถือ -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-gray-700 focus:outline-none hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- เมนูดรอปดาวน์บนมือถือ -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden relative z-10 bg-white p-4 text-gray-700 shadow-md"
      >
        <ul class="space-y-4 text-lg">
          <li>
            <router-link
              to="#home"
              class="block hover:text-pink-500"
              @click="toggleMenu"
            >
              หน้าแรก
            </router-link>
          </li>
          <li>
            <router-link
              to="#services"
              class="block hover:text-pink-500"
              @click="toggleMenu"
            >
              บริการ
            </router-link>
          </li>
          <li>
            <router-link
              to="#templates"
              class="block hover:text-pink-500"
              @click="toggleMenu"
            >
              เทมเพลต
            </router-link>
          </li>
          <li>
            <router-link
              to="#about"
              class="block hover:text-pink-500"
              @click="toggleMenu"
            >
              เกี่ยวกับเรา
            </router-link>
          </li>
          <li>
            <router-link
              to="#contact"
              class="block hover:text-pink-500"
              @click="toggleMenu"
            >
              ติดต่อเรา
            </router-link>
          </li>
          <template v-if="!isAuthenticated">
            <li class="pt-2">
              <router-link
                to="/login"
                class="block px-4 py-2 bg-pink-500 text-white font-semibold
                       rounded-full shadow hover:bg-pink-600 hover:scale-105
                       transition-transform focus:outline-none text-center"
                @click="toggleMenu"
              >
                เข้าสู่ระบบ
              </router-link>
            </li>
          </template>
          <template v-else>
            <li class="pt-3">
              <div class="flex items-center space-x-4">
                <span>สวัสดี, <strong>{{ user.username }}</strong></span>
                <button
                  @click="handleLogout"
                  class="px-4 py-2 bg-red-500 text-white font-semibold rounded-full
                         hover:bg-red-600 hover:scale-105 transition-transform
                         focus:outline-none"
                >
                  Logout
                </button>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
import api from '../services/api'

export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isAuthenticated: !!localStorage.getItem('token'),
      user: {},
    }
  },
  created() {
    if (this.isAuthenticated) {
      this.fetchUser()
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleLogout() {
      localStorage.removeItem('token')
      this.isAuthenticated = false
      this.user = {}
      this.$router.push('/login')
    },
    async fetchUser() {
      try {
        const response = await api.get('/auth/me')
        this.user = response.data
      } catch (error) {
        console.error('Failed to fetch user:', error)
        this.handleLogout()
      }
    },
  },
}
</script>

<style scoped>
/* เอฟเฟกต์ fade เข้าออกเมนู Mobile */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* สไตล์เมนู Desktop */
.nav-item > a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}
.nav-item > a:hover {
  color: #ec4899; /* pink-500 */
  text-shadow: 0 0 6px rgba(236,72,153,0.6);
  transform: scale(1.05) translateY(-2px);
}

/* Neon glow เมื่อโฮเวอร์โลโก้ (u.print) */
.neon-hover:hover {
  text-shadow: 0 0 10px rgba(236,72,153,0.8), /* pink-500 glow */
               0 0 20px rgba(236,72,153,0.6);
}

/* ============== POLKA DOTS PATTERN ============== */
/* จุดเล็ก ๆ ซ้ำ ๆ ด้วย repeating-radial-gradient() */
.polka-dots {
  background-image: repeating-radial-gradient(
    circle at 0 0,
    rgba(236, 72, 153, 0.12),  /* สีชมพูโปร่งแสง (pink-500 + opacity) */
    rgba(236, 72, 153, 0.12) 4px,
    transparent 4px,
    transparent 30px
  );
  /* สามารถปรับ 4px เป็นขนาดจุด และ 30px เป็นระยะห่างระหว่างจุด */
  background-size: 30px 30px;
  background-position: 0 0;
}
</style>
