<template>
    <div class="text-white m-5 mt-[128px] md:mt-[150px] lg:ml-[150px]">
        <p id="yangi" class="text-[16px] font-[700] md:text-[21px] md:ml-[104px] lg:ml-[128px]">Our customers' opinions</p>        
        <img src="../../assets/images/speceffect/rounded.png" alt="" class="hidden md:flex absolute lg:w-[54px] md:h-[54px] md:mt-[300px] md:ml-[630px] lg:mt-[400px] lg:ml-[800px]">
        <h2 class="text-[27px] md:text-[36px] lg:text-[61px] font-[900] font-sans mt-[18px] md:ml-[104px] lg:ml-[128px] lg:w-[60%]">Customer Reviews: Hear what our customers have to say</h2>
        <p class="text-[16px] md:text-[21px] mt-[32px] md:ml-[104px] lg:ml-[128px] lg:w-[50%]">Find out what our customers have to say about their experience working with us. Read their testimonials and find out how our solutions have positively impacted their business</p>
    </div>
    <img src="../../assets/images/speceffect/polborder3.png" alt="" class="hidden lg:flex w-[150px] h-[135px] absolute mt-[320px]">
    <div class="mt-[64px] md:mt-[96px] lg:mt-[128px]">
        <ImageCarusel class="md:hidden"/>
        <ImageCaruselTwo class="hidden md:block lg:hidden"/>
        <ImageCaruselThree class="hidden lg:flex"/>
    </div>
</template>

<script setup>
    import ImageCarusel from './ImageCarusel.vue';
    import ImageCaruselTwo from './ImageCaruselTwo.vue';
    import ImageCaruselThree from './ImageCaruselThree.vue';
</script>

<style lang="scss" scoped>
    #yangi{
        background: var(--Gradient, linear-gradient(269deg, rgba(28, 31, 229, 0.68) -13.91%, rgba(54, 197, 158, 0.90) 107.18%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>