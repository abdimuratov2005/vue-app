<template>
    <div>
        <div class="userphoto position-relative">
        <TheUserHome></TheUserHome>
        <div class="d-flex justify-content-center">
            
            <the-card 
                style="width: 340px;" 
                class="user-card"
            ></the-card>

        </div>
        <b-container class="game-smile">
            <p>
                Смайлы | 
                <span class="text-success">
                    Угадать изображение: {{ count }}
                </span>
            </p>
            <b-row>
                <b-col
                    v-for="card in smileCards"
                    :key="card.id"
                    class="position-relative"
                    :class="{ active : card.active }"
                    @click="addCount()"
                >
                    <img
                        loading="lazy"
                        class="smileImg"
                        @click="card.active = true && card.trueCard || card.trueCard == false"
                        :src="card.src"
                    >
                    <img
                        v-if="card.active && card.trueCard"
                        :src="trueCard"
                        class="trueCard"
                    >
                    <img
                        v-if="card.active && card.trueCard == false"
                        :src="falseCard"
                        class="falseCard"
                    >
                </b-col>
            </b-row>
        </b-container>
        </div>
    </div>
</template>

<script setup>
import { BContainer, BCol, BRow } from 'bootstrap-vue';
import TheUserHome from '@/components/TheUserHome.vue';
import TheCard from '@/components/TheCard.vue';
import smile1 from '@/assets/icons/Smiles/Орущий.png';
import smile2 from '@/assets/icons/Smiles/Кайфующий.png';
import smile3 from '@/assets/icons/Smiles/Влюбленный.png';
import smile4 from '@/assets/icons/Smiles/в-кепке.png';
import smile5 from '@/assets/icons/Smiles/Очарованный.png';
import trueCard from '@/assets/icons/true-icon.png';
import falseCard from '@/assets/icons/false-icon.png';
import { ref } from 'vue';
const count = ref(5);
const smileCards = ref([
    { id: 1, src: smile1, active: false, trueCard: Math.random() > .5 },
    { id: 2, src: smile2, active: false, trueCard: Math.random() > .5 },
    { id: 3, src: smile3, active: false, trueCard: Math.random() > .5 },
    { id: 4, src: smile4, active: false, trueCard: Math.random() > .5 },
    { id: 5, src: smile5, active: false, trueCard: Math.random() > .5 },
]);
const addCount = () => {
    count.value -= 1;
    smileCards.value.forEach(card => {
        if( count.value == 0 ) {
            card.active = false
            location.reload()
        }
    })
    if (count.value == 0) count.value = 5
}
</script>

<style lang="scss" scoped>
.game-smile{
    margin: 0px 0px 100px 0px;
}
.trueCard,
.falseCard{
    position: absolute;
    width: 40px;
    height: 40px;
}
.carousel-img {
    width: 100%;
    height: 100%;
    z-index: 0;
}
.user-card{
    position: absolute;
    bottom: 110px;
    border-radius: 10px;
    z-index: 101;
    pointer-events: all;
    &.active{
        bottom: 20px;
    }
}
.smileImg{
    width: 60px;
    cursor: pointer;
}
.col{
    border-radius: 10px;
    padding: 5px 0;
    background-color: #dedede;
    margin: 0px 5px;
    display: flex;
    justify-content: center;
    transition: .5s background-color ease;
    &:hover{
        background-color: #f4f4f4;
    }
    &.active{
        & > .trueCard,
        & > .falseCard {
            opacity: .5;
            width: 66px;
            height: 55px;
            top: -0px;
            border-radius: 10px;
        }
        & > .trueCard{
            background: #369c63;
        }
        & > .falseCard{
            background: #fdcf6b;
        }
    }
}
</style>