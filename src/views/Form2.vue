<script setup>
    import { ref } from 'vue';
    import router from '../router';

    const info_2 = {
        correo:ref(''),
        contrasena:ref(''),
        confirma_contrasena:ref(''),
        tel:ref(''),
        cel:ref('')
    }

    function anterior(){
        router.push('form1')
    }

    function siguiente(){
        console.log('texto', info_2)
        router.push('form3')
    }

</script>

<template>
    <div class="container mx-auto">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo Electronico</label>
        <input v-model="info_2.correo" type="email" id="correo" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
       
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
        <input v-model="info_2.contrasena" type="password" id="contrasena" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmacion de Contraseña</label>
        <input v-model="info_2.confirma_contrasena" type="text" id="confirma_contrasena" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
       
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
        <input v-model="info_2.tel" type="tel" id="tel" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-4567" pattern="[0-9]{3}-[0-9]{4}" required>
        
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Celular</label>
        <input v-model="info_2.cel" type="tel" id="cel" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
    </div>

    <div class="flex mb-4">        
        <div class="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button @click="anterior" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Anterior</button>
        </div>
        
        <div class="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button @click="siguiente" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Siguiente</button>
        </div>
    </div>
    
</template>