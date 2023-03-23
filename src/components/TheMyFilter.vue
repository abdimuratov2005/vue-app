<template>
    <div>
        <b-row >
            <div class="d-flex w-100 align-items-center navMenu justify-content-between">
                <b-col
                    v-for="item in btnMenu1"
                    :key="item.id"
                    class="col-filter"
                    :class="{active : isActiveID1 === item.id}" 
                    @click="changeBtn1(item.id)"
            >
                {{ item.value }}
            </b-col>
            </div>
        </b-row>
    </div>
    <div class="my-2">
        <b-row>
            <div class="d-flex w-100 align-items-center navMenu justify-content-between">
                <b-col
                    v-for="item in btnMenu2"
                    :key="item.id"
                    class="col-filter"
                    :class="{active : isActiveID2 === item.id}" 
                    @click="changeBtn2(item.id)"
            >
                {{ item.value }}
            </b-col>
            </div>
        </b-row>
    </div>
    <b-form @submit.stop.prevent>
        <b-form-input required list="setCity" placeholder="Москва" class="data__setCity rounded mb-2 height-7vh px-4"></b-form-input>
        <b-form-datalist required id="setCity" :options="cities" class="data__datalist"></b-form-datalist>
        <b-form-select required  class="data__target rounded height-7vh px-4" v-model="target" :options="targetOption"></b-form-select>
    </b-form>
    <b-link class="text-decoration-none data__continue">
        <the-button
            block 
            type="submit"
            class="text-center rounded"
        >
            <span class="text-center">Сохранить</span>
            <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
        </the-button>
    </b-link>
</template>
<script setup>
import { ref } from 'vue'
import { BForm, 
        BFormSelect, 
        BLink,
        BFormInput,
        BFormDatalist
} from 'bootstrap-vue';
import TheButton from '@/components/UI/TheButton.vue';
const target = ref(null);
const btnMenu1 = ref([
    { id: 1, value: 'Все' },
    { id: 2, value: 'Девушки' },
    { id: 3, value: 'Парни'},
])
const btnMenu2 = ref([
    { id: 1, value: '12 лет' },
    { id: 2, value: '19-33' },
    { id: 3, value: '90 лет'},
])
const targetOption = ref([
    { value: 'null', text: 'Занимаюсь' },
    { value: 'a', text: 'Развлекаюсь' },
    { value: 'b', text: 'Знакомлюсь' },
])
const cities = ref([
    'Москва', 'Москва', 'Москва'
])
const isActiveID1 = ref(1);
const isActiveID2 = ref(1);

const changeBtn1 = (id) => {
    isActiveID1.value = id
}
const changeBtn2 = (id) => {
    isActiveID2.value = id
}
</script>

<style lang="scss" scoped>
.navMenu{
    background: white;
    border-radius: 20px;
}
.col-filter{
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
.rounded{
    border-radius: 40px !important;
    border: none;
    background-color: #fff;
    outline: none;
}
.arrowIcon {
    width: 10px;
    height: 15px;
    position: relative;
    left: 40%;
}
.height-7vh{
    height: 50px;
}
.data{
    &__datapicker{
        position: relative;
        text-align: start;
    }
    &__datalist{
        position: absolute;
        background-color: white;
        border: 1px solid blue;
        border-radius: 0 0 5px 5px;
        border-top: none;
        font-family: sans-serif;
        width: 350px;
        padding: 5px;
    }
    &__continue{
        position: relative;
        top: 25px;
    }
} 
</style>