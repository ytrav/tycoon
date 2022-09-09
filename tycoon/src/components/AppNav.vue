<template>
    <nav>
        <span @click="changePage(idx)" v-for="(link,idx) in nav" :key="idx">{{ link.name }}</span>
    </nav>
</template>

<script>
export default {
    name: 'AppNav',
    methods: {
        changePage(idx) {
            this.$emit('change-page', idx);
        }
    },
    data() {
        return {
            nav: [
                {
                    name: 'Earn',
                },
                {
                    name: 'Upgrade',
                },
                {
                    name: 'Shop',
                },
                {
                    name: 'Settings',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #2F3E46;
$secondary-color: #354F52;
$tertiary-color: #52796F;
$quaternary-color: #84A98C;
$quinary-color: #CAD2C5;
$success-color: #155f35;
$warning-color: #635500;
$danger-color: #952620;

nav {
    display: flex;
    font-family: 'Comfortaa', cursive;
    justify-content: center;
    align-items: center;
    background-color: $quinary-color;
    border-radius: 1rem;
    overflow: hidden;
}

span {
    cursor: pointer;
    height: 100%;
    padding: 1rem;
    &:hover {
        color: #fff;
        background-color: $tertiary-color;
    }
}
</style>