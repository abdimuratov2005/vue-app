<template>
    <div
        v-for="item in myGame"
        :key="item.id"
    >
        <div class="mt-3 ml-3">
            {{ item.title }}
            <a 
                href="#" 
                class="text-dark text-decoration-none w-100 text-nowrap"
                v-if="item.edit"
                :style="item.activeEdit"
                >
                {{ item.edit }}
            </a>
        </div>
        <b-row 
            class="mx-1 row-profile"
            :style="item.style"
            >
            <b-link
                class="b-link"
                v-if="item.path"
                :to="item.path"
            >
                <b-col
                    v-if="item.pictureFirst"
                    class="col-profile"
                >
                    <img
                        loading="lazy"
                        :src="item.pictureFirst"
                        class="pictureMyGame"
                    >
                </b-col>
            </b-link>

            <b-link
                v-if="item.path"
                :to="item.path"
                class="b-link"
            >
                <b-col
                    class="col-profile"
                >
                    <img
                        loading="lazy"
                        :src="item.pictureSecond"
                        class="pictureMyGame"
                    >
                </b-col>
            </b-link>
            
            <b-link
                v-if="item.path"
                :to="item.path"
                class="b-link"
            >
                <b-col
                    v-if="item.pictureThird"    
                    class="col-profile"
                >
                    <img
                        loading="lazy"
                        :src="item.pictureThird"
                        class="pictureMyGame"
                    >
                </b-col>
            </b-link>
        </b-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { BRow, BCol, BLink } from 'bootstrap-vue';
import picture1 from '@/assets/icons/Smiles/Орущий.png';
import picture2 from '@/assets/img/pivo.png';
import pictureAdd from '@/assets/icons/add-icon.png'
import picture3 from '@/assets/img/spagetti.png';
import picture4 from '@/assets/img/salat.png';
import picture5 from '@/assets/img/drink-1.png';
const myGame = ref([
    { id: 1, pictureFirst:  picture1, disActiveEdit: 'color: red', edit: '| Редактировать', title: 'Смайлы', pictureSecond: pictureAdd, path: 'selectImg'},
    { id: 2, pictureFirst:  picture2, activeEdit: 'color: green', edit: '| Редактировать', title: 'Алкаголь', pictureSecond: pictureAdd, path: 'selectImg'},
    { id: 3, pictureFirst:  picture3, disActiveEdit: 'color: red', edit: '| Редактировать', title: 'Еда', pictureSecond: picture4, pictureThird: pictureAdd, style: 'width: 83%', path: 'selectImg'},
    { id: 4, pictureFirst:  picture5, edit: '| Последнее невозможно удалить', title: 'Безалкогольные напитки', pictureSecond: pictureAdd, path: 'selectImg'},
    { id: 5, pictureSecond: pictureAdd, title: 'Выберите категорию и изображение', style: 'width: 27%;', path: 'selectImg'},
])
</script>

<style lang="scss" scoped>
.pictureMyGame{
    cursor: pointer;
    width: 90px;
    height: 60px;
    height: 55px; 
    object-fit: contain
}
.b-link{
    margin-right: 1.2px;
}
.row-profile{
    width: 55%;
}
.col{
    border-radius: 10px;
    padding: 5px 0;
    margin: 0 0 0 5px;
    background-color: #dedede;
    transition: .5s background-color ease;
    &:hover{
        background-color: #f4f4f4;
    }
    &.active{
        background-color: #59be86;
    }
}   
</style>