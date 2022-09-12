<template>
    <div class="app-upgrade window">
        <div v-for="(upgrade,idx) in upgrades" :key="idx" class="upgrade" @click="buyUpgrade(idx)" :title="`Click to buy ${upgrade.name} level ${upgrade.lvl} for ${upgrade.cost} dollars`">
            <h3>{{ upgrade.name }}</h3>
            <h4>Level {{ upgrade.lvl }}</h4>
            <p>{{ upgrade.description }}</p>
            <p class="cost">{{ upgrade.cost }} dollars</p>
            
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
    cursor: pointer;
    .cost {
        font-size: 1.2rem;
        font-weight: 500;
    }
    background-color: $tertiary-color;
    &:hover {
        background-color: $quaternary-color;
    }
}

button {
    position: relative;
    display: inline-block;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: $primary-color;
    // transition: all 0.1s ease-in-out;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;


    &:active {
        background-color: $secondary-color;
    }
}
</style>