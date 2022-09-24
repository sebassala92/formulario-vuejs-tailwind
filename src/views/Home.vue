<script>
    import { ref } from 'vue';
    import router from '../router';

    function siguiente(){
        console.log('texto', info)
        router.push('form2')
    }
</script>

<template>
    <div class="contenedor">
        <h1 class="titulo text-2xl">FORMULARIO PRUEBA TECNICA</h1>
    </div>

    <div class="bg-gray-50 px-4 py-3 text-left sm:px-6">
        <button @click="siguiente" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Comenzar</button>
    </div>
</template>