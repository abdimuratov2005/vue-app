<template>
    <b-form  @submit.stop.prevent>
        <b-form-input required class="data__name rounded mt-5 mb-3 height-7vh px-4" placeholder="Моё имя" v-model="name" :state="validName" id="feedback-user"></b-form-input>
        <b-form-select required class="data__gender rounded mb-3 px-4 height-7vh" v-model="gender" :options="genderOption"></b-form-select>
        <div class="d-flex align-items-center flex-row-reverse">
            <b-form-datepicker button-only v-model="datapicker" hide-header class="data__datapicker rounded mb-3 ml-2 " button-variant="white"></b-form-datepicker>
            <b-form-input :state="validData" required class="data__date  rounded mb-3 px-4 height-7vh" placeholder="12.12.2012" v-model="datapicker" id="feedback-user">{{ datapicker }}</b-form-input>
        </div>
        <b-form-input required list="setCity" placeholder="Москва" class="data__setCity rounded mb-3 height-7vh px-4"></b-form-input>
        <b-form-datalist required id="setCity" :options="cities" class="data__datalist"></b-form-datalist>
        <b-form-input disabled class="data__company rounded  mb-3 height-7vh px-4" placeholder="Введите кампанию" id="feedback-user"></b-form-input>
        <b-form-select required disabled class="data__work rounded mb-3 height-7vh px-4" v-model="work" :options="workOption"></b-form-select>
        <b-form-select required class="data__target rounded mb-3 height-7vh px-4" v-model="target" :options="targetOption"></b-form-select>
        <b-form-select required class="data__lang rounded mb-3 height-7vh px-4" v-model="lang" :options="langOption"></b-form-select>
        <b-form-input required class="data__email  rounded height-7vh px-4" placeholder="example@mail.ru" v-model="email" :state="validEmail" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback required :state="validEmail"></b-form-invalid-feedback>
        
        <b-link class="text-decoration-none data__continue">
            <the-button
                block 
                type="submit"
                class="text-center rounded"
            >
                <span class="text-center">Сохранить</span>
                <img class="arrowIcon" loading="lazy" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
    </b-form>
</template>

<script setup>
import { BForm, 
        BFormInput, 
        BFormSelect, 
        BFormDatepicker,
        BFormInvalidFeedback,
        BLink,
        BFormDatalist,
} from 'bootstrap-vue';
import { computed, ref } from 'vue';
import TheButton from '@/components/UI/TheButton.vue';
const name = ref('')
const gender = ref(null);
const work = ref(null);
const target = ref(null);
const lang = ref(null);
const email = ref('');
const datapicker = ref('');
const validEmail = computed(() => email.value.length > 4 && (/.+@.+\..+/.test(email.value)));
const validName = computed(() => name.value.length >= 2 );
const validData = computed(() => datapicker.value.length >= 2 );
const cities = ref([
    'Москва', 'Москва', 'Москва'
])
const genderOption = ref([
    { value: null, text: 'Мужской' },
    { value: 'a', text: 'Женский' },
]);
const workOption = ref([
    { value: null, text: 'Выберите род занятий' },
    { value: 'a', text: 'Работаю' },
    { value: 'b', text: 'Учусь' },
]);
const langOption = ref([
    { value: null, text: 'Русский' },
    { value: 'a', text: 'English' },
    { value: 'b', text: 'Español' },
]);
const targetOption = ref([
    { value: 'null', text: 'Занимаюсь' },
    { value: 'a', text: 'Развлекаюсь' },
    { value: 'b', text: 'Знакомлюсь' },
])
</script>

<style lang="scss">
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