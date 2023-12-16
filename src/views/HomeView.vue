<script setup>
  import HomeviewOne from '../components/Homeviews/HomeviewOne.vue';
  import HomeviewOnes from '../components/Homeviews/HomeviewOnes.vue';
  import HomeviewTwo from '../components/HomeviewTwo/HoemviewTwo.vue'
  import HomeviewThree from '../components/HomeviewThree/HomeviewThree.vue'
  import HomeviewFour from '../components/HomeviewFour/HomeviewFour.vue';
  import HomeviewFive from '../components/HomeviewFive/HomeviewFive.vue';
</script>

<template>
  <section id="main" class="relative">  
    <div class="container mx-auto">
      <HomeviewOne/>
      <SpecEffect/>
      <p class="text-[21px] text-center text-white font-[500] mt-[120px] md:mt-[176px] lg:mt-[260px] font-Satoshi">{{$t('translation.homeview.four')}}</p>
    </div>
    <div class="container mx-auto">
      <HomeviewOnes class="mt-[50px]"/>
      <HomeviewTwo class=""/>
      <HomeviewThree/>
      <HomeviewFour/>
      <HomeviewFive class="lg:mt-[200px]"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>