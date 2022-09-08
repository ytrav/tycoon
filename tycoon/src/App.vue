<template>
  <AppHeader @save="saveProgress" @load="load" :dollars="formattedDollars" :gold="gold" />
  <AppGame @buyUpgrade="buyUpgrade($event)" :intervalTime="intervalTime" @makeMoney="madeMoney" :user="user"
    :upgradeLvl="upgradeLvl" />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppGame from './components/AppGame.vue';
import { saveAs } from 'file-saver';

export default {
  name: 'App',
  data() {
    return {
      user: 'ytrav',
      dollars: 0,
      gold: 0,
      multiplier: 1,
      intervalTime: 500,
      formattedDollars: 0,
      upgradeLvl: {
        up1: 1,
        up2: 1,
        up3: 1,
      },
      secCode: '',
    }
  },
  methods: {
    buyUpgrade(upgrade) {
      // alert('You bought upgrade ' + upgrade);
      // check which upgrade was bought
      switch (upgrade) {
        case '1':
          // upgrade 1
          if (this.dollars >= 30) {
            this.dollars -= 30;
            this.multiplier *= 2;
          } else {
            alert('You don\'t have enough money!');
          }
          break;
        case '2':
          // upgrade 2
          if (this.dollars >= 20) {
            this.dollars -= 20;
            this.intervalTime -= 100;
          } else {
            alert('You don\'t have enough money!');
          }
          break;
        case '3':
          // upgrade 3
          if (this.dollars >= 30) {
            this.dollars -= 30;
            this.gold += 1;
          } else {
            alert('You don\'t have enough money!');
          }
          break;
        default:
          // do nothing
          break;
      }
    },
    saveProgress() {
      this.secCode = this.dollars + this.gold + this.multiplier + 1000 + this.intervalTime + this.upgradeLvl.up1 + this.upgradeLvl.up2 + this.upgradeLvl.up3;
      const data = {
        user: this.user,
        dollars: this.dollars,
        gold: this.gold,
        multiplier: this.multiplier,
        intervalTime: this.intervalTime,
        upgradeLvl: this.upgradeLvl,
        secCode: this.secCode,
      }
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      saveAs(blob, 'save.tsf');
    },
    load() {
      // open explorer to select file
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.tsf';
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        if (data.secCode === data.dollars + data.gold + data.multiplier + 1000 + data.intervalTime + data.upgradeLvl.up1 + data.upgradeLvl.up2 + data.upgradeLvl.up3) {
          this.user = data.user;
          this.dollars = data.dollars;
          this.gold = data.gold;
          this.multiplier = data.multiplier;
          this.intervalTime = data.intervalTime;
          this.upgradeLvl = data.upgradeLvl;
        } else {
          alert('Invalid save file!');
        }
      }
      // reader.readAsText(file);
    },
    madeMoney() {
      this.dollars += 1 * this.multiplier;
      // shorten the number to show K if over a thousand and M if over a million and B if over a billion and T if over a trillion and Q if over a quadrillion
      if (this.dollars >= 1000000000000000) {
        this.formattedDollars = (this.dollars / 1000000000000000).toFixed(1) + 'Q';
      } else if (this.dollars >= 1000000000000) {
        this.formattedDollars = (this.dollars / 1000000000000).toFixed(1) + 'T';
      } else if (this.dollars >= 1000000000) {
        this.formattedDollars = (this.dollars / 1000000000).toFixed(1) + 'B';
      } else if (this.dollars >= 1000000) {
        this.formattedDollars = (this.dollars / 1000000).toFixed(1) + 'M';
      } else if (this.dollars >= 1000) {
        this.formattedDollars = (this.dollars / 1000).toFixed(1) + 'K';
      } else {
        this.formattedDollars = this.dollars;
      }
      if (this.dollars === 20) {
        //
      }
    }
  },
  components: {
    AppHeader,
    AppGame,

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

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {

  background-color: $quaternary-color;
}
</style>
