<template>
    <div id="popup" @click="close">
        <div id="popup-inner" @click.stop>
            <h2>{{ title }}</h2>
            <p>{{ message }}</p>
            <input autofocus type="name" v-if="input" :placeholder="inputText" v-model="popupInputValue" ref="input">
            <div id="buttons">
                <button :class="button.styleClass" v-for="(button,idx) in buttons" :key="idx"
                    @click="execute(button.action)">{{ button.text }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDialogWindow',
    props: {
        title: String,
        message: String,
        buttons: Array,
        input: Boolean,
        inputText: String,
    },
    data() {
        return {
            popupInputValue: '',
        }
    },
    methods: {
        execute(action) {
            if (action === 'startNewGame') {
                this.usernameInput();
            }
            this.$emit(action);
        },
        usernameInput() {
            this.$emit('input', this.popupInputValue);
        },
        close() {
            this.$emit('close');
        },
        save() {
            this.$emit('save');
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

* {
    font-family: 'Rubik', sans-serif;
}

h2 {
    font-size: 1.5rem;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid $primary-color;
    border-radius: 0.25rem;
    margin-top: 1rem;
}

#popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 101;

    #popup-inner {
        background-color: white;
        padding: 1rem;
        border-radius: 0.5rem;

        h2 {
            margin: 0;
        }

        p {
            margin: 0;
        }

        #buttons {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 1rem;

            button {
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 0.5rem;
                background-color: $primary-color;
                color: white;
                cursor: pointer;

                &:hover {
                    background-color: $secondary-color;
                }
            }
        }
    }
}
</style>