<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <RouterLink :to="{ name: 'home' }">
                <a class="navbar-brand" href="#">
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"
                        class="d-inline-block align-text-top">
                    CanchaClara
                </a>
            </RouterLink>
            <span class="navbar-text">
                Navbar text with an inline element
            </span>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped></style>