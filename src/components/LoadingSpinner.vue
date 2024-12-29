<template>
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center
             bg-white/50 backdrop-blur-sm"
    >
      <!-- Spinner -->
      <div class="relative w-16 h-16 flex items-center justify-center">
        <!-- วงที่ 1 -->
        <div
          class="w-full h-full rounded-full border-4
                 border-pink-200 border-t-pink-500
                 animate-spin ring-glow-fast"
        ></div>
        <!-- วงที่ 2 -->
        <div
          class="absolute w-12 h-12 rounded-full border-4
                 border-yellow-200 border-t-yellow-500
                 animate-spin-fast ring-glow-fast"
        ></div>
        <!-- วงที่ 3 (เล็กที่สุด + pulse) -->
        <div
          class="absolute w-5 h-5 rounded-full bg-pink-400
                 animate-pulse pointer-events-none"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingSpinner",
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  /* เพิ่มความเร็วของแอนิเมชัน spin-fast */
  @keyframes spin-fast {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .animate-spin-fast {
    animation: spin-fast 0.8s linear infinite; /* หมุนเร็วขึ้น (ลดจาก 2s เหลือ 0.8s) */
  }
  
  /* Glow effect รอบ spinner */
  .ring-glow-fast {
    box-shadow: 0 0 6px rgba(236, 72, 153, 0.6),
                0 0 10px rgba(236, 72, 153, 0.4),
                0 0 15px rgba(236, 72, 153, 0.3);
  }
  
  /* Pulse effect */
  .animate-pulse {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite; /* ลดระยะเวลา Pulse */
  }
  </style>
  