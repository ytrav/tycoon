<template>
    <div id="menu">
        <div id="menu-title">
            <h1>Tycoon.io</h1>
        </div>
        <div id="buttons">
            <button v-if="gameStarted" @click="execute('continue')">Continue</button>
            <!-- <button v-for="(button,idx) in buttons" :key="idx" @click="execute(button.action)">{{ button.text }}</button> -->
            <button @click="execute('newGame')">New Game</button>
            <Label for="menuFile">Load Game</Label>
            <input type="file" id="menuFile" placeholder="Load save file" @change="loadFile" />
            <button @click="execute('settings')">Settings</button>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        gameStarted: Boolean,
    },
    name: 'AppMainMenu',
    methods: {
        execute(action) {
            this.$emit('menuExecute', action);
        },
        loadFile() {
            let file = document.getElementById('menuFile').files[0];
            this.$emit('menuLoadFile', file);
            document.getElementById('menuFile').value = '';
            // this.$emit('menuLoadFile');
        }
    },
    data() {
        return {
            buttons: [
                {
                    text: 'New Game',
                    action: 'newGame',
                },
                {
                    text: 'Load Game',
                    action: 'loadGame',
                },
                {
                    text: 'Settings',
                    action: 'settings',
                }
            ]
        }
    },
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

#menu {
    display: flex;
    height: 100vh;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

h1 {
    font-size: 3rem;
    color: $primary-color;
    font-family: 'Comfortaa', cursive;
    color: #fff;
}

#buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

button,
label {
    background-color: $quinary-color;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    font-family: 'Comfortaa', cursive;
    cursor: pointer;

    &:hover {
        background-color: darken($quinary-color, 10%);
    }
}

#menuFile {
    display: none;
}
</style>