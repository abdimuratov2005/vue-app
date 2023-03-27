<template>
    <div class="fastT">
        <h1 class="mb-3">Fast Pagination</h1>
        <div
            v-for="comp in components"
            :key="comp.id"
            class="d-flex align-items-center link"
        >
                <b-link 
                :to="comp.link"
            >
                <li class="link">
                    {{ comp.title }}
                </li>
            </b-link>
        </div>
    </div>
</template>

<script setup>
import { BLink } from 'bootstrap-vue';
import { ref } from 'vue';
const components = ref([
    { id: 1, title: 'Выбор языка', link: 'selectLanguage'},
    { id: 2, title: 'Регистрация / Aвторизация', link: 'signup'},
    { id: 3, title: 'Заполнение данных', link: 'setperson'},
    { id: 4, title: 'Краткий выбор картинок', link: 'choosefood'},
    { id: 5, title: 'Загрузка фото', link: 'uploadphoto'},
    { id: 6, title: 'Вокруг', link: 'theApp/vokrug'},
    { id: 7, title: 'Игра', link: 'theApp/igra'},
    { id: 8, title: 'История', link: 'theApp/history'},
    { id: 9, title: 'Диалоги', link: 'theApp/dialog'},
    { id: 10, title: 'Переписка', link: 'theApp/chat'},
    { id: 11, title: 'Магазин услуг', link: 'theApp/support'},
    { id: 12, title: 'Информационное сообщение', link: 'theApp/useInfo'},
    { id: 13, title: 'Информационное сообщение с кнопками', link: 'theApp/share'},
    { id: 14, title: 'Настройки (Профиль)', link: 'theApp/settings'},
    { id: 15, title: 'Выбор изображений', link: 'theApp/selectImg'},
])
</script>

<style lang="scss" scoped>
.fastT{
 width: 100%;
}
.link{
    font-size: 19px;
}
</style>