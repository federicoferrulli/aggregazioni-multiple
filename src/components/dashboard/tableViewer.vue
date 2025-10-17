<template>
    <div class="xl:mx-4 xl:my-6 card xl:rounded-3xl">
        <div class="p-4">
            <DataTable paginator size="small" rows="20" :value="events">
                <Column v-for="col of columnEvents" :key="col.field" :field="col.field" :header="col.header"></Column>
            </DataTable>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import EventsService from "@/services/events.service.js";


const isLoading = ref(false);
const events = ref([]);
const columnEvents = ref([])


</script>
<style scoped>
    .card{
        background-color: var(--p-primary-contrast-color);
    }
</style>