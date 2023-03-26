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

<style lang="scss" scoped>
.signup_password{
    box-shadow: 0px 0px 95px 0px rgba(0, 0, 0, 0.2);
}
</style>