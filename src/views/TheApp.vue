<template>
    <b-container class="h-100">
        <b-row 
            ref="body"
            class="d-flex position-relative the-app justify-content-between h-100"
            :class="{active : onScrollActive}"
        >
            <router-view></router-view>
            <the-navbar></the-navbar>
        </b-row>
    </b-container>
</template>

<script setup>
import { BContainer, BRow } from 'bootstrap-vue';
import TheNavbar from '@/components/TheNavbar.vue';
</script>

<style lang="scss" scoped>
.the-app{
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    & {
      -ms-overflow-style: none;
      scrollbar-width: none; 
    }
    
}
</style>