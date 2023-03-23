<template>
    <b-container>
        <b-row >
            <b-col class="users d-flex align-items-center justify-content-between text-center">
                <img loading="lazy" src="@/assets/img/man-img.png" class="rounded-circle object-fit-cover">
                <div class="text-success font-weight-bolder"><h1 class="my-0">78%</h1>совпадение</div>
                <img loading="lazy" src="@/assets/img/vokrug-user.webp" class="rounded-circle object-fit-cover">
            </b-col>
        </b-row>
    </b-container>
    <hr class="bg-success">
    <b-container>
        <div class="d-flex align-items-center justify-content-center">
            <div class="ml-3">
                <p class="w-100 my-1">Еда</p>
                <b-row>
                    <b-col v-for="item in dataCount.foodCards" :key="item.id" class="position-relative col"
                        :class="{ active: item.active }" @click="item.active = true">
                        <img loading="lazy" class="foodImg" @click="dataCount.addFoodCount()" :src="item.src" :style="item.h">
                    </b-col>
                </b-row>

                <p class="w-100 my-1">Безалкогольные напитки</p>
                <b-row class="flex-nowrap w-74">
                    <b-col v-for="item in dataCount.drinkCards" :key="item.id" class="position-relative col"
                        :class="{ active: item.active }" @click="item.active = true">
                        <img loading="lazy" class=" foodImg" @click="dataCount.addDrinkCount()" :src="item.src">
                    </b-col>
                </b-row>
                
                <p class="w-100 my-1">Европа</p>
                <b-row class="w-84">
                    <b-col v-for="item in dataCount.countryCards" :key="item.id" class="position-relative col"
                        :class="{ active: item.active }" @click="item.active = true">
                        <img loading="lazy" class="foodImg" @click="dataCount.addCountryCount()" :src="item.src">
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-container>
</template>

<script setup>
import { BContainer, BCol, BRow } from 'bootstrap-vue';
import { reactive } from 'vue';
import food1 from '@/assets/img/spagetti.png';
import food2 from '@/assets/img/salat.png';
import food3 from '@/assets/img/roll.png';
import drink1 from '@/assets/img/drink-1.png';
import drink2 from '@/assets/img/drink-2.png';
import country1 from '@/assets/img/country-1.png';
const dataCount = reactive({
    countFood: 1,
    countDrink: 0,
    countCountry: 0,
    foodCards: [
        { id: 1, src: food1, active: false },
        { id: 2, src: food2, active: false },
        { id: 3, src: food3, active: false },
    ],
    drinkCards: [
        { id: 1, src: drink1, active: false },
        { id: 2, src: drink2, active: false },
    ],
    countryCards: [
        { id: 1, src: country1, active: false },
    ],
    addFoodCount() {
        this.countFood += 1
        if (this.countFood >= 3) {
            this.countFood = 0
            this.foodCards[0].active = false
            this.foodCards[1].active = false
            this.foodCards[2].active = false
        }
    },
    addDrinkCount() {
        this.countDrink += 1
        if (this.countDrink >= 1) {
            this.countDrink = 0
            this.drinkCards[0].active = false
            this.drinkCards[1].active = false
        }
    },
    addCountryCount() {
        this.countCountry += 1
        if (this.countCountry >= 1) {
            this.countCountry = 0
            this.countryCards[0].active = false
        }
    },
})

</script>

<style lang="scss" scoped>
.w-74 {
    width: 74% !important;
}
.w-84 {
    width: 100px !important;
}
.col {
    width: 90px !important;
    padding: 0px 0px;
}

.users{
    background: inherit !important;
}

.col {
    border-radius: 10px;
    padding: 5px 0;
    background-color: #dedede;
    margin: 0px 5px;
    display: flex;
    justify-content: center;
    transition: .5s background-color ease;

    &:hover {
        background-color: #f4f4f4;
    }

    &.active {
        background-color: #59be86;
    }
}

.cursor-pointer {
    cursor: pointer;
}

.object-fit-cover {
    object-fit: cover;
    min-width: 60px;
    height: 60px;
}

.foodImg {
    width: 60px;
    height: 60px;
    cursor: pointer;
    object-fit: cover;
}
</style>