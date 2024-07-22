<template >
    <section class=" ">
        <div class="container md:mx-auto py-5">
            <h1 class="md:text-4xl text-2xl text-slate-200 font-bold text-center">App Pembayaran SPP</h1>
            <div class="flex lg:flex-row flex-col-reverse my-10 items-center">
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 text-slate-300 font-bold">Tampilan Login</h2>
                </div>
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/loginSpp.svg" class="min-w-full shadow-md rounded-3xl" alt="" srcset="">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/dashboard.svg" class="min-w-full  shadow-md rounded-3xl" alt="" srcset="">
                </div>
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Dashboard</h2>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col-reverse my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Data Petugas</h2>
                    <p class="lg:text-lg text-md font-medium lg:mt-3">Dengan Fitur CRUD sederhana</p>
                </div>
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/daPet.svg" class="min-w-full shadow-md rounded-3xl" alt="" srcset="">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/dashboard.svg" class="min-w-full  shadow-md rounded-3xl" alt="" srcset="">
                </div>
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Dashboard</h2>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col-reverse my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Data Petugas</h2>
                    <p class="lg:text-lg text-md font-medium lg:mt-3">Dengan Fitur CRUD sederhana</p>
                </div>
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/daPet.svg" class="min-w-full shadow-md rounded-3xl" alt="" srcset="">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/history.svg" class="min-w-full  shadow-md rounded-3xl" alt="" srcset="">
                </div>
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Hisroty Admin</h2>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col-reverse my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Dashboard Petugas</h2>
                    <p class="lg:text-lg text-md font-medium lg:mt-3">Fitur petugas lebih sedikit dibanding fitur admin</p>
                </div>
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/petDas.svg" class="min-w-full shadow-md rounded-3xl" alt="" srcset="">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/entri.svg" class="min-w-full  shadow-md rounded-3xl" alt="" srcset="">
                </div>
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan Data Entri</h2>
                    <p class="lg:text-lg text-md font-medium lg:mt-3">Salah satu fitur yang terdapat di admin juga</p>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col-reverse my-10 lg:mt-32 items-center">
                <div class="lg:w-1/2 w-2/2 text-center justify-center">
                    <h2 class="lg:text-3xl text-xl lg:mt-0 mt-3 font-bold text-slate-200">Tampilan History Pembayaran Siswa</h2>
                    <p class="lg:text-lg text-md font-medium lg:mt-3">Fitur role siswa hanya dapat melihat history</p>
                </div>
                <div class="lg:w-1/2 " data-aos="zoom-in">
                    <img src="../../assets/spp/fiSiswa.svg" class="min-w-full shadow-md rounded-3xl" alt="" srcset="">
                </div>
            </div>
            <div class="flex justify-end my-10">
                <a href="/">
                    <Button varian="primary" class="transition-all duration-200 hover:-translate-x-2"><i class="fa-solid fa-chevron-left fa-md"></i><i class="fa-solid fa-chevron-left hover:s fa-md"></i> Back</Button>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Button from "@/components/button/Button.vue"
export default {
    components:{
        Button,
    }

}
</script>
