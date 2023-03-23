<template>
    <div>
        <div class="userphoto position-relative">
            <div class="d-flex justify-content-center">
                <the-card style="width: 340px;" class="user-card"></the-card>
            </div>
            <the-user-home></the-user-home>
        </div>
        <b-container fluid>
            <b-row class="d-flex justify-content-between my-2">
                <div class="flex-nowrap text-center w-100 d-flex justify-content-between">
                    <b-col md="6" class=" z-index-101">
                        <a @click="setMainPhoto = !setMainPhoto" href="#" class="text-decoration-none text-dark">
                            <div v-if="setMainPhoto">Главное фото</div>
                            <div v-else>Сделать главным</div>
                        </a>
                    </b-col>
                    <b-col md="3" class="ml-5 z-index-101">
                        <a href="#" @click="setMainPhoto = false" class="text-decoration-none text-dark">
                            <div v-if="setMainPhoto">Удалить</div>
                            <div v-else class="text-warning text-nowrap deleteNotMess">Главное фото удалить нельзя</div>
                        </a>
                    </b-col>
                </div>
                <div class="row"></div>
                <b-link type="file" class="text-decoration-none w-100 my-2 z-index-101 px-4" @click="selectedPhoto =! selectedPhoto">
                    <the-button
                        block
                        class="text-center rounded"
                    >
                        <span class="text-center">Загрузить фото</span>
                        <img loading="lazy" class="arrowIcon" style="left: 30%;" src="@/assets/icons/arrow.png">
                    </the-button>
                </b-link>
            </b-row>
            <the-title>
                Моя игра
            </the-title>

            <the-my-game></the-my-game>
            
            <the-title>
                Мои данные
            </the-title>
            
            <the-my-data></the-my-data>

            <the-title class="mt-5">
                Мои фильтр
            </the-title>
            <the-my-filter></the-my-filter>

            <the-title class="mt-5 mb-0">
                Помощь и информация
            </the-title>
            <the-help-and-info></the-help-and-info>

            <the-title class="mt-4 mb-0">
                Уведомления
            </the-title>
            <the-push-and-private></the-push-and-private>
        </b-container>     
    </div>
</template>

<script setup>
import { BContainer, BRow, BLink, BCol } from 'bootstrap-vue';
import TheUserHome from '@/components/TheUserHome.vue';
import TheCard from '@/components/TheCard.vue';
import TheButton from '@/components/UI/TheButton.vue';
import TheTitle from '@/components/UI/TheTitle.vue'
import TheMyGame from '@/components/TheMyGame.vue';
import TheMyData from '@/components/TheMyData.vue';
import TheMyFilter from '@/components/TheMyFilter.vue';
import TheHelpAndInfo from '@/components/TheHelpAndInfo.vue';
import ThePushAndPrivate from '@/components/ThePushAndPrivate.vue';

import { ref } from 'vue';
const selectedPhoto = ref(false);
const setMainPhoto = ref(true);

</script>

<style lang="scss" scoped>
.z-index-101{
    z-index: 101;
}
.title{
    top: 120px;
    z-index: 5;
}
.pictureMyGame{
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
.deleteNotMess{
    position: relative;
    left: -140px;
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
</style>