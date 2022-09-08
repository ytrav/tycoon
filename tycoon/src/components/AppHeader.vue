<template>
    <header>
        <h2>Tycoon.io</h2> <span>{{ dollars }} dollars</span> <span>{{ gold }} gold</span> <h3 @click="save">Save</h3> <h3 @click="load" id="load">Load</h3>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        dollars: Number,
        gold: Number
    },
    methods: {
        save() {
            //emit save event
            this.$emit('save');
        },
        load() {
            //emit load event
            this.$emit('load');
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
$success-color: #2ECC71;
$warning-color: #FFDC00;
$danger-color: #FF4136;

header {
    font-family: 'Comfortaa', cursive;
    background-color: $tertiary-color;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
}
h3 {
    cursor: pointer;
    &:hover {
        color: $quinary-color;
    }
    &:active {
        color: $quaternary-color;
    }
}
</style>