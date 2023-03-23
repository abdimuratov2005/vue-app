<template>
    <b-button size="lg" class="button" variant="primary">
        <slot></slot>
    </b-button>
</template>

<script setup>
import { BButton } from 'bootstrap-vue'
</script>

<style lang="scss">
.button {
    color: #fff;
    padding: 15px 35px;
    text-align: start;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 95px 0px rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, #59be86, #339860);
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
</style>