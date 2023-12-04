<template>
    <section>
        <div class="container mx-auto">
            <ServicesOne/>
            <img src="../../assets/images/speceffect/rounded.png" alt="" class="hidden md:flex absolute w-[64px] h-[64px] mt-[690px] ml-[600px] lg:mt-[360px] lg:ml-[1100px] 2xl:ml-[1300px]">
            <img src="../../assets/images/speceffect/polborder2.png" alt="" class="hidden lg:flex absolute w-[120px] h-[124px] 2xl:w-[150px] 2xl:h-[154px] mt-[1050px] ml-[] 2xl:ml-[]">
            <ServicesCard class="mt-[120px] relative"/>
            <div class="mt-[64px] md:mt-[76px] lg:mt-[64px] ">
                <div class="w-[295px] h-[46px] md:h-[60px] bg-gradient-to-r from-[#34BCA2] to-[#1A16E9] p-0.5 rounded-lg mx-auto my-[25px]">
                    <button class="w-full h-[42px] md:h-[55px] bg-[#171B3F] hover:bg-[#171B4F] py-2 rounded-lg text-white text-[16px] md:text-[21px] flex justify-center items-center gap-6">See all
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.0306 9.53068L12.5306 17.0307C12.4609 17.1004 12.3782 17.1557 12.2871 17.1935C12.1961 17.2312 12.0985 17.2506 11.9999 17.2506C11.9014 17.2506 11.8038 17.2312 11.7127 17.1935C11.6217 17.1557 11.539 17.1004 11.4693 17.0307L3.9693 9.53068C3.82857 9.38995 3.74951 9.19907 3.74951 9.00005C3.74951 8.80103 3.82857 8.61016 3.9693 8.46943C4.11003 8.32869 4.30091 8.24963 4.49993 8.24963C4.69895 8.24963 4.88982 8.32869 5.03055 8.46943L11.9999 15.4397L18.9693 8.46943C19.039 8.39974 19.1217 8.34447 19.2128 8.30676C19.3038 8.26904 19.4014 8.24963 19.4999 8.24963C19.5985 8.24963 19.6961 8.26904 19.7871 8.30676C19.8781 8.34447 19.9609 8.39974 20.0306 8.46943C20.1002 8.53911 20.1555 8.62183 20.1932 8.71288C20.2309 8.80392 20.2503 8.9015 20.2503 9.00005C20.2503 9.0986 20.2309 9.19618 20.1932 9.28722C20.1555 9.37827 20.1002 9.46099 20.0306 9.53068Z" fill="#F1F1F1"/>
                            </svg>
                    </button>
                </div>
            </div>
            <ServicesTwo/>
        </div>
    </section>
</template>

<script setup>
    import ServicesOne from '../../components/ServicesOne/ServicesOne.vue';
    import ServicesCard from '../../components/ServicesOne/ServicesCard.vue';
    import ServicesTwo from '../../components/ServicesOne/ServicesTwo.vue'
</script>

<style lang="scss" scoped>

</style>