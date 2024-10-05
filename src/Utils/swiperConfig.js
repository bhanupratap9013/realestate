
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const swiperConfig = {
  modules: [Navigation, Pagination, Scrollbar], // Enable Swiper modules
  spaceBetween: 30, // Adds space between each slide
  slidesPerView: 1, // Show one slide at a time
  navigation: true, // Add navigation arrows
  pagination: { clickable: true }, // Add clickable pagination dots
  scrollbar: { draggable: true }, // Add draggable scrollbar
  loop: true,
  breakpoints: {
    768:{
        slidesPerView: 2,
        spaceBetween: 20
    }
  }
};

export default swiperConfig;