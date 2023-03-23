<template>
    <b-container class="mb-10">
        <b-row class="mt-4">
            <div class="d-flex w-100 align-items-center mt-3 navMenu justify-content-between">
                <b-col
                    v-for="item in btnMenu"
                    :key="item.id"
                    class="col-history"
                    :class="{active : isActiveID === item.id}"
                    @click="changeBtn(item.id)"
                >
                    {{ item.value }}
                </b-col>
            </div>
        </b-row>
        <hr class="bg-success">
        <the-your v-if="btnMenu[0].show || btnMenu[2].show"></the-your>
        <the-mutually v-if="btnMenu[1].show"></the-mutually>
    </b-container>
</template>

<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue';
import { ref } from 'vue';
import TheMutually from '@/components/TheMutually.vue';
import TheYour from '@/components/TheYour.vue';
const isActiveID = ref(1);
const changeBtn = (id) => {
    isActiveID.value = id;
        btnMenu.value.forEach(i => {
        !i.show ? i.show =!i.show : i.show =!i.show
    })
}
const btnMenu = ref([
    { id: 1, value: 'Вы', show: true },
    { id: 2, value: 'Взаимно', show: false},
    { id: 3, value: 'Вас',  show: true },
])

</script>

<style lang="scss" scoped>
.mb-10{
    margin: 0px 0px 100px 0px;
}
.navMenu{
    background: white;
    border-radius: 20px;
}
.col{
    border-radius: 20px;
    padding: 10px 30px;
    color: #00000073;
    background: white;
    transition: .5s ease color;
    &:hover{
        color: #000;
    }
    &:last-child{
        padding: auto 0;
    }
    &.active{
        color: #fff;
        background: linear-gradient(45deg, #59be86, #339860);
    }
}
</style>