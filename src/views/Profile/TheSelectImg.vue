<template>
    <b-container class="mb-5 mt-3">
        <b-link to="settings" class="mb-3 text-decoration-none text-dark">
            Вернуться назад
        </b-link>
        <div class="text-success mt-2">Питание</div>
        <hr class="bg-success">
        <b-row class="w-100 ml-1">
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img secondary-bg"></b-col>
            <b-col class="col-img third-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
        </b-row>
        <div class="text-success mt-2">Отдых</div>
        <hr class="bg-success">
        <b-row class="w-100 ml-1">
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
        </b-row>
        <div class="text-success mt-2">Страна</div>
        <hr class="bg-success">
        <b-row class="w-100 ml-1">
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
        </b-row>
        <b-row class="ml-1 mt-2 row-selectimg">
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
            <b-col class="col-img primary-bg"></b-col>
        </b-row>
        <b-link to="settings" class="text-decoration-none w-100 px-4">
                <the-button
                    block
                    class="text-center rounded my-5"
                >
                    <span class="text-center">Сохранить</span>
                    <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
                </the-button>
            </b-link>
    </b-container>
</template>

<script setup>
import { BLink, BContainer, BCol, BRow } from 'bootstrap-vue';
import TheButton from '@/components/UI/TheButton.vue';
</script>

<style lang="scss" scoped>
.arrowIcon{
    left: 38%;
}
.row-selectimg{
    width: 60%;
}
.col-img{
    padding: 0;
    cursor: pointer;
    height: 60px;
    border-radius: 10px;
    margin: 0px 7px 0px 0px;
}
.primary-bg{
    background: #dfdfdf;
}
.secondary-bg{
    background: #359a62;
}
.third-bg{
    background: #032b10;
}
</style>