<template>
    <header>
        <h2 @click="mainMenu">Tycoon.io</h2> <span>{{ dollars }} dollars</span> <span>{{ gold }} gold</span> <h3 @click="save">Save</h3> <h3 @click="load" id="load">Load</h3> <Transition name="input">
            <input type="file" id="file" v-if="loadVisible" @change="loadFile" />
        </Transition>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            loadVisible: true,
        }
    },
    props: {
        dollars: Number,
        gold: Number,
        gameActive: Boolean,
    },
    methods: {
        mainMenu() {
            this.$emit('main-menu');
        },
        save() {
            //emit save event
            this.$emit('save');
        },
        load() {
            // toggle loadVisible
            this.loadVisible = !this.loadVisible;
        },
        loadFile() {
            //get file
            let file = document.getElementById('file').files[0];
            //emit load event
            this.$emit('load', file);
            // clear file input
            document.getElementById('file').value = '';
            this.loadVisible = false;
        },
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

.input-enter-active, .input-leave-active {
    transition: all 0.3s;
}

.input-enter-from, .input-leave-to {
    // move the element out of the screen
    // leaving the space for it
    opacity: 0;
    transform: translateX(200px);
}

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
h2 {
    cursor: pointer;
    &:hover {
        color: $quinary-color;
    }
    &:active {
        color: $quaternary-color;
    }
}

input {
    padding: 0.5rem;
}
</style>