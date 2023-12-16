<template>
    <div id="text" class="mt-[40px] md:mt-[90px] lg:mt-[170px] text-center text-white h-screen-hidden relative">
        <h1 class="w-[80%] mx-auto text-[32px] md:text-[36px] lg:text-[61px] font-[800]">{{$t('translation.homeview.one')}}</h1>
        <p class="w-[80%] mx-auto text-[16px] font-[500] mt-[32px] lg:text-[21px]">{{$t('translation.homeview.two')}}</p>
        <div class="hidden md:flex absolute w-full">
            <div class="w-1/2">
                <img src="../../assets/images/speceffect/left.png" alt="speceffect" class="md:w-[120px] md:h-[120px] lg:w-[250px] lg:h-[250px]">
            </div>
            <div class="w-1/3 md:ml-[400px] md:mt-[150px] lg:ml-[500px] lg:mt-[120px] xl:mt-[120px] 2xl:ml-[900px] 2xl:mt-[120px]">
                <img src="../../assets/images/speceffect/right.png" alt="speceffect" class="flex md:w-[120px] md:h-[120px] lg:w-[200px] lg:h-[200px] absolute">
            </div>
        </div>
        <div class="w-[95%] md:w-[430px] mx-auto bg-gradient-to-r from-[#34BCA2] to-[#1A16E9] p-0.5 rounded-lg text-[16px] mt-[64px] md:mt-[80px]">
            <button class="bg-[#171B3F] w-[100%] px-[23px] py-[23px] md:px-[28px] md:py-[16px] rounded-lg font-[700] text-[16px] md:text-[20px]">{{$t('translation.homeview.three')}}</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #light{
        border-radius: 420.114px;
        background: linear-gradient(269deg, rgba(28, 31, 229, 0.34) -13.91%, rgba(54, 197, 158, 0.45) 107.18%);
        filter: blur(150px);
    }
    #text{
        font-family: Satoshi;
    }
</style>