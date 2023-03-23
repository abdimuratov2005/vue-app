<template>
    <div class="userphoto position-relative">
        <div class="d-flex justify-content-center">
            <the-card style="width: 340px;" class="user-card"></the-card>
        </div>
        <the-user-home></the-user-home>
    </div>
    <b-container style="margin: 0px 0px 100px 0px;">
        <b-link class="text-decoration-none data__continue">
            <the-button
                block
                type="submit"
                class="text-center my-5 write-user rounded"
            >
                <span class="text-center">Написать</span>
                <img loading="lazy" class="arrowIcon1" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
        <the-title>
            Картинки
        </the-title>
        <div
            v-for="item in myGame"
            :key="item.id"
        >
            <div class="mt-3 ml-3">
                {{ item.title }}
            </div>
            <b-row 
                class="mx-1 row-profile"
                :style="item.style"
                >
                <b-col
                    
                    v-if="item.pictureFirst"
                    class="col-profile"
                >
                    <img
                        loading="lazy"
                        :src="item.pictureFirst"
                        class="pictureOtherUser"
                    >
                </b-col>

                <b-col
                    v-if="item.pictureSecond"
                    class="col-profile"
                >
                    <img
                        loading="lazy"
                        :src="item.pictureSecond"
                        class="pictureOtherUser"
                    >
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script setup>
import TheUserHome from '@/components/TheUserHome.vue';
import { BLink, BContainer, BRow, BCol } from 'bootstrap-vue';
import TheCard from '@/components/TheCard.vue';
import TheButton from '@/components/UI/TheButton.vue';
import { ref } from 'vue';
import TheTitle from '@/components/UI/TheTitle.vue';

import picture1 from '@/assets/icons/Smiles/Орущий.png';
import picture2 from '@/assets/img/pivo.png';
import picture3 from '@/assets/img/spagetti.png';
import picture4 from '@/assets/img/salat.png';
import picture5 from '@/assets/img/drink-1.png';
import picture6 from '@/assets/img/country-1.png';
import picture7 from '@/assets/icons/Smiles/Кайфующий.png'
import picture8 from '@/assets/img/drink-2.png';

const myGame = ref([
    { id: 1, pictureFirst:  picture1, title: 'Смайлы', pictureSecond: picture7},
    { id: 2, pictureFirst:  picture2, title: 'Алкаголь', style: 'width: 27%;'},
    { id: 3, pictureFirst:  picture3, title: 'Еда', pictureSecond: picture4},
    { id: 4, pictureFirst:  picture5, title: 'Безалкогольные напитки', pictureSecond: picture8},
    { id: 5, pictureSecond: picture6, title: 'Европа', style: 'width: 27%;'},
])
</script>

<style lang="scss" scoped>
.pictureOtherUser{
    cursor: pointer;
    width: 90px;
    height: 60px;
    height: 55px; 
    object-fit: contain
}
.row-profile{
    width: 55%;
}
.col{
    border-radius: 10px;
    padding: 5px 0;
    margin: 0 0 0 5px;
    background-color: #dedede;
    transition: .5s background-color ease;
    &:hover{
        background-color: #f4f4f4;
    }
    &.active{
        background-color: #59be86;
    }
}  
.user-card{
    position: absolute;
    bottom: 10px;
    border-radius: 10px;
    z-index: 101;
    pointer-events: all;
    &.active{
        bottom: 20px ;
    }
}
.arrowIcon1{
    width: 10px;
    height: 15px;
    position: relative;
}
.arrowIcon1{
    left: 40%;
}

</style>