<template>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        indicators
        style="z-index: 0;"
        background="inherit"
        img-width="1024"
        img-height="880"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide 
          img-blank 
          v-for="item in sliderImg"
          :caption="item.title" 
          :key="item.id"
          img-alt="Blank image"
          >
          <div>
            <img
              loading="lazy"
              class="slide-img" 
              :src="item.src1"
              :style="item.styles"
              >            
            <img
              loading="lazy"
              v-if="item.src2"
              class="slide-img" 
              :src="item.src2"
              >
          </div>
        </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script setup>

import { BCarousel, BCarouselSlide } from 'bootstrap-vue';
import slide1 from "@/assets/img/slider/slide7.gif";
import slide2 from "@/assets/img/slider/slide17.gif";
import slide3 from "@/assets/img/slider/slide3.gif";
import slide4 from "@/assets/img/slider/slide12.gif";
import slide5 from "@/assets/img/slider/slide1.gif";
import slide6 from "@/assets/img/slider/slide10.gif";
import slide7 from "@/assets/img/slider/slide8.gif";
import slide8 from "@/assets/img/slider/slide5.gif";
import slide9 from "@/assets/img/slider/slide11.gif";
import slide10 from "@/assets/img/slider/slide18.gif";
import slide11 from "@/assets/img/slider/slide6.gif";
import slide12 from "@/assets/img/slider/slide4.gif";
import slide13 from "@/assets/img/slider/slide13.gif";
import slide14 from "@/assets/img/slider/slide17.gif";
import slide15 from "@/assets/img/slider/slide18.gif";

const sliderImg = [
  { id: 1, title: 'Найди любовь играя!', src1: slide1, src2 : slide2 },
  { id: 2, title: 'Прокачай психологию!', src1: slide3, src2 : slide4 },
  { id: 3, title: 'Знакомься по новому!', src1: slide5, src2 : slide6 },
  { id: 4, title: 'Крепкие отношения!', src1: slide7, styles: `width: 130px;object-fit: cover;`},
  { id: 5, title: 'Без условностей!', src1: slide8, src2 : slide9 },
  { id: 6, title: 'Без пошлостей!', src1: slide10, src2 : slide11 },
  { id: 7, title: 'Без скуки!', src1: slide12, src2 : slide13 },
  { id: 8, title: 'По всему миру!', src1: slide14, src2 : slide15 },
];
</script>

<style lang="scss">
.slide-img{
  width: 100px;
  height: 150px;
  left: 20px;
  position: relative;
  text-align: center;
}

.carousel-caption{
    top: 30px;
    left: 30px;
    h3, 
    .h3 {
        font-size: 1.7rem;
        position: relative;
        font-weight: 800;
        color: #339860;
        white-space: nowrap;
        -webkit-text-stroke: #fff;
        -webkit-text-stroke-width: .5px;
      }
}


.carousel-indicators{ 
    position: absolute;
    top: -15px;
    left: 85%;
    bottom: -50px;
    flex-direction: column;
    li{
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 10px;
        border-radius: 50%;
        height: 10px;
        margin: -5px 3px;
        text-indent: -999px;
        cursor: pointer;
        background-clip: padding-box;
        background-color: #fff;
        transition: opacity 0.6s ease;
        &.active{
            opacity: 1;
            background-color: #3cb371;
        }
    }
}
</style>