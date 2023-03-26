<template>
    <div class="chooseFood mt-5">
        <b-container class="d-flex flex-column">
            
            <the-title>
                Выберите от 1 картинки
            </the-title>
            
            <div class="mt-3 ml-3">
                Еда
            </div>
            <b-row class="mx-1">
                <b-col
                    v-for="option in options"
                    :key="option.id"
                    class="col-chooseFood"
                    :class="{ active : selectedId1 === option.id }"
                >
                    <img
                        loading="lazy"
                        class="foodImg"
                        @click="selectFood1(option.id)" 
                        :src="option.src"
                    >
                </b-col>
            </b-row>

            <div class="mt-3 ml-3">
                Напиток
            </div>
            <b-row class="mx-1">
                <b-col
                    v-for="option in options"
                    :key="option.id"
                    class="col-chooseFood"
                    :class="{ active : selectedId2 === option.id }"
                >
                    <img
                        loading="lazy"
                        class="foodImg"
                        @click="selectFood2(option.id)" 
                        :src="option.src"
                    >
                </b-col>    
            </b-row>

            <div class="mt-3 ml-3">
                Отдых
            </div>
            <b-row class="mx-1">
                <b-col
                    v-for="option in options"
                    :key="option.id"
                    class="col-chooseFood"
                    :class="{ active : selectedId3 === option.id }"
                >
                    <img 
                        loading="lazy"
                        class="foodImg"
                        @click="selectFood3(option.id)" 
                        :src="option.src"
                    >
                </b-col>
            </b-row>

            <div 
                v-if="renderBtn" 
                class="mt-5 chooseFood__continue position-relative"
            >
                <b-link 
                    to="uploadphoto" 
                    class="text-decoration-none"
                >
                    <the-button
                        block
                        class="text-center rounded"
                    >
                        <span class="text-center">
                            Далее
                        </span>
                        <img 
                            loading="lazy" 
                            class="arrowIcon" 
                            src="@/assets/icons/arrow.png"
                        >
                    </the-button>
                </b-link>
            </div>

        </b-container>
    </div>
</template>

<script setup>
import { BContainer, BRow, BLink, BCol } from 'bootstrap-vue';
import TheTitle from "@/components/UI/TheTitle.vue";
import TheButton from '@/components/UI/TheButton.vue';
import food1 from '@/assets/img/spagetti.png';
import food2 from '@/assets/img/salat.png';
import food3 from '@/assets/img/roll.png';
import { computed, ref } from "vue";
const selectedId1 = ref(0),
    selectedId2 = ref(0),
    selectedId3 = ref(0),
    selectFood1 = (id) => {
        selectedId1.value = id
    },
    selectFood2 = (id) => {
        selectedId2.value = id
    },
    selectFood3 = (id) => {
        selectedId3.value = id
    },
    options = ref([
        { id: 1, src: food1 },
        { id: 2, src: food2 },
        { id: 3, src: food3 },
]);
const renderBtn = computed(() => selectedId3.value !== 0)
</script>

<style lang="scss" scoped>
.chooseFood {
    &__continue {
        top: -10px;
    }
}
.col{
    border-radius: 10px;
    padding: 10px 0;
    background-color: #dedede;
    transition: .5s background-color ease;
    &:hover{
        background-color: #f4f4f4;
    }
    &.active{
        background-color: #59be86;
    }
}
.col-chooseFood{
    &:not(:first-child){
        margin: 0px 0px 0px 21px;
    }
}
.foodImg{
    width: 100px;
    cursor: pointer;
}
</style>