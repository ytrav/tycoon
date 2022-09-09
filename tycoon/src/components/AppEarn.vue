<template>
    <div class="window">
        <h2>Welcome, {{ user }}</h2>
        <button @mousedown="makeMoney" id="big-button">Make Money</button>
    </div>
</template>

<script>
export default {
    name: 'AppEarn',
    props: {
        user: String,
        intervalTime: Number
    },
    methods: {
        makeMoney() {
            this.$emit('make-money');
            this.interval = setInterval(() => {
                this.$emit('make-money');
            }, this.intervalTime);
            document.addEventListener('mouseup', () => {
                clearInterval(this.interval);
            });
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

.window {
    width: 100%;
    max-width: 700px;
    height: 100%;
    max-height: 500px;
    background-color: $quinary-color;
    padding: 1rem;
    border-radius: 1rem;
    font-family: 'Rubik', sans-serif;

    h2 {
        font-size: 1.5rem;
        font-weight: 500;
    }
}

$pink-shadow: #ffe3e200;

button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;

    &#big-button {
        font-weight: 600;
        color: $primary-color;
        text-transform: uppercase;
        padding: 1.25em 2em;
        background: $quaternary-color;
        border: 2px solid $primary-color;
        border-radius: 0.75em;
        transform-style: preserve-3d;
        transition: transform 70ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);

        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: $tertiary-color;
            border-radius: inherit;
            box-shadow: 0 0 0 2px $primary-color, 0 0.625em 0 0 $pink-shadow;
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 70ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }

        &:hover {
            background: $quinary-color;
            transform: translate(0, 0.25em);

            &::before {
                box-shadow: 0 0 0 2px $primary-color, 0 0.5em 0 0 $pink-shadow;
                transform: translate3d(0, 0.5em, -1em);
            }
        }

        &:active {
            background: $quinary-color;
            transform: translate(0em, 0.75em);

            &::before {
                box-shadow: 0 0 0 2px $primary-color, 0 0 $pink-shadow;
                transform: translate3d(0, 0, -1em);
            }
        }
    }
}
</style>