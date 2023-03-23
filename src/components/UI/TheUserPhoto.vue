<template>
    <div 
        class="b_img" 
    >
        <div class="img">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.img{
    background: url(@/assets/img/no-img.png) no-repeat center;
    max-width: 100vw;
    background-size: contain;
    transition: .5s background ease;
    height: 450px;
}
.b_img{
    &.active{
        transition: .5s background ease;
        background: url(@/assets/img/user-photo.webp) no-repeat center;
        width: 100%;
        height: 60vh;
        background-size: contain;
    }
}
</style>