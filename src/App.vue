<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';

const layouts = shallowRef({
  DefaultLayout
});

const route = useRoute();

const layoutComponent = computed(() => {
    const layoutName = route.meta.layout;
    return layouts.value[layoutName] || DefaultLayout;
});
</script>