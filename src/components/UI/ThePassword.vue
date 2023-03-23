<template>
    <b-form-input 
        type="password" 
        v-model="password" 
        placeholder="Введите свой пароль"
        class="rounded signup_password mt-3 text-center" 
        :state="validPassword" 
        id="text-password"
        aria-describedby="password-help-block"
    ></b-form-input>
</template>

<script setup>
import { BFormInput } from "bootstrap-vue";
import { computed, ref } from "vue";
const password = ref('');
const validPassword = computed(() => password.value.length > 8 && password.value.length < 16)

</script>

<style lang="scss"></style>