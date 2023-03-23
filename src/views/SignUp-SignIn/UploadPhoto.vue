<template>
    <the-title class="position-relative title">
        Загрузите 1 фото!
    </the-title>
    <div class="overflow-auto">
            <div class="userphoto position-relative">
                <TheUserHome v-if="selectedPhoto"></TheUserHome>
                <div class="d-flex justify-content-center">
                    <the-card style="width: 340px;" :class="{active : selectedPhoto == false}" class="user-card"></the-card>
                </div>
            <div class="userphoto">
                <TheUserPhoto v-if="selectedPhoto == false"></TheUserPhoto>
            </div>
        </div>
        <b-container fluid>
            <b-row class="d-flex justify-content-between mt-2">
                <div class="flex-nowrap text-center w-100 d-flex justify-content-between">
                    <b-col md="6" class="ml-2 z-index-101">
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
                <b-link to="theApp/vokrug" v-if="selectedPhoto" class="text-decoration-none w-100 px-4">
                    <the-button
                        block
                        class="text-center rounded"
                    >
                        <span class="text-center">Далее</span>
                        <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
                    </the-button>
                </b-link>
            </b-row>
        </b-container>
    </div>
    
</template>

<script setup>
import { BContainer, BRow, BCol, BLink} from 'bootstrap-vue';
import TheTitle from '@/components/UI/TheTitle.vue';
import TheUserPhoto from '@/components/UI/TheUserPhoto.vue';
import TheButton from '@/components/UI/TheButton.vue';
import TheCard from '@/components/TheCard.vue';
import TheUserHome from '@/components/TheUserHome.vue';
import { ref } from 'vue';
const selectedPhoto = ref(false)
const setMainPhoto = ref(true)
</script>

<style lang="scss">
.z-index-101{
    z-index: 101;
}
.title{
    top: 120px;
    z-index: 5;
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
        bottom: 20px;
    }
} 
</style>