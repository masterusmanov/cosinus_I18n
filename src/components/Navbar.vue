<template>
    <section id="header" class="headers sticky top-0 z-50">
        <div class="container mx-auto flex justify-beetwen items-center xl:px-4 2xl:px-0">
            <div class="w-[70%] h-[76px] md:pl-3 lg:pl-0 md:h-[88px] xl:h-[92px]  flex items-center gap-[100px]">
                <img src="../assets/images/logo.svg" alt="logo" class="w-[40px] h-[17px] ml-3 md:ml-0 lg:w-[52px] lg:h-[22px]">
                <div class="text-white hidden xl:flex justify-between items-center gap-6">
                    <router-link to="/">{{$t('translation.navbar.one')}}</router-link>
                    <router-link to="/services">{{$t('translation.navbar.two')}}</router-link>
                    <router-link to="/portfolio">{{$t('translation.navbar.three')}}</router-link>
                    <router-link to="/about">{{$t('translation.navbar.four')}}</router-link>
                    <p>Telegram bot</p>
                    <div class="flex items-center gap-1">
                        <p to="/error">Cosinus academy</p>
                        <p id="yangi" class="text-[10px] mb-5 py-0.5 px-1">{{$t('translation.navbar.seven')}}</p>
                    </div>
                </div>
            </div>
            <div class="w-[25%] md:w-[28%] flex justify-end items-center gap-3 text-white">
                <div class="hidden xl:block bg-gradient-to-r from-[#34BCA2] to-[#1A16E9] p-0.5 rounded-lg">
                    <button class=" bg-[#171B3F] px-[24px] py-[12px] rounded-lg no-underline"><router-link to="/bogla" class="">{{$t('translation.navbar.six')}}</router-link></button>
                </div>
                <select id="countries" @change="changeLanguage" class=" bg-[#1A1E41] text-white border-none text-md rounded-lg w-[125px] ">
                    <option  class="hidden" value="til" :selected="selectedLanguage === 'uz'">{{$t('translation.language')}}</option>
                    <option value="uz">O'zbekcha</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="xl:hidden">
                    <i class='bx bx-menu text-[32px] text-white'></i>
                </button>
                    <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden bg-[#171B3F] divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-gray-700">
                    <ul class="py-2 text-[16px] font-Satoshi text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <router-link to="/" class="block px-4 py-2">{{$t('translation.navbar.one')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/services" class="block px-4 py-2">{{$t('translation.navbar.two')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/portfolio" class="block px-4 py-2">{{$t('translation.navbar.three')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="block px-4 py-2">{{$t('translation.navbar.four')}}</router-link>
                        </li>
                        <li>
                            <p class="block px-4 py-2">Telegram bot</p>
                        </li>
                        <li>
                            <p class="block px-4 py-2">Cosinus academy</p>
                        </li>
                        <li>
                            <button class="bg-[#171B3F] px-4 py-2 rounded-lg no-underline"><router-link to="/bogla" class="">{{$t('translation.navbar.six')}}</router-link></button>
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>
    </section>
</template>

<script setup>
    import { initFlowbite } from 'flowbite'
    import { ref, onMounted } from "vue";
    import { useRouter } from "vue-router";
    import { useI18n } from 'vue-i18n';
    const {t} = useI18n({useScope: 'global'})

    function changeLanguage(event) {
        const selectedLanguage = event.target.value;
        console.log(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage)
        window.location.reload()
    }

    
</script>

<style lang="scss" scoped>
    #header{
        background: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(8px);
        font-family: Satoshi;
    }
    #yangi{
        background: var(--Gradient, linear-gradient(269deg, rgba(28, 31, 229, 0.68) -13.91%, rgba(54, 197, 158, 0.90) 107.18%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .router-link-exact-active {
        border-bottom: 2px solid #5C7BDD;
      }
      .router-link-exact-active:hover {
        border-bottom: 2px solid #5C7BDD;
      }
      
</style>