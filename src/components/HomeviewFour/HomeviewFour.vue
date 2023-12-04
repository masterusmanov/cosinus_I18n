<template>
    <div class="text-white m-5 mt-[68px] md:mt-[150px] lg:ml-[150px]">
        <p id="yangi" class="text-[16px] font-[700] md:text-[21px] md:ml-[104px] lg:ml-[128px]">Our working procedure</p>
        <h2 class="text-[27px] md:text-[36px] lg:text-[61px] font-[900] font-sans mt-[18px] md:ml-[104px] lg:ml-[128px] lg:w-[60%]">The Innovation Journey: From Concept to Implementation</h2>
        <p class="text-[16px] md:text-[21px] mt-[32px] md:ml-[104px] lg:ml-[128px] lg:w-[50%]">IT outsourcing companies offer different services based on the needs of their clients.</p>
    </div>
    <img src="../../assets/images/speceffect/polborder.png" alt="" class="hidden md:flex absolute w-[150px] h-[135px] mb-[20px] ml-[500px] lg:ml-[1000px] lg:mt-[15px] 2xl:ml-[1250px] 2xl:mt-[15px]">
    <img src="../../assets//images/speceffect/Shape.png" alt="" class="hidden lg:flex absolute lg:ml-[900px] lg:mt-[850px] 2xl:ml-[1175px]">
    <div class="mt-[64px] md:mt-[110px] lg:mt-[128px]">
        <HomeviewCarusel class="md:hidden"/>
        <HomeviewCaruselTwo class="hidden md:block lg:hidden"/>
        <HomeviewCaruselThree class="hidden lg:flex"/>
    </div>
</template>

<script setup>
    import HomeviewCarusel from './HomeviewCarusel.vue'
    import HomeviewCaruselTwo from './HomeviewCaruselTwo.vue'
    import HomeviewCaruselThree from './HomeviewCaruselThree.vue'
</script>

<style lang="scss" scoped>
    #yangi{
        background: var(--Gradient, linear-gradient(269deg, rgba(28, 31, 229, 0.68) -13.91%, rgba(54, 197, 158, 0.90) 107.18%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>