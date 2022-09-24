<script setup>
    import { ref } from 'vue';
    import router from '../router';

    const info = {
        direccion:ref(''),
        codigo_postal:ref('')
    }

    function anterior(){
        console.log('texto', info)
        router.push('form2')
    }

    function terminar(){
        console.log('texto', info)
        router.push('final')
    }
</script>

<template>
    <div class="container mx-auto">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numero de Documento</label>
        <input v-model="info.num_documento" type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
       
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Foto Delantera Documento</label>
        <input v-model="info.foto_doc_frente" type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>

    <div class="flex mb-4">        
        <div class="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button @click="anterior" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Anterior</button>
        </div>
        
        <div class="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button @click="terminar" type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Terminar</button>
        </div>
    </div>
</template>