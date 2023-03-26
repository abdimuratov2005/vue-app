<template>
    <b-container>
        <b-link 
            to="dialog" 
            class="text-decoration-none text-dark"
        >
            <div class="mt-5">
                Вернуться к диалогам
            </div>
        </b-link>

        <hr class="bg-success my-2">

        <b-card 
                no-body 
                class="overflow-hidden card_body" 
                v-for="user in profile" 
                :key="user.id"
            >
                <b-row 
                    no-gutters 
                    class="flex-nowrap align-items-center"
                >
                    <img
                        loading="lazy" 
                        src="@/assets/img/vokrug-user.webp" 
                        class="rounded-circle object-fit-cover" 
                        width="100" 
                        height="100"
                    >
                    <b-col 
                        md="7" 
                        class="ml-3 card-info"
                    >
                        <p class="my-0 mt-2">
                            {{ user.name }}
                            <a 
                                href="#" 
                                class="text-decoration-none position-absolute text-success ml-1"
                            >
                                <sup>
                                    Premium
                                </sup>  
                            </a>
                        </p>
                        <p class="card-work my-0 mb-2 text-nowrap">
                            {{ user.city }}<br> {{ user.finded }} {{ user.date }} | {{ user.yourFound }}<br>
                            <span class="text-success">
                                {{ user.msg }}
                            </span>
                        </p>
                    </b-col>
                    <div class="d-flex flex-column h-100 justify-content-between">
                        <div @click="user.favoriteActive =! user.favoriteActive">
                            <div v-if="user.favorite">
                                <img 
                                    v-if="user.favoriteActive"
                                    loading="lazy" 
                                    class="w-75 cursor-pointer ml-1 mb-5" 
                                    src="@/assets/icons/Избранный-icon-active.png"
                                >
                                <img
                                    v-else
                                    loading="lazy" 
                                    class="w-75 cursor-pointer ml-1 mb-5" 
                                    src="@/assets/icons/Избранный-icon.png"
                                >
                            </div>
                        </div>
                        <div>
                            <div v-if="user.delete">
                                <img 
                                    v-if="user.deleteActive"
                                    loading="lazy" 
                                    class="w-75 cursor-pointer ml-1 my-2" 
                                    src="@/assets/icons/delete-icon-active.png"
                                >
                                <img
                                    v-else
                                    loading="lazy" 
                                    class="w-75 cursor-pointer ml-1 my-2" 
                                    src="@/assets/icons/delete-icon.png"
                                >
                            </div>
                        </div>
                    </div>
                </b-row>
            </b-card>

        <hr class="bg-success my-1">
        
        <b-alert 
            show 
            variant="light" 
            class="float-left my-1"
        >
            Привет! Как дела?
        </b-alert>
        
        <b-alert 
            show 
            variant="success" 
            class="float-right my-1"
        >
            Привет! Дела нормально. Любишь пиццу? 
        </b-alert>
        
        <b-alert 
            show 
            variant="light" 
            class="float-left my-1"
        >
            Обожаю! Свободна после 18:00 на Арбатской.
        </b-alert>
        
        <b-alert 
            show 
            variant="success" 
            class="float-right my-1"
        >
            Ок. Я как раз в 2 станциях метро буду.
        </b-alert>
        
        <b-col class="w-75 float-right mb-1">
            <img 
                loading="lazy" 
                src="@/assets/icons/Smiles/Влюбленный.png"
            >
        </b-col>
       <div 
            v-for="msg in msges"
            :key="msg.id"
        >
            <b-alert
                show
                v-if="msg.value.length"
                variant="success" 
                class="float-right w-75 mt-2"
            >
                {{ msg.value }}
            </b-alert>
       </div>
    </b-container>

    <b-form-input
        @keypress.enter="addMsg" 
        class="border-success border-0" 
        v-model="msg" 
        placeholder="Введите сообщение ...|"
    ></b-form-input>
    
    <b-container class="d-flex justify-content-between bg-light py-1 mb-5" >
        <div class="cursor-pointer text-dark">
            Прикрепить смайл
        </div>
        <b-form-file 
            v-model="file" 
            plain 
        >
            Прикрепить фото
        </b-form-file>
        <div class="cursor-pointer mb-5 text-dark">
            Отправить
        </div>
    </b-container>
</template>

<script setup>
import { BContainer, BLink, BCard, BRow, BCol, BAlert, BFormInput, /* BFormFile*/ } from "bootstrap-vue";
import { ref } from "vue";
const file = ref('');
const msg = ref('')
const profile = ref([
    { id: 1, delete: true, deleteActive: true, favorite: true, favoriteActive: false, name: 'Марина, 27', finded: 'Вы угадали', yourFound: 'Вас не отгадали', city: 'Москва', msg: '1 новое сообщение в 18:37'},
]);
const msges = ref([
    {
        id: 1,
        value: ''
    }
]);
const addMsg = () => {
    const newMsg = {
        id: Date.now(),
        value: msg.value 
    }
    msges.value.push(newMsg)
    msg.value = ''
};
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