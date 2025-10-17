<template>
  <div class="default-layout"> 
    <main class="main-content">
      <slot>
        <RouterView></RouterView>
      </slot> 
    </main>

    </div>
</template>

<script setup>
</script>

<style scoped>
    .default-layout{
      width: 100%;
      height: 100%;
    }
    .main-content{
      width: 100%;
      height: 100%;
    }
</style>