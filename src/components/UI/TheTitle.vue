<template>
    <h1 class="title text-center">
        <slot></slot>
    </h1>
</template>

<script>
</script>

<style lang="scss" scoped>
.title {
    color: #339860;
    font-weight: 700;
    -webkit-text-stroke: #fff;
    -webkit-text-stroke-width: .5px;
    @media (max-width: 375px){
        font-size: 30px;
    }
}
</style>