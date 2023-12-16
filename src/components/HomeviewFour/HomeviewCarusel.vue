<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-[300px] overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[100%] h-[274px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[269px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="grid justify-center items-center gap-4 pt-4 ">
                            <div class="w-[60px] bg-gradient-to-r from-[#36C59E] to-[#1C1FE5] p-0.5 rounded-full mx-auto">
                                <div class="bg-[#171B3F] py-2 rounded-full text-white">
                                    <h1 class="text-center text-[24px]">1</h1>
                                </div>
                            </div>
                            <h2 class="text-white text-[16px] font-[700] text-center">{{$t('translation.homeviewfour.card.one.one')}}</h2>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-4">{{$t('translation.homeviewfour.card.one.two')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[100%] h-[274px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[269px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="grid justify-center items-center gap-4 pt-4">
                            <div class="w-[60px] bg-gradient-to-r from-[#36C59E] to-[#1C1FE5] p-0.5 rounded-full mx-auto">
                                <div class="bg-[#171B3F] py-2 rounded-full text-white">
                                    <h1 class="text-center text-[24px]">2</h1>
                                </div>
                            </div>
                            <h2 class="text-white text-[16px] font-[700] text-center">{{$t('translation.homeviewfour.card.two.one')}}</h2>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-4">{{$t('translation.homeviewfour.card.one.two')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[100%] h-[274px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[269px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="grid justify-center items-center gap-4 pt-4">
                            <div class="w-[60px] bg-gradient-to-r from-[#36C59E] to-[#1C1FE5] p-0.5 rounded-full mx-auto">
                                <div class="bg-[#171B3F] py-2 rounded-full text-white">
                                    <h1 class="text-center text-[24px]">3</h1>
                                </div>
                            </div>
                            <h2 class="text-white text-[16px] font-[700] text-center">{{$t('translation.homeviewfour.card.three.one')}}</h2>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-4">{{$t('translation.homeviewfour.card.three.two')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[100%] h-[274px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[269px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="grid justify-center items-center gap-4 pt-4">
                            <div class="w-[60px] bg-gradient-to-r from-[#36C59E] to-[#1C1FE5] p-0.5 rounded-full mx-auto">
                                <div class="bg-[#171B3F] py-2 rounded-full text-white">
                                    <h1 class="text-center text-[24px]">4</h1>
                                </div>
                            </div>
                            <h2 class="text-white text-[16px] font-[700] text-center">{{$t('translation.homeviewfour.card.four.one')}}</h2>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-4">{{$t('translation.homeviewfour.card.four.two')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="w-[100%] h-[274px] mx-auto rounded-[16px] bg-gradient-to-t from-[#242B3D] to-[#999FB0] p-0.5">
                    <div class="h-[269px] rounded-[16px] bg-[#171B3F] opacity-90">
                        <div class="grid justify-center items-center gap-4 pt-4">
                            <div class="w-[60px] bg-gradient-to-r from-[#36C59E] to-[#1C1FE5] p-0.5 rounded-full mx-auto">
                                <div class="bg-[#171B3F] py-2 rounded-full text-white">
                                    <h1 class="text-center text-[24px]">5</h1>
                                </div>
                            </div>
                            <h2 class="text-white text-[16px] font-[700] text-center">{{$t('translation.homeviewfour.card.five.one')}}</h2>
                        </div>
                        <div class="text-white mt-[24px]">
                            <p class="text-[16px] px-4">{{$t('translation.homeviewfour.card.five.two')}}</p>
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
   
</style>