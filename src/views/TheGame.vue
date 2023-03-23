<template>
    <div>
        <div class="userphoto position-relative">
        <TheUserHome></TheUserHome>
        <div class="d-flex justify-content-center">
            <the-card style="width: 340px;" class="user-card"></the-card>
        </div>
        <b-container class=" game-smile">
            <p>Смайлы | <span class="text-success">Угадать изображение: {{ dataCount.count }}</span></p>
            <b-row>
                <b-col
                    v-for="item in dataCount.smileCards"
                    :key="item.id"
                    class="position-relative"
                    :class="{active : item.active}"
                    @click="item.active = true"
                >
                    <img
                        loading="lazy"
                        class="smileImg"
                        @click="dataCount.addCount()"
                        :src="item.src"
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
import { reactive } from 'vue';
const dataCount = reactive({
    count: 0,
    active: false,
    smileCards: [
        { id: 1, src: smile1, active: false },
        { id: 2, src: smile2, active: false },
        { id: 3, src: smile3, active: false },
        { id: 4, src: smile4, active: false },
        { id: 5, src: smile5, active: false },
    ],
    addCount() {
        this.count += 1
        if (this.count >= 4){
            this.count = 0
            this.smileCards[0].active = false
            this.smileCards[1].active = false
            this.smileCards[2].active = false
            this.smileCards[3].active = false
            this.smileCards[4].active = false
        }
    }
})
</script>

<style lang="scss" scoped>
.game-smile{
    margin: 0px 0px 100px 0px;
}

.true-icon{
    position: absolute;
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
        background-color: #59be86;
    }
}
</style>