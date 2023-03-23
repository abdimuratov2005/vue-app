<template>
    <div class="header-block">
        <b-container class="texts font-weight-bolder">
            <h1 class="text-center">УСПЕХ!</h1>
            <div class="d-flex align-items-center justify-content-between text-center">
                <h6 class="text-success font-weight-bolder">Посмотреть профиль</h6>
                <img loading="lazy" width="50" src="@/assets/icons/uspeh.png">
                <h6 class="text-success font-weight-bolder">Следующий профиль</h6>
            </div>
        </b-container>
    </div>
    <b-container style="margin: 0px 0px 50px 0px;">
        <div
            v-for="item in myGame"
            :key="item.id"
        >
            <div class="mt-3 ml-3">
                {{ item.title }}
                <a 
                    class="text-success text-decoration-none w-100 text-nowrap"
                    v-if="item.find"
                >
                {{ item.find }}
            </a>
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
                        :src="item.pictureFirst"
                        class="pictureOtherUser"
                    >
                </b-col>

                <b-col
                    v-if="item.pictureSecond"
                    class="col-profile"
                >
                    <img
                        :src="item.pictureSecond"
                        class="pictureOtherUser"
                    >
                </b-col>

                <b-col
                    v-if="item.pictureThird"
                    class="col-profile"
                >
                    <img
                        :src="item.pictureThird"
                        class="pictureOtherUser"
                    >
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue';
import { ref } from 'vue';

import picture1 from '@/assets/icons/Smiles/Орущий.png';
import picture2 from '@/assets/img/pivo.png';
import picture3 from '@/assets/img/spagetti.png';
import picture4 from '@/assets/img/salat.png';
import picture9 from '@/assets/img/roll.png'
import picture5 from '@/assets/img/drink-1.png';
import picture6 from '@/assets/img/country-1.png';
import picture8 from '@/assets/img/drink-2.png';
const countFind = ref(0)
const myGame = ref([
    { id: 1, pictureFirst:  picture1, find: `| Угадать: ${countFind.value}`, title: 'Смайлы', style: 'width: 27%;'},
    { id: 2, pictureFirst:  picture2, find: `| Угадать: ${countFind.value}`, title: 'Алкаголь', style: 'width: 27%;'},
    { id: 3, pictureFirst:  picture3, find: `| Угадать: ${countFind.value}`, title: 'Еда', pictureSecond: picture4, pictureThird: picture9, style: 'width: 83%'},
    { id: 4, pictureFirst:  picture5, find: `| Угадать: ${countFind.value}`, title: 'Безалкогольные напитки', pictureSecond: picture8},
    { id: 5, pictureSecond: picture6, find: `| Угадать: ${countFind.value}`, title: 'Европа', style: 'width: 27%;'},
])
</script>

<style lang="scss" scoped>
.texts{
    background: url(@/assets/img/backgrounds/bg-rules.png);
    padding: 15px 15px;
    
}
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

</style>