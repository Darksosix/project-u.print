<template>
    <div class="relative min-h-screen bg-gradient-to-b from-pink-50 via-white to-yellow-50 overflow-hidden">
      <!-- Wave ด้านบน -->
      <div class="absolute top-0 left-0 w-full pointer-events-none">
        <svg class="w-full h-24 md:h-32 rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#FED7E2" fill-opacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,256C840,277,960,267,1080,245.3C1200,224,1320,192,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path>
        </svg>
      </div>
  
      <!-- Wave ด้านล่าง -->
      <div class="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg class="w-full h-24 md:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#FED7E2" fill-opacity="1"
            d="M0,160L40,138.7C80,117,160,75,240,53.3C320,32,400,32,480,53.3C560,75,640,117,720,144C800,171,880,181,960,186.7C1040,192,1120,192,1200,197.3C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
          </path>
        </svg>
      </div>
  
      <!-- ลาย Polka Dots -->
      <div class="absolute inset-0 bg-repeat mix-blend-multiply opacity-10 polka-dots"></div>
  
      <!-- วงกลมเลเยอร์ 1 (ชมพู + pulse) -->
      <div class="absolute w-96 h-96 bg-pink-200 rounded-full -top-20 -left-28 opacity-30 animate-pulse pointer-events-none"></div>
      <!-- วงกลมเลเยอร์ 2 (เหลือง + bounce) -->
      <div class="absolute w-80 h-80 bg-yellow-200 rounded-full -bottom-32 -right-16 opacity-30 animate-bounce pointer-events-none"></div>
  
      <!-- Container หลัก -->
      <div class="relative z-10 flex w-full max-w-7xl mx-auto pt-10 pb-16 px-4 md:px-8">
        <!-- Sidebar หมวดหมู่ (ซ้าย) -->
        <aside class="hidden lg:block w-72 mr-8 mt-40">
          <div class="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-5 ring-1 ring-pink-200">
            <h2 class="text-2xl font-extrabold text-pink-600 mb-4">หมวดหมู่</h2>
            <ul class="space-y-3 text-left">
              <li>
                <button
                  class="w-full text-left px-4 py-2 bg-pink-100 text-pink-700 font-semibold rounded-md hover:bg-pink-200 transition focus:outline-none"
                  @click="filterCategory('All')"
                >
                  ทั้งหมด
                </button>
              </li>
              <li>
                <button
                  class="w-full text-left px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-pink-50 transition focus:outline-none"
                  @click="filterCategory('Minimal')"
                >
                  Minimal
                </button>
              </li>
              <li>
                <button
                  class="w-full text-left px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-pink-50 transition focus:outline-none"
                  @click="filterCategory('Business')"
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  class="w-full text-left px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-pink-50 transition focus:outline-none"
                  @click="filterCategory('Education')"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  class="w-full text-left px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-pink-50 transition focus:outline-none"
                  @click="filterCategory('Infographics')"
                >
                  Infographics
                </button>
              </li>
              <li>
                <button
                  class="w-full text-left px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-pink-50 transition focus:outline-none"
                  @click="filterCategory('Creative')"
                >
                  Creative
                </button>
              </li>
            </ul>
          </div>
        </aside>
  
        <!-- ส่วน Template -->
        <div class="flex-1 mt-8 lg:mt-0">
          <!-- หัวข้อ + อธิบาย -->
          <h1 class="text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-lg tracking-tight text-center mb-4 md:mb-8">
            เทมเพลต PowerPoint
          </h1>
          <p class="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed text-center mb-10">
            เรามีเทมเพลตสวย ๆ ทันสมัยให้เลือกหลากหลายสไตล์ ตอบโจทย์ทุกการพรีเซนต์
            ทั้งธุรกิจ วิชาการ และอื่น ๆ พร้อมออกแบบเป็นเอกลักษณ์ไม่ซ้ำใคร
          </p>
  
          <!-- โซนแสดง Template Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div
              v-for="template in paginatedTemplates"
              :key="template.id"
              class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-64 p-4
                     hover:shadow-2xl hover:-translate-y-1 transition-transform
                     ring-1 ring-pink-200"
            >
              <img :src="template.image" :alt="template.title" class="rounded-md mb-4" />
              <h2 class="text-lg font-bold text-gray-800 mb-2">{{ template.title }}</h2>
              <p class="text-sm text-gray-600 mb-4">{{ template.description }}</p>
              <router-link :to="`/template/${template.id}`">
                <button class="px-4 py-2 bg-pink-500 text-white font-semibold
                               rounded-full shadow-md hover:shadow-xl hover:scale-105
                               transition-transform focus:outline-none">
                  ดูรายละเอียด
                </button>
              </router-link>
            </div>
          </div>
  
          <!-- Pagination Controls -->
          <div class="mt-12 flex justify-center items-center space-x-2">
            <!-- Previous Button -->
            <button
              :disabled="currentPage === 1"
              @click="prevPage"
              class="px-4 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md
                     hover:bg-pink-600 hover:shadow-xl transition-transform
                     disabled:bg-pink-300 disabled:cursor-not-allowed"
            >
              ก่อนหน้า
            </button>
  
            <!-- Page Numbers -->
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-4 py-2 font-semibold rounded-full shadow-md',
                page === currentPage
                  ? 'bg-yellow-400 text-white'
                  : 'bg-white text-pink-600 hover:bg-pink-100'
              ]"
            >
              {{ page }}
            </button>
  
            <!-- Next Button -->
            <button
              :disabled="currentPage === totalPages"
              @click="nextPage"
              class="px-4 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md
                     hover:bg-pink-600 hover:shadow-xl transition-transform
                     disabled:bg-pink-300 disabled:cursor-not-allowed"
            >
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Template',
    data() {
      return {
        templates: [
          // ตัวอย่างข้อมูลเทมเพลต
          {
            id: 1,
            title: 'Template 1',
            description: 'ดีไซน์เรียบหรู เหมาะกับพรีเซนต์ทั่วไป',
            category: 'Minimal',
            image: 'https://via.placeholder.com/300x200?text=Template1',
          },
          {
            id: 2,
            title: 'Template 2',
            description: 'โทนสดใส มีอินโฟกราฟิกพร้อมใช้',
            category: 'Infographics',
            image: 'https://via.placeholder.com/300x200?text=Template2',
          },
          {
            id: 3,
            title: 'Template 3',
            description: 'เน้นพรีเซนต์ด้านธุรกิจและ Startup',
            category: 'Business',
            image: 'https://via.placeholder.com/300x200?text=Template3',
          },
          {
            id: 4,
            title: 'Template 4',
            description: 'ดีไซน์ทันสมัย เหมาะกับพรีเซนต์ทั่วไป',
            category: 'Minimal',
            image: 'https://via.placeholder.com/300x200?text=Template4',
          },
          {
            id: 5,
            title: 'Template 5',
            description: 'โทนสดใส มีอินโฟกราฟิกพร้อมใช้',
            category: 'Infographics',
            image: 'https://via.placeholder.com/300x200?text=Template5',
          },
          {
            id: 6,
            title: 'Template 6',
            description: 'เน้นพรีเซนต์ด้านธุรกิจและ Startup',
            category: 'Business',
            image: 'https://via.placeholder.com/300x200?text=Template6',
          },
          {
            id: 7,
            title: 'Template 7',
            description: 'ดีไซน์เรียบหรู เหมาะกับพรีเซนต์ทั่วไป',
            category: 'Minimal',
            image: 'https://via.placeholder.com/300x200?text=Template7',
          },
          {
            id: 8,
            title: 'Template 8',
            description: 'โทนสดใส มีอินโฟกราฟิกพร้อมใช้',
            category: 'Infographics',
            image: 'https://via.placeholder.com/300x200?text=Template8',
          },
          {
            id: 9,
            title: 'Template 9',
            description: 'เน้นพรีเซนต์ด้านธุรกิจและ Startup',
            category: 'Business',
            image: 'https://via.placeholder.com/300x200?text=Template9',
          },
          {
            id: 10,
            title: 'Template 10',
            description: 'ดีไซน์ทันสมัย เหมาะกับพรีเซนต์ทั่วไป',
            category: 'Minimal',
            image: 'https://via.placeholder.com/300x200?text=Template10',
          },
          // เพิ่มเทมเพลตเพิ่มเติมตามต้องการ...
        ],
        currentPage: 1,
        templatesPerPage: 6,
        selectedCategory: 'All',
      };
    },
    computed: {
      filteredTemplates() {
        if (this.selectedCategory === 'All') {
          return this.templates;
        }
        return this.templates.filter(
          (template) => template.category === this.selectedCategory
        );
      },
      totalPages() {
        return Math.ceil(this.filteredTemplates.length / this.templatesPerPage);
      },
      paginatedTemplates() {
        const start = (this.currentPage - 1) * this.templatesPerPage;
        const end = start + this.templatesPerPage;
        return this.filteredTemplates.slice(start, end);
      },
    },
    methods: {
      goToPage(page) {
        this.currentPage = page;
        this.scrollToTop();
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.scrollToTop();
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.scrollToTop();
        }
      },
      filterCategory(category) {
        this.selectedCategory = category;
        this.currentPage = 1;
        this.scrollToTop();
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
    mounted() {
      // ถ้ามีโหลด data
      this.$emit('loading', true);
  
      setTimeout(() => {
        this.$emit('loading', false);
      }, 300);
    },
  };
  </script>
  
  <style scoped>
  /* Polka Dots Pattern */
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
  
  /* เพิ่มการ์ด Pagination */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  
  .pagination button {
    margin: 0 0.25rem;
  }
  
  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    aside {
      display: none;
    }
  }
  </style>
  