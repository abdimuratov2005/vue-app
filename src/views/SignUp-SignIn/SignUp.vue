<template>
    
    <b-container class="signup">
        <!-- Carousel -->
        <the-carousel></the-carousel>
        <!-- Начало Авторизация & Регистрация -->

        <div 
            v-if="resetPass == false" 
            class="signup__btn d-flex"
        >
            <div
                @click="isReg = true"
            >
                <the-button
                    class="w-100" 
                    :class="{ isActive: isReg == true }"
                >
                    Регистрация
                </the-button>
            </div>

            <div
                @click="isReg = false" 
            >
                <the-button
                    class="w-100" 
                    :class="{ isActive: isReg == false }"
                >
                    Авторизация
                </the-button>
            </div>
        </div>
        <!-- Конец Авторизация & Регистрация -->

        <!-- Начало Регистрация через ВК и Гугл+ -->
        <div class="my-4">
            <b-form @submit.prevent>
                <div 
                    v-if="isReg && resetPass == false" 
                    class="signup_socIcons d-flex w-100 justify-content-center"
                >
                    <b-link class="signup_btnIcon">
                        <img 
                            loading="lazy" 
                            class="signup_icon" 
                            src="@/assets/img/vk.png"
                        >
                    </b-link>
                    <b-link class="signup_btnIcon">
                        <img 
                            loading="lazy" 
                            class="signup_icon" 
                            src="@/assets/img/g+.png"
                        >
                    </b-link>
                </div>
            <!-- Конещ Регистрация через ВК и Гугл+ -->

            <!-- Начало Форума -->
                <the-email class="my-4"></the-email>
                
                <the-password class="py-4" v-if="resetPass == false && isReg == false"></the-password>
                    <!-- Checkbox -->
                <div 
                    class="checkbox text-nowrap" 
                    :class="{isActive : resetPass == true}"
                >
                    <div class="d-flex align-items-center justify-content-between my-3">
                        <div 
                            class="signup_checkbox" 
                            @click="checkbox =! checkbox" 
                            :class="{isActive : checkbox}"
                        >
                            <b-form-checkbox 
                                id="checkbox-1" 
                                name="checkbox-1" 
                                value="accepted" 
                                unchecked-value="not_accepted" 
                                plain
                            >
                                Запомнить меня
                            </b-form-checkbox>
                        </div>
                        <div class="signup_lang">
                            Язык: 
                            <span class="text-success">
                                Русский
                            </span>
                        </div>
                    </div>
                </div>
            <!-- Конец Форума -->

            <!-- Начало Кнопки Регистрации / Войти -->
                <b-link 
                    to="setperson" 
                    class="text-decoration-none signup_submit position-relative"
                >
                    <the-button 
                        v-if="isReg" 
                        class="signup_submit-btn text-center" 
                        type="submit" 
                        block
                    >
                        Присоедениться
                    </the-button>

                    <the-button 
                        v-else-if="resetPass" 
                        class="signup_submit-btn text-center" 
                        type="submit" 
                        block
                    >
                        Выслать новый пароль
                    </the-button>
                    
                    <the-button 
                        v-else-if="isReg == false"
                        class="signup_submit-btn text-center" 
                        type="submit" 
                        block
                    >
                        Войти
                    </the-button>
                </b-link>
                
                <div class="text-center mt-4 signup_forgotPassword">
                    <div @click="resetPass =! resetPass">
                        <b-link class="text-decoration-none text-dark">
                            Забыли свой пароль?
                        </b-link>
                    </div>
                </div>
            <!-- Конец Кнопки Регистрации / Войти -->
            </b-form>
        </div>
    </b-container>
</template>

<script setup>
import {
    BForm,
    BLink,
    BFormCheckbox,
} from 'bootstrap-vue'
import TheCarousel from '@/components/TheCarousel.vue'
import TheButton from '@/components/UI/TheButton.vue';
import TheEmail from '@/components/UI/TheEmail.vue';
import ThePassword from '@/components/UI/ThePassword.vue';
import { ref } from 'vue';
const isReg = ref(true);
const checkbox = ref('');
const resetPass = ref(false);
</script>

<style lang="scss">
.signup {
    &__btn{
        background: #fff;
        border-radius: 20px;
        div{
            width: 100%;
            position: relative;
            height: max-content;
        }
        button{
            border-radius: 20px;
            padding: 15px 30px; 
            color: #00000073;
            background: inherit;
            transition: .5s ease color;
            &:last-child{
                padding: auto 0;
            }
            &:hover{
                color: inherit;
                background: inherit;
            }
            &.isActive{
                color: #fff;
                background: linear-gradient(45deg, #59be86, #339860) ;
            }
        }
    }
    &_btnIcon{
        background-color: inherit;
        box-shadow: none;
    }
    &_icon {
        width: 50px;
        height: 50px;
        &:first-child{
            margin: 0px 0px 0px 5px;
        }
    }
    &_checkbox{
        input[type=checkbox]{
            appearance: none;
            width: 15px;
            cursor: pointer;
            height: 15px;
            margin: 0px 5px 0px 0px;
            top: 2px;
            position: relative;
            border: solid 1px green;
            &::after{
                position: absolute;
                background: url(@/assets/icons/checkbox.png) no-repeat center;
                background-size: cover;
                width: 10px;
                height: 10px;
                left: 1.5px;
                top: .8px;
                content: '';
                display: none;
            }
        }
        &.isActive input[type=checkbox]::after{
            display: block;
        }
    }
    &_submit{
        top: 10px;
    }
    &_submit-btn{
        border-radius: 40px !important;
        background: linear-gradient(45deg, #59be86, #339860) !important;
    }
}

.checkbox{
    &.isActive{
        margin: 135px 0 0 0;
    }
}
.item-img{
    width: 100px;
    height: 100px;
}
</style>