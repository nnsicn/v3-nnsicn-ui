<template>
    <vForm :global-dsv="globalDsv"></vForm>
</template>

<script setup lang="ts">
import vForm from "./formDesigner/index.vue"
import {ref} from "vue"
components:{vForm}
let globalDsv = ref({
        testApiHost: 'http://www.test.com/api',
        testPort: 8080,
      })
</script>

<style scoped>

</style>