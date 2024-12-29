<template>
    <header class="w-full bg-yellow-400 shadow-xl sticky top-0 z-50">
      <nav class="container mx-auto flex justify-between items-center p-6">
        <!-- โลโก้ -->
        <div class="text-gray-900 text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform">
          <router-link to="/" class="hover:text-gray-700">u.print</router-link>
        </div>
  
        <!-- เมนู -->
        <ul class="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li class="hover:scale-105 transition-transform">
            <router-link to="#home" class="hover:text-gray-600">หน้าแรก</router-link>
          </li>
          <li class="hover:scale-105 transition-transform">
            <router-link to="#services" class="hover:text-gray-600">บริการ</router-link>
          </li>
          <li class="hover:scale-105 transition-transform">
            <router-link to="#templates" class="hover:text-gray-600">เทมเพลต</router-link>
          </li>
          <li class="hover:scale-105 transition-transform">
            <router-link to="#about" class="hover:text-gray-600">เกี่ยวกับเรา</router-link>
          </li>
          <li class="hover:scale-105 transition-transform">
            <router-link to="#contact" class="hover:text-gray-600">ติดต่อเรา</router-link>
          </li>
        </ul>
  
        <!-- ปุ่มสมัครสมาชิก/เข้าสู่ระบบ หรือ Logout -->
        <div class="hidden md:flex space-x-4">
          <template v-if="!isAuthenticated">
            <router-link to="/signup" class="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 hover:scale-105 transition-transform">
              สมัครสมาชิก
            </router-link>
            <router-link to="/login" class="px-6 py-2 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform">
              เข้าสู่ระบบ
            </router-link>
          </template>
          <template v-else>
            <div class="flex items-center space-x-4">
              <span class="text-gray-800">สวัสดี, {{ user.username }}</span>
              <button @click="handleLogout" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:scale-105 transition-transform">
                Logout
              </button>
            </div>
          </template>
        </div>
  
        <!-- ปุ่มเมนูบนมือถือ -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-800 focus:outline-none hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
  
      <!-- เมนูดรอปดาวน์บนมือถือ -->
      <div v-if="isMenuOpen" class="md:hidden bg-yellow-400 text-gray-800 p-4">
        <ul class="space-y-4">
          <li>
            <router-link to="#home" class="block hover:text-gray-600">หน้าแรก</router-link>
          </li>
          <li>
            <router-link to="#services" class="block hover:text-gray-600">บริการ</router-link>
          </li>
          <li>
            <router-link to="#templates" class="block hover:text-gray-600">เทมเพลต</router-link>
          </li>
          <li>
            <router-link to="#about" class="block hover:text-gray-600">เกี่ยวกับเรา</router-link>
          </li>
          <li>
            <router-link to="#contact" class="block hover:text-gray-600">ติดต่อเรา</router-link>
          </li>
          <template v-if="!isAuthenticated">
            <li>
              <router-link to="/signup" class="block px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform">
                สมัครสมาชิก
              </router-link>
            </li>
            <li>
              <router-link to="/login" class="block px-6 py-2 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform">
                เข้าสู่ระบบ
              </router-link>
            </li>
          </template>
          <template v-else>
            <li>
              <div class="flex items-center space-x-4">
                <span class="block">สวัสดี, {{ user.username }}</span>
                <button @click="handleLogout" class="block px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:scale-105 transition-transform">
                  Logout
                </button>
              </div>
            </li>
          </template>
        </ul>
      </div>
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
  /* สามารถเพิ่มสไตล์เพิ่มเติมได้ที่นี่ หากต้องการ */
  </style>
  