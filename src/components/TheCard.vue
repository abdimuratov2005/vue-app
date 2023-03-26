<template>
    <b-card 
        no-body 
        class="overflow-hidden"
    >
    <b-row
        no-gutters 
        class="flex-nowrap card_body justify-content-between"
    >
        <b-col 
            md="6"
            sm="8"
            class="ml-3 card-info"
        >
            <h5 class="card-name my-0 mt-2 text-success">
                Моё имя, 28
                <a href="#" class="text-decoration-none position-absolute text-success ml-1">
                    <sup>Расширить</sup>
                </a>
            </h5>
            <p class="card-work my-0 mb-2">
                Работаю в Корпорация<br> Москва, знакомлюсь
            </p>
        </b-col>
        <b-col 
            md="3" 
            class="mt-2 prem position-relative"
        >
            <img loading="lazy" class="premiume" src="@/assets/icons/premiume.png" width="70">
            <img loading="lazy" src="@/assets/icons/favorute.png" class="favorite">
            <span class="span-text text-white">5</span>
        </b-col>
    </b-row>
    </b-card>
</template>

<script setup>
import {BCard, BRow, BCol} from 'bootstrap-vue'
</script>
<style lang="scss" scoped>
.favorite{
    position: absolute;
    right: 25px;
    width: 50px;
    top: 15px;
}

.span-text{
    position: relative;
    left: -37px;
    top: 2px;
}

@media (max-width: 767.98px){
    .premiume{
    position: relative;
    left: 13px;
}
    .span-text{
        position: relative;
        left: -27px;
    }
}
@media (max-width: 574.98px){
    .prem{
        position: relative;
        left: 65px;
    }
    .favorite{
        position: relative;
        left: -47px;
        top: -0px;    
    }
    .span-text{
        position: relative;
        left: -75px;
    }
}

</style>