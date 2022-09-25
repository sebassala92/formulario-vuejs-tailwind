<script setup>
    import { ref } from 'vue';
    import router from '../router';
    
    const info_1 = {
        pais:ref(''),
        genero:ref(''),
        primer_nombre:ref(''),
        segundo_nombre:ref(''),
        fecha_nacimiento:ref(''),
        tipo_documento:ref(''),
        num_documento:ref(''),
        foto_doc_frente:ref(''),
        foto_doc_rev:ref('')
    }

    function siguiente(){
        console.log('texto', info_1)
        router.push('form2')
    }

</script>

<template>
    <div class="container mx-auto">

        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Seleccionar pais</label>
        <select v-model="info_1.pais" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Escoja un país</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select>


        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Genero</label>
        <select v-model="info_1.genero" id="generos" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Genero</option>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="O">Otro</option>
        </select>   


        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Primer Nombre</label>
        <input v-model="info_1.primer_nombre" type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sebastian" required>
        
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Segundo Nombre</label>
        <input v-model="info_1.segundo_nombre" type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="salazar" required>

            
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha Nacimiento</label>
        <input v-model="info_1.fecha_nacimiento" type="date" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo de Documento</label>
        <select v-model="info_1.tipo_documento" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Tipo de documento</option>
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="PAS">Pasaporte</option>
            <option value="CE">Cédula de Extranjería</option>
        </select>       

        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numero de Documento</label>
        <input v-model="info_1.num_documento" type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         
        <label class="block text-sm font-medium text-gray-700">Foto Delantera Documento</label>
        <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div>

        <label class="block text-sm font-medium text-gray-700">Foto Reverso Documento</label>
        <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div>
    </div>

    <div class="flex mb-4">
        <div class="w-1/3"></div>
        <div class="bg-gray-50 w-1/3 px-4 py-3 text-center sm:px-6">
            <button @click="siguiente" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Siguiente</button>
        </div>
        <div class="w-1/3"></div>
    </div>

</template>