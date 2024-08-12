<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

const router = useRouter()
router.options.history = createWebHashHistory()
</script>