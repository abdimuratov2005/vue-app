<template>
    <div class="userData">
        <b-container>
            <the-title class="mt-3">
                Найди любовь играя!
            </the-title>
            <b-form  @submit.stop.prevent>
                <b-form-input required class="userData__name rounded mt-3 mb-3 height-7vh px-4" placeholder="Введите имя"    v-model="name" :state="validName" id="feedback-user"></b-form-input>
                <b-form-select required class="userData__gender rounded mb-3 px-4 height-7vh"  v-model="gender" :options="genderOption"></b-form-select>
                <div class="d-flex align-items-center flex-row-reverse">
                    <b-form-datepicker button-only v-model="datapicker" hide-header class="userData__datapicker rounded mb-3 ml-2 " button-variant="white"></b-form-datepicker>
                    <b-form-input :state="validData" required class="userData__date  rounded mb-3 px-4 height-7vh" placeholder="Введите дату рождения" v-model="datapicker" id="feedback-user">{{ datapicker }}</b-form-input>
                </div>
                <b-form-input required list="setCity" placeholder="Введите город" class="userData__setCity rounded mb-3 height-7vh px-4"></b-form-input>
                <b-form-datalist required id="setCity" :options="cities" class="userData__datalist"></b-form-datalist>
                <b-form-select required  class="userData__work rounded mb-3 height-7vh px-4" v-model="work" :options="workOption"></b-form-select>
                <b-form-select required  class="userData__target rounded mb-3 height-7vh px-4" v-model="target" :options="targetOption"></b-form-select>
                <b-form-input required class="userData__email rounded height-7vh px-4" placeholder="example@mail.ru" v-model="email" :state="validEmail" id="feedback-user"></b-form-input>
                <b-form-invalid-feedback required :state="validEmail"></b-form-invalid-feedback>
                
                <b-link to="choosefood" class="text-decoration-none userData__continue">
                    <the-button
                        block 
                        type="submit"
                        class="text-center rounded"
                    >
                        <span class="text-center">Далее</span>
                        <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
                    </the-button>
                </b-link>
            </b-form>
        </b-container>
    </div>
</template>

<script setup>
import { BForm, 
        BFormInput, 
        BFormSelect, 
        BFormDatepicker,
        BFormInvalidFeedback,
        BLink,
        BFormDatalist,
        BContainer
} from 'bootstrap-vue';
import TheTitle from '@/components/UI/TheTitle.vue'
import TheButton from '@/components/UI/TheButton.vue'
import { computed, ref } from 'vue';
const name = ref('')
const gender = ref(null);
const work = ref(null);
const target = ref(null);
const email = ref('');
const datapicker = ref('')
const validEmail = computed(() => email.value.length > 4 && (/.+@.+\..+/.test(email.value)))
const validName = computed(() => name.value.length >= 2 );
const validData = computed(() => datapicker.value.length >= 2 );
const cities = ref([
    'Москва', 'Москва', 'Москва'
])
const genderOption = ref([
    { value: null, text: 'Выберите пол' },
    { value: 'a', text: 'Мужской' },
    { value: 'b', text: 'Женский' },
]);
const workOption = ref([
    { value: null, text: 'Выберите род занятий' },
    { value: 'a', text: 'Работаю' },
    { value: 'b', text: 'Учусь' },
]);
const targetOption = ref([
    { value: null, text: 'Выберите цель в проекте' },
    { value: 'a', text: 'Занимаюсь' },
    { value: 'b', text: 'Развлекаюсь' },
]);
</script>

<style lang="scss" scoped>
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
    left: 45%;
}
.height-7vh{
    height: 50px;
}
.userData{
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
}
</style>