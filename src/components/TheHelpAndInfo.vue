<template>
    <div class="d-flex flex-column">
        <b-link
            :to="btn.path"
            class="text-decoration-none data__continue"
            v-for="btn in btns"
            :key="btn.id"    
        >
            <b-button
                size="lg" variant="primary" 
                type="submit"
                class="text-start mb-2 button rounded"
                block
            >
                <span class="text-center">{{ btn.value }}</span>
                <img class="arrowIcon" src="@/assets/icons/linkExternal.png">
            </b-button>
        </b-link>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { BLink } from 'bootstrap-vue';
const btns = ref([
    { id: 1, value: 'Помощь и поддержка', path: 'support' },
    { id: 2, value: 'Правила сообщества', path: 'useInfo' },
    { id: 3, value: 'Политика конфиденциальности', path: 'useInfo' },
    { id: 4, value: 'Условия обслуживания', path: 'useInfo' },
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
.arrowIcon {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 88%;
}
</style>