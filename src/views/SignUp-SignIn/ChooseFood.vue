<template>
    <div class="chooseFood mt-5">
        <b-container class="d-flex flex-column">
            <the-title>Выберите от 1 картинки</the-title>
            <div class="mt-3 ml-3">Еда</div>
            <b-row class="mx-1">
                <b-col
                    v-for="item in options"
                    :key="item.id"
                    class="col-chooseFood"
                    :class="{active : selectedId1 === item.id }"
                >
                    <img
                        loading="lazy"
                        class="foodImg"
                        @click="selectFood1(item.id)" 
                        :src="item.src"
                    >
                </b-col>
            </b-row>
            <div class="mt-3 ml-3">Напиток</div>
            <b-row class="mx-1">
                <b-col
                    v-for="item in options"
                    :key="item.id"
                    class="col-chooseFood"
                    :class="{active : selectedId2 === item.id }"
                >
                    <img
                        loading="lazy"
                        class="foodImg"
                        @click="selectFood2(item.id)" 
                        :src="item.src"
                    >
                </b-col>    
            </b-row>
            <div class="mt-3 ml-3">Отдых</div>
            <b-row class="mx-1">
                <b-col
                    v-for="item in options"
                    :key="item.id"
                    class="col-chooseFood"
                    :class="{active : selectedId3 === item.id }"
                >
                    <img 
                        loading="lazy"
                        class="foodImg"
                        @click="selectFood3(item.id)" 
                        :src="item.src"
                    >
                </b-col>
            </b-row>
            <div v-if="renderBtn" class="mt-5 chooseFood__continue">
                <b-link to="/uploadphoto" class="text-decoration-none">
                    <the-button
                        block
                        class="text-center rounded"
                    >
                        <span class="text-center">Далее</span>
                        <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
                    </the-button>
                </b-link>
            </div>
        </b-container>
    </div>
</template>

<script setup>
import { BContainer, BRow, BLink, BCol } from 'bootstrap-vue'
import TheTitle from "@/components/UI/TheTitle.vue";
import TheButton from '@/components/UI/TheButton.vue'
import food1 from '@/assets/img/spagetti.png'
import food2 from '@/assets/img/salat.png'
import food3 from '@/assets/img/roll.png'
import { computed, ref } from "vue";
const selectedId1 = ref(0);
const selectedId2 = ref(0);
const selectedId3 = ref(0);
const selectFood1 = (id) => {
    selectedId1.value = id
}
const selectFood2 = (id) => {
    selectedId2.value = id
}
const selectFood3 = (id) => {
    selectedId3.value = id
}
const options = ref([
    { id: 1, src: food1 },
    { id: 2, src: food2 },
    { id: 3, src: food3 },
])
const renderBtn = computed(() => selectedId3.value !== 0)
</script>

<style lang="scss" scoped>
.foodImg{
    width: 100px;
    cursor: pointer;
}
.col-chooseFood{
    &:not(:first-child){
        margin: 0px 0px 0px 20px;
    }
}
.chooseFood {
    &__continue {
        position: relative;
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
</style>