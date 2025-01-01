<template>
  <div
    class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-yellow-50 overflow-hidden"
  >
    <!-- วงกลมสีชมพูเคลื่อนไหว -->
    <div
      class="absolute w-96 h-96 bg-pink-200 rounded-full
             -top-20 -right-40 opacity-40 animate-pulse pointer-events-none"
    ></div>
    <!-- วงกลมสีเหลืองเคลื่อนไหว -->
    <div
      class="absolute w-96 h-96 bg-yellow-200 rounded-full
             -bottom-20 -left-40 opacity-40 animate-bounce pointer-events-none"
    ></div>

    <!-- การ์ด Auth 3D -->
    <div class="auth-container">
      <div class="auth-card" :class="{ 'is-flipped': !isLogin }">
        <!-- ด้านหน้า: ฟอร์ม Login -->
        <div class="auth-card-front px-8 py-8">
          <h2 class="text-3xl font-extrabold text-center text-pink-600 mb-4 drop-shadow-sm">
            เข้าสู่ระบบ
          </h2>
          <p class="text-center text-sm text-gray-500 mb-8">
            ใส่อีเมลและรหัสผ่านเพื่อเข้าถึงบัญชีของคุณ
          </p>

          <!-- ฟอร์ม Login -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2"
                >อีเมล</label
              >
              <input
                v-model="email"
                type="email"
                id="email"
                placeholder="username@example.com"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-pink-300 
                       focus:border-transparent"
              />
            </div>
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 mb-2"
                >รหัสผ่าน</label
              >
              <input
                v-model="password"
                type="password"
                id="password"
                placeholder="••••••••"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-pink-300 
                       focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-pink-400 to-yellow-400 
                     text-white font-bold rounded-lg shadow-md
                     hover:shadow-xl hover:scale-105 transition-transform
                     focus:outline-none"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          <!-- เส้นคั่น -->
          <div class="flex items-center my-6">
            <hr class="w-full border-gray-300" />
            <span class="mx-2 text-gray-500 text-sm">หรือ</span>
            <hr class="w-full border-gray-300" />
          </div>

          <!-- Social Login -->
          <div class="space-y-3">
            <button
              @click="handleLoginWithGoogle"
              class="w-full py-3 bg-white border border-gray-300 text-gray-600
                     font-semibold rounded-lg flex items-center justify-center 
                     hover:bg-gray-50 hover:shadow transition-transform transform
                     hover:-translate-y-0.5 focus:outline-none"
            >
              <svg
                class="w-5 h-5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.35 11.1h-9.37v2.93h5.49c-.24 1.53-1.7 4.48-5.49
                     4.48 -3.3 0-6-2.7-6-6s2.7-6 6-6c1.65
                     0 3.07.66 4.11 1.74l2.06-2.06C15.73
                     4.23 13.99 3.4 12 3.4 7.58
                     3.4 4 6.98 4 11.4s3.58
                     8 8 8 8-3.58 8-8c0-.52-.05-1.02-.15-1.5z"
                />
              </svg>
              เข้าสู่ระบบด้วย Google
            </button>
            <button
              @click="handleLoginWithLine"
              class="w-full py-3 bg-green-500 text-white font-bold rounded-lg
                     shadow-md hover:shadow-xl hover:scale-105 transition-transform
                     focus:outline-none flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.74 4.14C18.92 2.68 15.54 2
                     12.01 2 7.32 2 2.99 4.52
                     2.99 8.09c0 3.57 4.33 6.09 9.02
                     6.09 0 0-.03.02-.03.01-.47
                     0-1.62-.28-1.62-.28l-.35 1.4c-.05.22-.18.45-.35.62
                     -.25.24-.11.34.17.21.42-.21 2-1.18
                     2.76-1.69 0 0 .74.1
                     1.32.1 4.68 0 8.99-2.51
                     8.99-6.09.01-1.57-.81-3-2.16-4.01zM14.74
                     8h1.11c.31 0 .56.25.56.55
                     0 .3-.25.55-.56.55h-1.11c-.31
                     0-.56-.25-.56-.55 0-.3.25-.55.56-.55zm-6.26
                     0c.31 0 .56.25.56.55 0 .3-.25.55-.56.55h-1.1c-.31
                     0-.56-.25-.56-.55 0-.3.25-.55.56-.55zm1.05
                     1.09c0 .3-.25.55-.56.55-.31
                     0-.56-.25-.56-.55 0-.3.25-.55.56-.55.31
                     0 .56.25.56.55zm1.07-1.09c.31
                     0 .56.25.56.55 0 .3-.25.55-.56.55h-1.12c-.31
                     0-.56-.25-.56-.55 0-.3.25-.55.56-.55h1.12z"
                />
              </svg>
              เข้าสู่ระบบด้วย LINE
            </button>
          </div>

          <!-- Toggle ไปหน้า Register -->
          <div class="mt-6 text-sm text-center text-gray-500">
            ยังไม่มีบัญชีใช่ไหม?
            <button
              @click="isLogin = false"
              class="text-pink-600 font-semibold hover:underline focus:outline-none"
            >
              สมัครสมาชิก
            </button>
          </div>
        </div>

        <!-- ด้านหลัง: ฟอร์ม Register -->
        <div class="auth-card-back px-8 py-8">
          <h2 class="text-3xl font-extrabold text-center text-pink-600 mb-4 drop-shadow-sm">
            สมัครสมาชิก
          </h2>
          <p class="text-center text-sm text-gray-500 mb-8">
            สร้างบัญชีใหม่เพื่อเข้าถึงบริการของเราได้ทันที
          </p>

          <!-- ฟอร์ม Register แบ่งเป็นสองคอลัมน์ (ซ้าย-ขวา) -->
          <form
            @submit.prevent="handleRegister"
            class="max-h-[450px] overflow-auto pr-1 space-y-4"
          >
            <div class="grid grid-cols-2 gap-4">
              <!-- โซนซ้าย: ข้อมูลส่วนบุคคล -->
              <div class="space-y-4">
                <!-- ชื่อ -->
                <div>
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >ชื่อ</label
                  >
                  <input
                    v-model="firstName"
                    type="text"
                    id="firstName"
                    placeholder="ชื่อของคุณ"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- นามสกุล -->
                <div>
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >นามสกุล</label
                  >
                  <input
                    v-model="lastName"
                    type="text"
                    id="lastName"
                    placeholder="นามสกุลของคุณ"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- เบอร์โทร -->
                <div>
                  <label
                    for="phoneNumber"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >เบอร์โทรศัพท์</label
                  >
                  <input
                    v-model="phoneNumber"
                    type="tel"
                    id="phoneNumber"
                    placeholder="0812345678"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- อีเมล -->
                <div>
                  <label
                    for="emailRegister"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >อีเมล</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    id="emailRegister"
                    placeholder="username@example.com"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- รหัสผ่าน -->
                <div>
                  <label
                    for="passwordRegister"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >รหัสผ่าน</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    id="passwordRegister"
                    placeholder="••••••••"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- ยืนยันรหัสผ่าน -->
                <div>
                  <label
                    for="passwordConfirm"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >ยืนยันรหัสผ่าน</label
                  >
                  <input
                    v-model="passwordConfirm"
                    type="password"
                    id="passwordConfirm"
                    placeholder="••••••••"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
              </div>
              <!-- โซนขวา: ข้อมูลที่อยู่ -->
              <div class="space-y-4">
                <!-- ที่อยู่ -->
                <div>
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >ที่อยู่</label
                  >
                  <input
                    v-model="address"
                    type="text"
                    id="address"
                    placeholder="บ้านเลขที่/หมู่บ้าน"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- แขวง/ตำบล -->
                <div>
                  <label
                    for="subDistrict"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >แขวง / ตำบล</label
                  >
                  <input
                    v-model="subDistrict"
                    type="text"
                    id="subDistrict"
                    placeholder="แขวง / ตำบล"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- เขต/อำเภอ -->
                <div>
                  <label
                    for="district"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >เขต / อำเภอ</label
                  >
                  <input
                    v-model="district"
                    type="text"
                    id="district"
                    placeholder="เขต / อำเภอ"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- จังหวัด -->
                <div>
                  <label
                    for="province"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >จังหวัด</label
                  >
                  <input
                    v-model="province"
                    type="text"
                    id="province"
                    placeholder="กรุงเทพมหานคร"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
                <!-- รหัสไปรษณีย์ -->
                <div>
                  <label
                    for="zipCode"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >รหัสไปรษณีย์</label
                  >
                  <input
                    v-model="zipCode"
                    type="text"
                    id="zipCode"
                    placeholder="10110"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-pink-300
                           focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <!-- ปุ่ม สมัครสมาชิก -->
            <button
              type="submit"
              class="mt-4 w-full py-3 bg-gradient-to-r from-pink-400 to-yellow-400 
                     text-white font-bold rounded-lg shadow-md
                     hover:shadow-xl hover:scale-105 transition-transform
                     focus:outline-none"
            >
              สมัครสมาชิก
            </button>
          </form>

          <!-- Toggle ไปหน้า Login -->
          <div class="mt-6 text-sm text-center text-gray-500">
            มีบัญชีแล้ว?
            <button
              @click="isLogin = true"
              class="text-pink-600 font-semibold hover:underline focus:outline-none"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // เพื่อสลับหน้า (Login / Register)
      isLogin: true,

      // สำหรับ Login
      email: '',
      password: '',

      // สำหรับ Register
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      subDistrict: '',
      district: '',
      province: '',
      zipCode: '',
      passwordConfirm: '',
    };
  },
  mounted() {
    // สมมติจำลองโหลด 2 วินาที
    this.$emit('loading', true);

    setTimeout(() => {
      this.$emit('loading', false);
    }, 300);
  },
  methods: {
    // ---------- Login ----------
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/login', {
          email: this.email,
          password: this.password,
        });
        console.log('Login success:', response.data);
        alert(response.data.message);
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'เข้าสู่ระบบล้มเหลว');
      }
    },

    // ---------- Register ----------
    async handleRegister() {
      try {
        const registerData = {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          address: this.address,
          subDistrict: this.subDistrict,
          district: this.district,
          province: this.province,
          zipCode: this.zipCode,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        };

        const response = await axios.post('http://localhost:3000/api/users/register', registerData);
        console.log('Register success:', response.data);
        alert(response.data.message);

        // กลับไปหน้า Login
        this.isLogin = true;
      } catch (error) {
        console.error('Register error:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'สมัครสมาชิกล้มเหลว');
      }
    },

    handleLoginWithGoogle() {
      console.log(this.isLogin ? 'Login with Google' : 'Register with Google');
      // อาจเรียก OAuth
    },
    handleLoginWithLine() {
      console.log(this.isLogin ? 'Login with LINE' : 'Register with LINE');
      // อาจเรียก OAuth
    },
  },
};
</script>

<style scoped>
/* จัดการ 3D Flip Card */
.auth-container {
  perspective: 1000px;
  width: 100%;
  max-width: 420px;
  height: 600px;
  position: relative;
}

.auth-card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.auth-card.is-flipped {
  transform: rotateY(180deg);
}

.auth-card-front,
.auth-card-back {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}

.auth-card-front {
  background-color: transparent; 
  transform: rotateY(0deg);
}

.auth-card-back {
  background-color: transparent; 
  transform: rotateY(180deg);
}
</style>