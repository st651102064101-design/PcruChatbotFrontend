import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS only (disable auto-init to prevent carousel errors)
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// 🍎 Import Apple Performance CSS
import './assets/apple-performance.css'

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// --- ส่วนที่เพิ่มเข้ามา ---
import axios from 'axios'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css' // Import Swal CSS
import axiosPlugin from './plugins/axios'; // *** เพิ่มบรรทัดนี้ ***
// --- สิ้นสุดส่วนที่เพิ่ม ---

const app = createApp(App)

// กำหนด Global Properties
// Removed: axios.create without interceptors - let axiosPlugin handle it
app.config.globalProperties.$swal = Swal;
app.config.devtools = false;
app.use(router)
app.use(axiosPlugin); // *** This sets up $axios with interceptors ***

app.mount('#app')

// 🍎 Initialize AOS with Apple-style settings
AOS.init({ 
    duration: 600,  // Faster, more Apple-like
    once: true,
    easing: 'ease-out-cubic', // Apple-style easing
    offset: 50,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
});
