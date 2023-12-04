<template>
    <div class="container mx-auto">
        <div class="md:flex justify-between items-center mt-[150px] md:mt-[178px] gap-6">
            <div class="flex justify-between gap-[57px]">
                <div>
                    <img src="../assets/images/Cosinus.svg" alt="" class="lg:w-[94] h-[48px]">
                </div>
                <div class="grid md:flex text-[15px] text-white items-center text-right gap-2 md:gap-7 lg:text-[21px] lg:ml-[370px] 2xl:ml-[650px]">
                    <router-link to="/services">Services</router-link>
                    <router-link to="/portfolio">Portfolio</router-link>
                    <router-link to="/about">About Us</router-link>
                    <router-link to="/bogla">Connection</router-link>
                </div>
            </div>
            <div class="flex justify-between items-center gap-6 md:gap-4 text-white font-[500] font-sans px-2 mt-[64px] md:mt-0 md:border-l-4 border-white">
                <a href="https://t.me/cosinussupport_bot"><i class='bx bxl-telegram text-[32px] md:ml-6'></i></a>
                <a href="https://www.instagram.com/cosinus_uz/?igshid=MzRlODBiNWFlZA%3D%3D"><i class='bx bxl-instagram-alt text-[32px]' ></i></a>
                <a href="https://www.facebook.com/people/Cosinus-Uz/pfbid02RQjLHub4Me22QRv313zPfxwEruCF5F35RZjeEuc1vbjvAfbB4Ynbtj9f5o1b3fpgl/?mibextid=LQQJ4d"><i class='bx bxl-facebook-circle text-[32px]'></i></a>
                <a href="https://www.youtube.com/@cosinus_uz"><i class='bx bxl-youtube text-[32px]' ></i></a>
            </div>
        </div>
        <div class="text-white w-[100%] mx-auto mt-[40px] border-t-2 border-white mb-2 md:mb-5">
            <h2 class="text-center w-[80%] mx-auto mt-[24px] md:mx-0 md:text-left">© {{new Date().getFullYear()}} Cosine IT. All rights reserved</h2>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>