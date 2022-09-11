<template>
    <div class="app-upgrade window">
        <div v-for="(upgrade,idx) in upgrades" :key="idx" class="upgrade">
            <h3>{{ upgrade.name }} - level {{ upgrade.lvl }}</h3>
            <p>{{ upgrade.description }}</p>
            <p class="cost">{{ upgrade.cost }} dollars</p>
            <button @click="buyUpgrade(idx)">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppUpgrade',
    props: {
        upgrades: Array,
    },
    data() {
        return {}
    },
    methods: {
        buyUpgrade(number) {
            // this.upgrades[number].lvl++;
            // this.upgrades[number].cost *= 2;
            // emit upgrade number and cost
            this.$emit('buy-upgrade', { number, cost: this.upgrades[number].cost });
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

.window {
    width: 100%;
    max-width: 700px;
    height: 100%;
    max-height: 500px;
    background-color: $quinary-color;
    padding: 1rem;
    border-radius: 1rem;
    font-family: 'Rubik', sans-serif;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: center;

    h2 {
        font-size: 1.5rem;
        font-weight: 500;
    }
}

.upgrade {
    background-color: $tertiary-color;
    padding: 1rem;
    border-radius: 1rem;
    // make height and width of each upgrade the same
    width: 100%;
    max-width: 300px;
    flex: 1 1 1;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    align-items: space-between;
    color: #fff;

    .cost {
        font-size: 1.2rem;
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