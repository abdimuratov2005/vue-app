<template>
    <header
        class="header"
    >
        <img
            loading="lazy"
            class="sidebar" 
            src="@/assets/icons/status-bar.png"
        >   
    </header>
</template>

<style lang="scss">
.header {
    min-width: 379.5px;
    background: #282526;
    padding: 5px;
    position: fixed;
    top: 0;
    z-index: 1111;
    @media (max-width: 375px){
        width: 100%;
    }
    img{
        float: right;
    }
    &.active{
        position: fixed;
    }
    .sidebar{
        width: 100px;        
    }
}
</style>