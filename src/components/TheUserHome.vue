<template>
    <div>
        <b-carousel
            id="carousel-1"
            indicators
            interval="15000"
            class="w-100 h-100 z-index-0"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
            <b-carousel-slide 
                v-for="item in uploadPhotos"
                :key="item.id"
                :img-src="photo1"
                class="img-carousel"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script setup>
import {BCarousel, BCarouselSlide} from 'bootstrap-vue';
import photo1 from '@/assets/img/user-photo.webp';
import { ref } from 'vue';

const uploadPhotos = ref([
    { id: 1, src: photo1},
    { id: 2, src: photo1},
    { id: 3, src: photo1},
])
</script>

<style lang="scss">
.z-index-0{
    z-index: 0;
}
.carousel-indicators{ 
    position: absolute;
    top: -15px;
    left: -10%;
    bottom: -80px;
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