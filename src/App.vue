<template>
  <div class="app">
    <the-body>
      <the-header></the-header>
      <router-view></router-view>
    </the-body>
  </div>
</template>

<script setup>
import TheBody from '@/components/UI/TheBody.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<style lang="scss">
.app {
  max-width: 100%;
  display: flex;
  background: url(@/assets/img/backgrounds/bg.webp)  no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #000;
  user-select: none;
}
</style>