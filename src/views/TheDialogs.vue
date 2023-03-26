<template>
    <b-container>
        <b-row class="my-5">
            <div class="d-flex w-100 align-items-center navMenu justify-content-between">
                <b-col
                    v-for="btn in btnMenu"
                    :key="btn.id"
                    :class="{active : isActiveID === btn.id}" 
                    @click="changeBtn(btn.id)"
                >
                    {{ btn.value }}
                </b-col>
            </div>
        </b-row>

        <hr class="bg-success">

        <div class="mb-5">
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
                            <b-link
                                to="chat"
                                class="text-success text-decoration-none"
                            >
                                {{ user.name }}
                            </b-link>
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
                                    @click="removeUser(user)"
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
                <hr class="bg-success">
            </b-card>
        </div>
        <div v-if="profile.length == 0">
            <h3 class="text-center">
                Тут пока никого нет...
            </h3>

            <hr class="bg-success">

            <b-link 
                to="igra" 
                class="text-decoration-none w-100 px-4"
            >
                <the-button
                    block
                    class="text-center rounded my-5"
                >
                    <span class="text-center">
                        Играть
                    </span>
                    <img
                        class="arrowIcon" 
                        src="@/assets/icons/arrow.png"
                    >
                </the-button>
            </b-link>
        </div>
    </b-container>
</template>

<script setup>
import { BContainer, 
        BCol, 
        BRow, 
        BCard, 
        BLink 
} from 'bootstrap-vue';
import { ref } from 'vue';
import TheButton from '@/components/UI/TheButton.vue';
const isActiveID = ref(1);

const btnMenu = ref([
    { id: 1, value: 'Всё' },
    { id: 2, value: 'Чаты' },
    { id: 3, value: 'Избранное' },
]);
const profile = ref([
    { id: 1, delete: true, deleteActive: true, favorite: true, favoriteActive: false, name: 'Марина, 27', finded: 'Вы угадали', yourFound: 'Вас не отгадали', city: 'Москва', msg: '1 новое сообщение в 18:37'},
    { id: 2, delete: false, deleteActive: false, favorite: true, favoriteActive: true, name: 'Марина, 27', finded: 'Вы не угадали', yourFound: 'Вас отгадали', city: 'Москва', msg: '1 новое сообщение в 18:37' },
    { id: 3, delete: true, deleteActive: false, favorite: true, favoriteActive: false, name: 'Марина, 27', finded: 'Вы угадали', yourFound: 'Вас не отгадали', city: 'Москва', msg: '1 новое сообщение в 18:37' },
]);
const changeBtn = (id) => {
    isActiveID.value = id
    // =============================================================================//
    if (id === 1 ){
        if (profile.value[0]){
            profile.value[0].deleteActive = true
            profile.value[0].delete = true
            profile.value[0].favorite = true
            profile.value[0].favoriteActive = false
        }

        if(profile.value[1]){
            profile.value[1].deleteActive = false
            profile.value[1].delete = false
            profile.value[1].favorite = true
            profile.value[1].favoriteActive = true
        }

        if (profile.value[2]){
            profile.value[2].deleteActive = false
            profile.value[2].delete = true
            profile.value[2].favorite = true
            profile.value[2].favoriteActive = false
        }
    }
    // =============================================================================//
    if (id === 2){
        if (profile.value[0]) {
            profile.value[0].delete = true
            profile.value[0].deleteActive = false
            profile.value[0].favorite = true
            profile.value[0].favoriteActive = false
        }

        if (profile.value[1]){
            profile.value[1].delete = false
            profile.value[1].deleteActive = false
            profile.value[1].favorite = true
            profile.value[1].favoriteActive = true
        }

        if (profile.value[2]){
            profile.value[2].delete = true
            profile.value[2].deleteActive = false
            profile.value[2].favorite = true
            profile.value[2].favoriteActive = true
        }
    }
    // =============================================================================//
    if ( id === 3 ) {
        if (profile.value[0]){
            profile.value[0].delete = false
            profile.value[0].deleteActive = false
            profile.value[0].favorite = true
            profile.value[0].favoriteActive = true
        }
        if(profile.value[1]){
            profile.value[1].delete = false
            profile.value[1].deleteActive = false
            profile.value[1].favorite = true
            profile.value[1].favoriteActive = true
        }
        
        if (profile.value[2]){
            profile.value[2].delete = false
            profile.value[2].deleteActive = false
            profile.value[2].favorite = true
            profile.value[2].favoriteActive = true
        }
    }
    // =============================================================================//
};
const removeUser = ( user ) => {
    profile.value = profile.value.filter(u => u.id !== user.id)
}
</script>

<style lang="scss" scoped>
.navMenu{
    background: white;
    border-radius: 20px;
}
.card_body{
    background: inherit;
    border: none;
}
.object-fit-cover{
    object-fit: cover;
    min-width: 100px;
}
.cursor-pointer{
    cursor: pointer;
}
.col{
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
</style>