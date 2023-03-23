<template>
    <b-navbar class="mt-1 w-100" toggleable="lg" type="dark" variant="info">
        <b-navbar-nav class="flex-row">
            <b-nav-item
                v-for="item in navItems" 
                :key="item.id"
            >
                <b-link :to="item.path" class="text-decoration-none text-white">
                    <img width="40" :src="item.icon">
                    {{ item.item }}
                </b-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script setup>
import { BNavbar, BNavbarNav, BNavItem, BLink } from 'bootstrap-vue';
import itemIcon1 from '@/assets/icons/arownd-item.png'
import itemIcon2 from '@/assets/icons/game-item.png'
import itemIcon3 from '@/assets/icons/dialog-item.png'
import itemIcon4 from '@/assets/icons/history-item.png'
import itemIcon5 from '@/assets/icons/settings-item.png'
import { ref } from 'vue';
const navItems = ref([
    { id: 1, path: '/theApp/vokrug', icon: itemIcon1, item: 'Вокруг' },
    { id: 2, path: '/theApp/igra', icon: itemIcon2, item: 'Игра' },
    { id: 3, path: '/theApp/dialog', icon: itemIcon3, item: 'Диалоги' },
    { id: 4, path: '/theApp/history', icon: itemIcon4, item: 'История' },
    { id: 5, path: '/theApp/settings', icon: itemIcon5, item: 'Настройки' }
])
</script>

<style lang="scss">
.navbar{
    z-index: 1200;
    overflow: hidden;
    background: linear-gradient(45deg, #59be86, #339860);
    padding: 0;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    max-width: 379.5px;
}

.nav-item{
    text-align: center;
    &:not(:last-child){
        margin: 0px 5px 0px 0px;
    }
}
</style>