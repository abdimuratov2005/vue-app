<template>
    <b-container class="py-5 container">
        <the-title class="title">
            Расскажите о проекте Вашим друзьям и получите 5 ключей!
        </the-title>
        <div class="lead">
            Помогите нам разнобразить игру!
            Просто поделитесь информацией о проекте со своим друзьями в социальных сетях
        </div>
        <div class="d-flex justify-content-center mt-3">
            <b-link
                v-for="link in links"
                :key="link.id"
                class="mr-2"
            >
                <img
                    width="60"
                    :src="link.icon"
                >
            </b-link>
        </div>
    </b-container>
</template>

<script setup>
import { BContainer, BLink } from 'bootstrap-vue';
import TheTitle from '@/components/UI/TheTitle.vue';
import icon1 from '@/assets/icons/Logo/logo-1.png';
import icon2 from '@/assets/icons/Logo/logo-2.png';
import icon3 from '@/assets/icons/Logo/logo-3.png';
import icon4 from '@/assets/icons/Logo/logo-4.png';
import { ref } from 'vue';
const links = ref([
    { id: 1, icon: icon1 },
    { id: 2, icon: icon2 },
    { id: 3, icon: icon3 },
    { id: 4, icon: icon4 },
])
</script>

<style lang="scss" scoped>
.container{
    background: url(@/assets/img/backgrounds/bg-rules.png) no-repeat center;
    background-size: cover;
}
.title{
    font-size: 34px;
}
</style>