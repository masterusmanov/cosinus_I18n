<template>
    <section>
        <div class="container mx-auto">
            <PortfolioOne/>
            <img src="../../assets/images/speceffect/polborder3.png" alt="" class="hidden md:flex absolute w-[100px] h-[103px] lg:w-[160px] lg:h-[165px] mt-[1030px] ml-[450px] lg:mt-[650px] lg:ml-[1000px] 2xl:mt-[700px] 2xl:ml-[1150px]">
            <img src="../../assets/images/speceffect/rounded.png" alt="" class="hidden lg:flex absolute w-[64px] h-[64px] mt-[1300px] ml-[]">
            <PortfolioCard/>
            <PortfolioTwo/>
        </div>
    </section>
</template>

<script setup>
    import PortfolioOne from '../../components/PortfolioOne/PortfolioOne.vue';
    import PortfolioCard from '../../components/PortfolioOne/PortfolioCard.vue';
    import PortfolioTwo from '../../components/PortfolioOne/PortfolioTwo.vue';
</script>

<style lang="scss" scoped>

</style>