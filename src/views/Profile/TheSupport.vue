<template>
    <b-container class="mb-4 container">
        <the-title>
            Что такое “Ключ”?
        </the-title>
        <div class="lead mb-2">
            Это лёгкий способ открыть даже самый сложный профиль не прикладывая усилий и не соблюдая таймаут
        </div>
        <b-link class="text-decoration-none support_one-key">
            <the-button
                block 
                type="submit"
                class="text-center rounded"
            >
                <span class="text-center">1 ключ за 39 руб.</span>
                <img loading="lazy" class="arrowIcon1" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
    
        <b-link class="text-decoration-none support_ten-key">
            <the-button
                block 
                type="submit"
                class="text-center mt-2 rounded"
            >
                <span class="text-center">10 ключей за 299 руб.</span>
                <img loading="lazy" class="arrowIcon2" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
    </b-container>

    <b-container class="container">
        <the-title>
            Что такое “Премиум”?
        </the-title>
        <div class="lead mb-2">
            - Время таймаута 30 минут<br>
            - Возможность скрыть свой возвраст<br>
            - Возможность писать без взаимности
        </div>
        <b-link class="text-decoration-none support_one-key">
            <the-button
                block 
                type="submit"
                class="text-center rounded"
            >
                <span class="text-center ">Премиум на 1 месяц за 990 руб.</span>
                <img loading="lazy" class="arrowIcon3" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
    
        <b-link class="text-decoration-none support_ten-key">
            <the-button
                block 
                type="submit"
                class="text-center mt-3 rounded"
            >
                <span class="text-center ">Премиум навсегда за 4900 руб.</span>
                <img loading="lazy" class="arrowIcon4" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
    </b-container>
</template>

<script setup>
import { BContainer } from 'bootstrap-vue';
import TheTitle from '@/components/UI/TheTitle.vue';
import TheButton from '@/components/UI/TheButton.vue';
</script>

<style lang="scss" scoped>
.container{
    padding: 15px 11px;
    margin: 0px 0px 65px 0px;
    background: url(@/assets/img/backgrounds/bg-rules.png) no-repeat center;
    background-size: cover;
}
.arrowIcon1,
.arrowIcon2,
.arrowIcon3,
.arrowIcon4{
    width: 10px;
    height: 15px;
    position: relative;
}
.arrowIcon1{
    left: 30%;
}
.arrowIcon2{
    left: 22%;
}
.arrowIcon3{
    left: 5%;
}
.arrowIcon4{
    left: 6%;
}
</style>