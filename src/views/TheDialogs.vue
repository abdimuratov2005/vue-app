<template>
    <b-container>
        <b-row class="mt-5">
            <div class="d-flex w-100 align-items-center navMenu justify-content-between">
                <b-col
                v-for="item in btnMenu"
                :key="item.id"
                :class="{active : isActiveID === item.id}" 
                @click="changeBtn(item.id)"
            >
                {{ item.value }}
            </b-col>
            </div>
        </b-row>
        <hr class="bg-success">
        <div class="mb-5">
            <b-card no-body class="overflow-hidden card_body" v-for="item in profile" :key="item.id">
                <b-link to="chat" class="text-decoration-none">
                    <b-row no-gutters class="flex-nowrap align-items-center">
                        <img loading="lazy" src="@/assets/img/vokrug-user.webp" class="rounded-circle object-fit-cover" width="100" height="100">
                        <b-col md="7" class="ml-3 card-info">
                            <p class="card-name my-0 mt-2 text-success">{{ item.name }}<a href="#" class="text-decoration-none position-absolute text-success ml-1"><sup>Premium</sup></a></p>
                            <p class="card-work my-0 mb-2 text-nowrap">{{ item.city }}<br> {{ item.finded }} {{ item.date }} | {{ item.yourFound }}<br>
                                <span class="text-success">
                                    {{ item.msg }}
                                </span>
                            </p>
                        </b-col>
                        <div class="d-flex flex-column justify-content-between">
                            <div @click="item.izbranni =! item.izbranni">
                                <img loading="lazy" v-if="item.izbranni" class="w-75 cursor-pointer ml-1 mb-5" src="@/assets/icons/Избранный-icon-active.png">
                                <img loading="lazy" v-else class="w-75 cursor-pointer ml-1 mb-5" src="@/assets/icons/Избранный-icon.png">
                            </div>
                            <div  @click="item.delete = !item.delete">
                                <img loading="lazy" v-if="item.delete" class="w-75 cursor-pointer ml-1 my-2" src="@/assets/icons/delete-icon-active.png">
                                <img loading="lazy" v-else class="w-75 cursor-pointer ml-1 my-2" src="@/assets/icons/delete-icon.png">
                            </div>
                        </div>
                    </b-row>
                </b-link>
                <hr class="bg-success">
            </b-card>
        </div>
        <div v-if="profile.length == 0">
            <h3 class="text-center">Тут пока никого нет...</h3>
            <hr class="bg-success">
            <b-link to="igra" class="text-decoration-none w-100 px-4">
                <the-button
                    block
                    class="text-center rounded my-5"
                >
                    <span class="text-center">Играть</span>
                    <img class="arrowIcon" src="@/assets/icons/arrow.png">
                </the-button>
            </b-link>
        </div>
    </b-container>
</template>

<script setup>
import { BContainer, BCol, BRow, BCard, BLink } from 'bootstrap-vue';
import { ref } from 'vue';
import TheButton from '@/components/UI/TheButton.vue';
const isActiveID = ref(1);
const changeBtn = (id) => {
    isActiveID.value = id
}
const btnMenu = ref([
    { id: 1, value: 'Всё' },
    { id: 2, value: 'Чаты' },
    { id: 3, value: 'Избранное', only: true },
])
const msgNum = ref(1);
const time = ref('18:37')
const profile = ref([
    { id: 1, name: 'Марина, 27', finded: 'Вы угадали', yourFound: 'Вас не отгадали', city: 'Москва', msg: `${msgNum.value} новое сообщение в ${time.value}`, delete: false, izbranni: true },
    { id: 2, name: 'Марина, 27', finded: 'Вы не угадали', yourFound: 'Вас отгадали', city: 'Москва', msg: `${msgNum.value} новое сообщение в ${time.value}`, delete: false, izbranni: false },
    { id: 3, name: 'Марина, 27', finded: 'Вы угадали', yourFound: 'Вас не отгадали', city: 'Москва', msg: `${msgNum.value} новое сообщение в ${time.value}`, delete: false, izbranni: false },
])
</script>

<style lang="scss" scoped>
.cursor-pointer{
    cursor: pointer;
}
.object-fit-cover{
    object-fit: cover;
    min-width: 100px;
}
.navMenu{
    background: white;
    border-radius: 20px;
}
.card_body{
    background: inherit;
    border: none;
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