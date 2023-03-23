<template>
    <div class="the-body">
        <div class="the-body__container">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
    .the-body{
        position: relative;
        overflow: hidden;
        z-index: 11111111;
        width: 100%;
        &::-webkit-scrollbar {
            display: none;
        }
        & {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        &__container{
            display: flex;
            width: 380px;
            flex-direction: column;
            margin: 0 auto;
        }
    }

</style>