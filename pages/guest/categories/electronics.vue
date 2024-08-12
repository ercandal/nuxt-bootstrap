<template>
    <div>
        <NuxtLink to="/" class="btn btn-primary">Anasayfa</NuxtLink>
        
        <nav aria-label="breadcrumb" class="mt-5">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Kategoriler</a></li>
                <li class="breadcrumb-item"><a href="#">Elektronik</a></li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    generate: {
    fallback: '404.html'
  },
}
</script>

<style></style>