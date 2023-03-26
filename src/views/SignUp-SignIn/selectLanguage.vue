<template>
    <div class="languages px-3">
        <!-- Начало Container -->
        <b-container>

            <!-- Начало Заголовка -->
            <b-col>
                <the-title class="mt-5">
                    Выберите язык
                </the-title>
            </b-col>
            <!-- Конец Заголовка -->

            <!-- Начало CheckBox -->
            <b-form-group class="mt-5">
                
                <b-form-checkbox-group

                    :options="options"
                    name="checkbox-validation"
                    v-model="valueLang"
                    :state="validLang"
                    buttons
                    class="languages_btns d-flex flex-column"
                    @click="validLang"
                >
                </b-form-checkbox-group>
            </b-form-group>
            <!-- Конец CheckBox -->

        </b-container>
        <!-- Конец Container -->

        <!-- Начало Валидация Блока Кнопки -->
        <b-form-valid-feedback :state="selected || validLang">
            <!-- Начало Блока Кнопки -->

            <b-link
                to="signup"
                class="text-decoration-none"
            >
                <the-button
                    block 
                    class="languages_btnContinue text-center position-relative"
                >
                    <span class="text-center">Далее</span>
                    <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
                </the-button>
            </b-link>

            <!-- Начало Блока Кнопки -->
        </b-form-valid-feedback>
        <!-- Конец Валидация Блока Кнопки -->

    </div>
</template>

<script setup>
import { BFormGroup, 
        BFormCheckboxGroup, 
        BFormValidFeedback,
        BLink,
        BContainer
} from 'bootstrap-vue'
import { computed, ref } from "vue";
import TheButton from "@/components/UI/TheButton.vue";
import TheTitle from "@/components/UI/TheTitle.vue";

const selected = ref(false); // Валидация кнопки
const valueLang = ref([]); // Пустой массив
const options = ref([ // Массив кнопки
    {text: 'Русский', value: 'Русский'},
    {text: 'English', value: 'English'},
    {text: 'Español', value: 'Español'},
]);
const validLang = computed(() => valueLang.value.length >= 1); // Валидация появление кнопки
</script>

<style lang="scss">
label.btn{
    margin-top: 20px !important;
    border-radius: 40px !important;
    height: 7vh;
    display: flex;
    padding: 30px;
    align-items: center;
    text-align: start;
    border: none;
    outline: none;
    &:hover, 
    &:focus{
        background: linear-gradient(45deg, #59be86, #339860) !important;
    }
}
.languages {
    &_btnContinue{
        border-radius: 30px;
        max-width: 319px;
        max-height: 70px;
        margin: 0 0 150px 15px;
        top: 2rem;
        z-index: 111;
    }
}
</style>