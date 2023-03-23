<template>
    <b-container>
        <b-link to="dialog" class="text-decoration-none text-dark">
            <div class="mt-5">
                Вернуться к диалогам
            </div>
        </b-link>
        <hr class="bg-success my-2">
        <b-card no-body class="overflow-hidden card_body" v-for="item in profile" :key="item.id">
            <b-row no-gutters class="flex-nowrap align-items-center">
                <img loading="lazy" src="@/assets/img/vokrug-user.webp" class="rounded-circle object-fit-cover" width="100" height="100">
                <b-col md="7" class="ml-3 card-info">
                    <p class="card-name my-0 mt-2 text-success">{{ item.name }}<a href="#"
                            class="text-decoration-none position-absolute text-success ml-1"><sup>Premium</sup></a></p>
                    <p class="card-work my-0 mb-2 text-nowrap">{{ item.city }}<br> {{ item.finded }} {{ item.date }} | {{
                        item.yourFound }}<br>
                        <span>{{ item.msg }}</span>
                    </p>
                </b-col>
                <div class="d-flex flex-column justify-content-between">
                    <div @click="item.izbranni = !item.izbranni">
                        <img loading="lazy" v-if="item.izbranni" class="w-75 cursor-pointer ml-1 mb-5"
                            src="@/assets/icons/Избранный-icon-active.png">
                        <img loading="lazy" v-else class="w-75 cursor-pointer ml-1 mb-5" src="@/assets/icons/Избранный-icon.png">
                    </div>
                    <div @click="item.delete = !item.delete">
                        <img loading="lazy" v-if="item.delete" class="w-75 cursor-pointer ml-1 my-2"
                            src="@/assets/icons/delete-icon-active.png">
                        <img loading="lazy" v-else class="w-75 cursor-pointer ml-1 my-2" src="@/assets/icons/delete-icon.png">
                    </div>
                </div>
            </b-row>
        </b-card>
        <hr class="bg-success my-1">
        <b-alert show variant="light" class="float-left my-1">Привет! Как дела?</b-alert>
        <b-alert show variant="success" class="float-right my-1">Привет! Дела нормально. Любишь пиццу? </b-alert>
        <b-alert show variant="light" class="float-left my-1">Обожаю! Свободна после 18:00 на Арбатской.</b-alert>
        <b-alert show variant="success" class="float-right my-1">Ок. Я как раз в 2 станциях метро буду.</b-alert>
        <b-col class="w-75 float-right mb-1">
            <img loading="lazy" src="@/assets/icons/Smiles/Влюбленный.png">
        </b-col>
        <b-alert v-if="text.length" show variant="success" class="float-right w-75 mt-2">{{ text }}</b-alert>
    </b-container>
    <b-form-input class="border-success border-0" v-model="text" placeholder="Введите сообщение ...|"></b-form-input>
    <b-container class="d-flex justify-content-between bg-light py-1 mb-5" >
        <div class="cursor-pointer text-dark">Прикрепить смайл</div>
        <b-form-file v-model="file" plain >Прикрепить фото</b-form-file>
        <div class="cursor-pointer mb-5 text-dark">Отправить</div>
    </b-container>
</template>

<script setup>
import { BContainer, BLink, BCard, BRow, BCol, BAlert, BFormInput, /* BFormFile*/ } from "bootstrap-vue";
import { ref } from "vue";
const msgNum = ref(1);
const text = ref('')
const file = ref('')
const time = ref('18:37')
const profile = ref([
    { id: 1, name: 'Марина, 27', finded: 'Вы угадали', yourFound: 'Вас не отгадали', city: 'Москва', msg: `${msgNum.value} новое сообщение ${time.value}`, delete: false, izbranni: true },
])
</script>

<style lang="scss" scoped>

.cursor-pointer {
    cursor: pointer;
}

.object-fit-cover {
    object-fit: cover;
    min-width: 100px;
}

.card_body {
    background: inherit;
    border: none;
}

.col {
    border-radius: 10px;
    background-color: #59be86;
    display: flex;
    justify-content: center;
    transition: .5s background-color ease;
}</style>