<template>
    <div class="app-upgrade window">
        <div v-for="(upgrade,idx) in upgrades" :key="idx" class="upgrade">
            <h3>{{idx}}. {{ upgrade.name }}</h3>
            <p>{{ upgrade.description }}</p>
            <p>Cost: {{ upgrade.cost }} dollars</p>
            <button @click="buyUpgrade(idx)">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppUpgrade',
    props: {
        upgrade: Object
    },
    data() {
        return {
            upgrades: {
                1: {
                    name: 'Bigger earnings',
                    description: 'Make more money per click!',
                    cost: 30,
                },
                2: {
                    name: 'Faster earnings',
                    description: 'Make money faster!',
                    cost: 20,
                },
                3: {
                    name: 'Upgrade 3',
                    description: 'This is the third upgrade',
                    cost: 30,
                }
            }
        }
    },
    methods: {
        buyUpgrade(number) {
            this.$emit('buy-upgrade', number);
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

button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    background-color: $quaternary-color;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: $primary-color;
    // transition: all 0.1s ease-in-out;

    &:hover {
        background-color: $tertiary-color;
    }

    &:active {
        background-color: $secondary-color;
    }
}
</style>