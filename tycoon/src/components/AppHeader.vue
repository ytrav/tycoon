<template>
    <header>
        <h2 @click="mainMenu">Tycoon.io</h2> <span :title="`Your balance is &#8372;${dollars}`" class="dollars">&#8372;{{ dollars }}</span>
        <span class="gold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M1 22L2.5 17H9.5L11 22H1M13 22L14.5 17H21.5L23 22H13M6 15L7.5 10H14.5L16 15H6M23 6.05L19.14 7.14L18.05 11L16.96 7.14L13.1 6.05L16.96 4.96L18.05 1.1L19.14 4.96L23 6.05Z" />
            </svg> {{ gold }}</span>
        <h3 @click="save">Save</h3>
        <label for="file">
            <h3>Load</h3>
        </label>
        <input type="file" id="file" placeholder="Load save file" @change="loadFile" />
        <!-- <Transition name="input">
            <div class="loadwrap" v-if="loadVisible">
                
            </div>
        </Transition> -->
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

.input-enter-active,
.input-leave-active {
    transition: all 0.3s;
}

.input-enter-from,
.input-leave-to {
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
    // transition: height 0.3s ease-in-out;
}

.dollars {
    // max-width: 150px;
    width: 250px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

svg {
    fill: #fff;
    width: 1.5rem;
    height: 1.5rem;
}

span {
    font-weight: 800;
    font-size: 1.3em;
}


.gold {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        margin-bottom: 4px;
    }
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
    display: none;
}
</style>