<template>
    <b-container class="mt-1 ">
        <div class="d-flex align-items-center">
            <div>
                <img
                    loading="lazy"
                    src="@/assets/img/vokrug-user.webp" 
                    class="rounded-circle object-fit-cover"
                >
            </div>
            <div class="ml-2">
                <p class="w-100 my-1">
                    Еда | 
                    <span class="text-success">
                        Угадать: {{ dataCount.countFood }}
                    </span>
                </p>
                <b-row>
                    <b-col 
                        v-for="item in dataCount.foodCards" 
                        :key="item.id" 
                        class="position-relative"
                        :class="{ active: item.active }" 
                        @click="item.active = true"
                    >
                        <img 
                            loading="lazy"
                            class="foodImg" 
                            @click="dataCount.addFoodCount()" 
                            :src="item.src" 
                            :style="item.h"
                        >
                    </b-col>
                </b-row>
                <p class="w-100 my-1">
                    Безалкогольны напитки | 
                    <span class="text-success">
                        Угадать: {{ dataCount.countDrink}}
                    </span>
                </p>
                <b-row class="w-60 flex-nowrap">
                    <b-col 
                        v-for="item in dataCount.drinkCards" 
                        :key="item.id" 
                        class="position-relative"
                        :class="{ active: item.active }" 
                        @click="item.active = true"
                    >
                        <img 
                            loading="lazy"
                            class="foodImg" 
                            @click="dataCount.addDrinkCount()" 
                            :src="item.src"
                        >
                    </b-col>
                </b-row>
                <p class="w-100 my-1">
                    Европа | 
                    <span class="text-success">
                        Угадать: {{ dataCount.countCountry }}
                    </span>
                </p>
                <b-row class="w-60">
                    <b-col 
                        v-for="item in dataCount.countryCards" 
                        :key="item.id" 
                        class="position-relative"
                        :class="{ active: item.active }" 
                        @click="item.active = true"
                    >
                        <img
                            loading="lazy" 
                            class="foodImg" 
                            @click="dataCount.addCountryCount()" 
                            :src="item.src"
                        >
                    </b-col>
                </b-row>
            </div>
        </div>
        <hr class="bg-success">
        <div class="d-flex align-items-center">
            <div>
                <img
                    loading="lazy"
                    src="@/assets/img/vokrug-user.webp" 
                    class="rounded-circle object-fit-cover"
                >
            </div>
            <div class="ml-2">
                <p class="w-100 my-1">
                    Еда | 
                    <span class="text-success">
                        Угадать: {{ dataCount.countUnknownFood }}
                    </span>
                </p>
                <b-row>
                    <b-col 
                        v-for="item in dataCount.unknownFoodCards" 
                        :key="item.id" class="position-relative"
                        :class="{ active: item.active }" 
                        @click="item.active = true"
                    >
                        <img
                            loading="lazy"
                            class="foodImg" 
                            style="height: 55px; 
                            object-fit: contain"
                            @click="dataCount.addUnknownFoodCount()" 
                            :src="item.src"
                        >
                    </b-col>
                </b-row>
                <p class="w-100 my-1">
                    Безалкогольны напитки | 
                    <span class="text-success">
                        Угадать: {{ dataCount.countUnknownDrink}}
                    </span>
                </p>
                <b-row class="w-60 flex-nowrap">
                    <b-col 
                        v-for="item in dataCount.unknownDrinkCards" 
                        :key="item.id" 
                        class="position-relative"
                        :class="{ active: item.active }" 
                        @click="item.active = true"
                    >
                        <img
                            loading="lazy"
                            class="foodImg" 
                            style="height: 55px; 
                            object-fit: contain" 
                            @click="dataCount.addUnknownDrinkCount()" 
                            :src="item.src"
                        >
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-container>
</template> 

<script setup>
import { reactive } from "vue"
import { BContainer, BCol, BRow } from "bootstrap-vue";
import food1 from '@/assets/img/spagetti.png';
import food2 from '@/assets/img/salat.png';
import food3 from '@/assets/img/roll.png';
import food4 from '@/assets/icons/unknown-icon.png';
import drink1 from '@/assets/img/drink-1.png';
import drink2 from '@/assets/img/drink-2.png';
import country1 from '@/assets/img/country-1.png';
const dataCount = reactive({
    countFood: 1,
    countDrink: 0,
    countCountry: 0,
    countUnknownFood: 4,
    countUnknownDrink: 2,
    foodCards: [
        { id: 1, src: food1, active: false },
        { id: 2, src: food2, active: false },
        { id: 3, src: food3, active: false },
        { id: 4, src: food4, active: false, h: "height: 55px; object-fit: contain" },
    ],
    drinkCards: [
        { id: 1, src: drink1, active: false },
        { id: 2, src: drink2, active: false },
    ],
    unknownFoodCards: [
        { id: 1, src: food4, active: false },
        { id: 2, src: food4, active: false },
        { id: 3, src: food4, active: false },
        { id: 4, src: food4, active: false },
    ],
    unknownDrinkCards: [
        { id: 1, src: food4, active: false },
        { id: 2, src: food4, active: false },
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
            this.foodCards[3].active = false
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
    addUnknownFoodCount() {
        this.countUnknownFood += 1
        if (this.countUnknownFood >= 3) {
            this.countUnknownFood = 0
            this.unknownFoodCards[0].active = false
            this.unknownFoodCards[1].active = false
            this.unknownFoodCards[2].active = false
            this.unknownFoodCards[3].active = false
        }
    },
    addUnknownDrinkCount() {
        this.countUnknownDrink += 1
        if (this.countUnknownDrink >= 1) {
            this.countUnknownDrink = 0
            this.unknownDrinkCards[0].active = false
            this.unknownDrinkCards[1].active = false
        }
    },

})
</script>

<style lang="scss" scoped>
.w-60 {
    width: 60px !important;
}
.col {
    width: 60px;
    padding: 0px 0px;
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