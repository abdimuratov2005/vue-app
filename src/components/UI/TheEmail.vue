<template>
    <div>
        <b-form-input 
            class="rounded py-4 text-center" 
            placeholder="example@mail.ru" 
            v-model="email" 
            :state="validEmail"
            id="feedback-user"
        >
        </b-form-input>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { BFormInput } from "bootstrap-vue";
const email = ref('');
const validEmail = computed(() => email.value.length > 4 && (/.+@.+\..+/.test(email.value)))

</script>

<style lang="scss">

</style>