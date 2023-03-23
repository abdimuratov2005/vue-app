<template>
    <div class="ml-3">
        <b-col>
            <img loading="lazy" class="around-user-img" src="@/assets/img/vokrug-user.webp">
        </b-col>
        <b-col>
            <img loading="lazy" class="around-user-img" src="@/assets/img/vokrug-user.webp">
        </b-col>
    </div>
    <b-col>
        <img loading="lazy" class="around-user-img-big" src="@/assets/img/vokrug-user.webp">
        <div class="d-flex justify-content-center position-relative">
            <b-card no-body class="overflow-hidden around-card">
                <b-row no-gutters class="card_body">
                    <b-col md="12" class="ml-4 card-info">
                        <h6 class="card-name my-0 mt-2 text-success">Моё имя, 28</h6>
                        <p class="card-work my-0 mb-2">Работаю в Корпорация<br> Москва, знакомлюсь</p>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </b-col>
    <div class="w-100 mb-5 px-3 advancedSearch" v-if="advancedSearch == false">
        <b-link class="text-decoration-none" @click="advancedSearch = true">
            <the-button block class="text-center rounded">
                <span class="text-center">Расширенный пойск</span>
                <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
    </div>
    <div class="mb-5" v-if="advancedSearch">
        <b-row class="ml-3" v-for="item in allUsersVokrug" :key="item.id">
            <b-col class="position-relative users-img">
                <img loading="lazy" class="user-img" :src="item.src">
                <div class="user-lastDate" v-if="item.lastDate">
                    <h5>23:59</h5>
                    <p>До порытки</p>
                </div>
            </b-col>
            <b-col class="position-relative users-img">
                <img loading="lazy" class="user-img" :src="item.src">
            </b-col>
            <b-col class="position-relative users-img">
                <img class="user-img" :src="item.src">
                <div class="user-dialog" v-if="item.dialog">
                    <img loading="lazy" width="50" src="@/assets/img/Диалоги.png">
                    <h5>99+</h5>
                    <p>Переписки</p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script setup>
import { BCol, BCard, BRow } from 'bootstrap-vue';
import vokrugPhoto from "@/assets/img/vokrug-user.webp"
import TheButton from '@/components/UI/TheButton.vue';
import { ref } from 'vue';
const advancedSearch = ref(false)
const allUsersVokrug = ref([
    { id: 1, src: vokrugPhoto, lastDate: true, dialog: true },
    { id: 2, src: vokrugPhoto },
    
])
</script>

<style lang="scss" scoped>
.around-user-img {
    width: 117px;
}
.arrowIcon{
    left: 22%;
}
.advancedSearch{
    margin: 250px 0px 0px 0px;
    position: relative;
    bottom: 50px;
}
.users-img{
    &::before{
        top: 5px;
        left: 0px;
        z-index: 110;
        width: 117px;
        transition: 1s ease background;
        height: 149px;
        position: absolute;
        content: '';
        cursor: pointer;
        background: #6dc6957e;
    }
    &:hover::before{
        background: #ff99007d;
    }
}
.user-img {
    width: 117px;
}
.user-lastDate{
    text-align: center;
    position: absolute;
    left: 15%;
    color: #fff;
    bottom: 0;
}
.user-dialog{
    text-align: center;
    position: absolute;
    left: 15%;
    color: #fff;
    bottom: 0;
    img{
        position: absolute;
        left: 15%;
        bottom: 35px;
        z-index: 1;
    }
    h5{
        z-index: 101;
        font-size: 15px;
        position: relative;
        color: #000;
        top: -3px;
    }
}
.luminosity {
  background-color: coral;
  background-blend-mode: luminosity;
  }
.around-user-img-big {
    width: 237px;
    height: 305px;
}

.col {
    background: inherit;
    margin: 0 5px 0 0;
    padding: 5px 0;
    &:hover {
        background: inherit;
    }
}
.around-card{
    position: absolute;
    bottom: 5px;
    width: 80%;
    right: 30px;
}
.card-icons{
    display: none;
}
.card-name{
    margin: 0;
}
.card-info{
    width: 100%;
}
</style>