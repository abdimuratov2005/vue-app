<template>
    <div class="d-flex flex-column">
        <b-link
            class="text-decoration-none data__continue"
            v-for="btn in btns"
            :key="btn.id"
            @click="btn.active =! btn.active"
        >
            <b-button
                size="lg" variant="primary" 
                type="submit"
                class="text-start mb-2 d-flex justify-content-between button rounded"
                block
            >
                <span class="text-center">{{ btn.value }}</span>
                <span v-if="btn.active">Включены</span>
                <span v-else>Отключены</span>
            </b-button>
        </b-link>
        <b-link class="text-decoration-none mt-2 data__continue">
            <the-button
                block
                type="submit"
                class="text-center push-save-btn rounded"
            >
                <span class="text-center">Сохранить</span>
                <img loading="lazy" class="arrowIcon" src="@/assets/icons/arrow.png">
            </the-button>
        </b-link>
        
        <the-title class="mt-5 mb-0">
            Приватность
        </the-title>

        <b-link class="text-decoration-none mt-0 mb-5 data__continue">
            <the-button
                block
                type="submit"
                class="text-center push-save-btn remove-anketa rounded"
            >
                <span class="text-center">Отключить анкету</span>
            </the-button>
        </b-link>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TheButton from "@/components/UI/TheButton.vue";
import TheTitle from "@/components/UI/TheTitle.vue";
const btns = ref([
    { id: 1, value: 'Электронная почта', active: true },
    { id: 2, value: 'Push-уведомления', active: false },
])

</script>

<style lang="scss" scoped>
.button {
    color: #000;
    width: 100%;
    text-align: start;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 95px 0px rgba(0, 0, 0, 0.2);
    border: none;
    &:hover {
        background: linear-gradient(45deg, #59be86, #339860);
    }
    &:active,
    &:focus {
        background: linear-gradient(#59be86, #339860);
    }
    &:hover {
        color: #fff;
        background-color: #3cb371;
    }
}
.push-save-btn{
    color: #fff;
    background: linear-gradient(45deg, #59be86, #339860);
}
.remove-anketa{
    margin: 0px 0px 80px 0px;
}
</style>