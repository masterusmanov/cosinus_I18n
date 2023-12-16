<template>
    <div id="default-carousel" class="relative w-full font-Satoshi" data-carousel="slide">
        <div class="relative h-[350px] overflow-hidden rounded-lg">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[98%] h-[280px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[275px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="flex items-center gap-4 pl-4 pt-4">
                            <img src="../../assets//images/imageCarusel/1.png" alt="icon" class="w-[44px] h-[44px] md:mx-0 md:ml-2 md:mt-2 lg:ml-[24px] lg:mt-[24px]">
                            <div class="text-white">
                                <h2 class="text-[16px] font-[700]">{{$t('translation.homeviewthree.card.one.one')}}</h2>
                                <p class="text-[12px]">{{$t('translation.homeviewthree.card.one.two')}}</p>
                            </div>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-4">{{$t('translation.homeviewthree.card.one.three')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[98%] h-[280px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[275px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="flex items-center gap-4 pl-3 pt-3">
                            <img src="../../assets//images/imageCarusel/2.png" alt="icon" class="w-[44px] h-[44px] md:mx-0 md:ml-2 md:mt-2 lg:ml-[24px] lg:mt-[24px]">
                            <div class="text-white">
                                <h2 class="text-[16px] font-[700]">{{$t('translation.homeviewthree.card.two.one')}}</h2>
                                <p class="text-[12px]">{{$t('translation.homeviewthree.card.two.two')}}</p>
                            </div>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-6">{{$t('translation.homeviewthree.card.two.three')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[98%] h-[280px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[275px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="flex items-center gap-4 pl-3 pt-3">
                            <img src="../../assets//images/imageCarusel/3.png" alt="icon" class="w-[44px] h-[44px] md:mx-0 md:ml-2 md:mt-2 lg:ml-[24px] lg:mt-[24px]">
                            <div class="text-white">
                                <h2 class="text-[16px] font-[700]">{{$t('translation.homeviewthree.card.three.one')}}</h2>
                                <p class="text-[12px]">{{$t('translation.homeviewthree.card.three.two')}}</p>
                            </div>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-6">{{$t('translation.homeviewthree.card.three.three')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { initFlowbite } from 'flowbite'
</script>

<style lang="scss" scoped>
    #card{
        background: #171B3F;
        backdrop-filter: blur(24px);
        opacity: 0.80;
    }
</style>