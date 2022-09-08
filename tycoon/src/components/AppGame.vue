<template>
    <div id="game">
        <AppNav @changePage="changePage" />
        <Transition name="slide" mode="out-in">
            <component :user="user" :upgradeLvl="upgradeLvl" @buyUpgrade="buyUpgrade($event)" :intervalTime="intervalTime" @makeMoney="makeMoney" :is="window"></component>
        </Transition>
    </div>
</template>

<script>
import AppNav from './AppNav.vue';
import AppUpgrade from './AppUpgrade.vue';
import AppEarn from './AppEarn.vue';

export default {
    name: 'AppGame',
    data() {
        return {
            page: 0,
            window: 'AppEarn',
        }
    },
    props: {
        user: String,
        intervalTime: Number,
        upgradeLvl: Object,
    },
    methods: {
        buyUpgrade(upgrade) {
            this.$emit('buy-upgrade', upgrade);
        },
        makeMoney() {
            this.$emit('make-money');
        },
        changePage(page) {
            switch (page) {
                case 0:
                    this.window = 'AppEarn';
                    break;
                case 1:
                    this.window = 'AppUpgrade';
                    break;
                case 2:
                    this.window = 'AppShop';
                    break;
                case 3:
                    this.window = 'AppSettings';
                    break;
                default:
                    this.window = 'AppEarn';
            }
        }
    },
    components: {
        AppNav,
        AppEarn,
        AppUpgrade
    }
}
</script>

<style lang="scss">
$primary-color: #2F3E46;
$secondary-color: #354F52;
$tertiary-color: #52796F;
$quaternary-color: #84A98C;
$quinary-color: #CAD2C5;
$success-color: #2ECC71;
$warning-color: #FFDC00;
$danger-color: #FF4136;

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s;
}

.slide-leave-to {
    transform: translateX(-400px);
    opacity: 0;
}

.slide-enter-from {
    transform: translateX(400px);
    opacity: 0;
}

#game {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    gap: 1rem;
}


</style>