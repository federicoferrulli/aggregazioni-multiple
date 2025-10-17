<template>
    <div class="xl:mx-4 xl:my-6 card xl:rounded-3xl">
        <div class="p-4">
            <div class="flex justify-between items-center p-4 flex-wrap gap-4">
                <div class="flex items-center gap-4 flex-wrap">
                    <span class="font-semibold">Aggrega per:</span>
                    <div v-for="check of checkAggregateFields" :key="check.field" class="flex items-center">
                        <Checkbox v-model="selectedAggregateFields" :inputId="check.field" :name="check.field" :value="check.field" />
                        <label :for="check.field" class="ml-2">{{ check.header }}</label>
                    </div>
                </div>
                <Button icon="pi pi-refresh" @click="getEvents" :loading="isLoading" />
            </div>

            <DataTable v-if="events.length > 0" class="p-4" paginator size="small" rows="20" :value="events">
                <Column v-for="col of columnEvents" :key="col.field" :field="col.field" :header="col.header">
                   <template #body="slotProps">
                        {{parseOutput(slotProps.data[col.field])}}
                    </template>
                </Column>
            </DataTable>
            <div v-else-if="isLoading">
                <Skeleton height="30rem"></Skeleton>
            </div>
            <div v-else-if="isInError">
                <div class="flex flex-col items-center justify-center gap-4 p-4">
                    <i class="pi pi-exclamation-triangle text-orange-500" style="font-size: 5rem"></i>
                    <span class="text-orange-100 text-xl font-semibold">Something went wrong, retry later!</span>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { toFirstUC, parseOutput } from "@/libs/functions.js"
import EventsService from "@/services/events.service.js";

const isLoading = ref(false);
const isInError = ref(false);

const events = ref([]);
const columnEvents = ref([])
const selectedAggregateFields = ref([]);

const checkAggregateFields = ref([
    { field: 'p', header: 'Projects' },
    { field: 'e', header: 'Employees' },
    { field: 'd', header: 'Date' },
]);


async function getEvents(){
    isLoading.value = true;
    isInError.value = false;
    events.value = [];
    columnEvents.value = [];
    try {
        const query = {}
        if(selectedAggregateFields.value.length > 0){
            query.aggr = selectedAggregateFields.value.join('');
        }       
        const results = await EventsService.getEvents({query})
        events.value = results;
        columnEvents.value = Object.keys(results[0]).map(elem=> {
            return {
                field: elem,
                header: toFirstUC(elem),
                key: elem
            }
        });
    } catch (e) {
        console.error(e)
        isInError.value = true;
    }finally{
        isLoading.value = false;
    }
} 


onMounted(async ()=>{
   await getEvents();
})

watch(selectedAggregateFields, () => {
    getEvents();
}, { deep: true });

</script>
<style scoped>
    .card{
        background-color: var(--p-primary-contrast-color);
    }
</style>