<template>
  <Transition name="fade">
    <div id="popup-darkbg" v-if="showPopup"></div>
  </Transition>
  <Transition name="popup">
    <AppDialogWindow v-if="showPopup" :title="title" :message="message" :buttons="buttons" :input="inputBox"
      :inputText="inputText" @input="input($event)" :inputBoxValue="inputBoxValue" @close="close" @save="saveProgress"
      @saveFile="save" @startNew="startNew" @startNewGame="startNewGame" @loadFile="loadFile"
      @saveNameInput="saveNameInput" />
  </Transition>
  <Transition name="head-slide">
    <AppHeader :gameActive="gameActive" v-if="gameActive" @mainMenu="goToMainMenu" @save="saveDialog" @load="load($event)"
      :dollars="formattedDollars" :gold="gold" />
  </Transition>
  <Transition name="switch" mode="out-in">
    <component :upgrades="upgrades" :gameStarted="gameStarted" @menuExecute="menuExecute($event)" :is="currentScreen"
      @buyUpgrade="buyUpgrade($event)" :intervalTime="intervalTime" @makeMoney="madeMoney" :user="user" />
  </Transition>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppGame from './components/AppGame.vue';
import AppMainMenu from './components/AppMainMenu.vue';
import AppDialogWindow from './components/AppDialogWindow.vue';
import { saveAs } from 'file-saver';

export default {
  name: 'App',
  data() {
    return {
      showPopup: false,
      gameActive: false,
      gameStarted: false,
      inputBox: false,
      currentScreen: 'AppMainMenu',
      user: '',
      inputValue: '',
      dollars: 0,
      gold: 0,
      multiplier: 1,
      intervalTime: 500,
      formattedDollars: 0,
      secCode: '',
      title: '',
      message: '',
      buttons: [],
      dataReact: {},
      fileName: '',
      inputBoxValue: '',
      upgrades: [
        {
          name: 'Bigger earnings',
          description: 'Make more money per click!',
          cost: 30,
          lvl: 1,
        },
        {
          name: 'Faster earnings',
          description: 'Make money faster!',
          cost: 20,
          lvl: 1,
        },
        {
          name: 'Buy gold',
          description: 'Exchange dollars for gold!',
          cost: 30,
          lvl: 1,
        }
      ]
    }
  },
  created() {
    // if localstorage gameStarted is true, set gameStarted to true
    if (localStorage.getItem('gameStarted') === 'true') {
      this.gameStarted = true;
    }
    if (localStorage.getItem('user') && localStorage.getItem('dollars') && localStorage.getItem('gold') && localStorage.getItem('multiplier') && localStorage.getItem('intervalTime') && localStorage.getItem('upgrades')) {
      this.user = localStorage.getItem('user');
      this.dollars = parseInt(localStorage.getItem('dollars'));
      this.gold = parseInt(localStorage.getItem('gold'));
      this.multiplier = parseInt(localStorage.getItem('multiplier'));
      this.intervalTime = parseInt(localStorage.getItem('intervalTime'));
      this.upgrades = JSON.parse(localStorage.getItem('upgrades'));
    }
    this.displayMoney();
    setInterval(() => {
      this.localStrg();
    }, 1000);
  },
  methods: {
    input(text) {
      this.inputValue = text;
    },
    startNew() {
      // set all values to default
      // make popup ask for name
      // hide popup wait 2 seconds and show
      this.showPopup = false;
      //wait 2 seconds and show popup
      setTimeout(() => {
        this.showPopup = true;
      }, 450);
      this.title = 'New Game';
      this.message = 'Please enter your name:';
      this.inputBox = true;
      this.inputText = 'John Doe';
      this.buttons = [
        {
          text: 'Start',
          action: 'startNewGame',
          styleClass: 'success',
        },
      ];
      // this.showPopup = false;
      this.user = '';

    },
    startNewGame() {
      // if user input is not empty, start new game
      if (this.inputValue !== '') {
        this.inputBox = false;
        this.showPopup = false;
        this.dollars = 0;
        this.formattedDollars = 0;
        this.gold = 0;
        this.multiplier = 1;
        this.intervalTime = 500;
        this.upgrades = [
          {
            name: 'Bigger earnings',
            description: 'Make more money per click!',
            cost: 30,
            lvl: 1,
          },
          {
            name: 'Faster earnings',
            description: 'Make money faster!',
            cost: 20,
            lvl: 1,
          },
          {
            name: 'Buy gold',
            description: 'Exchange dollars for gold!',
            cost: 30,
            lvl: 1,
          }
        ];
        this.gameStarted = true;
        localStorage.setItem('gameStarted', true);
        this.gameActive = true;
        this.currentScreen = 'AppGame';
        this.user = this.inputValue;
      }
    },
    goToMainMenu() {
      this.currentScreen = 'AppMainMenu';
      this.gameActive = false;
    },
    menuExecute(menu) {
      // switch statement with newGame, continue, loadGame, settings
      switch (menu) {
        case 'newGame':
          // call popup and ask if user wants to start a new game
          this.showPopup = true;
          this.title = 'New Game';
          this.message = 'Are you sure you want to start a new game? Your current progress will be lost.';
          this.buttons = [
            {
              text: 'Cancel',
              action: 'close',
              styleClass: 'success'
            },
            {
              text: 'Yes',
              action: 'startNew',
              styleClass: 'warning'
            },
          ];
          break;
        case 'continue':
          this.currentScreen = 'AppGame';
          this.gameActive = true;
          break;
        case 'loadGame':
          //
          break;
        case 'settings':
          //
          break;
        default:
          break;
      }

    },
    localStrg() {
      // save everything to local storage
      localStorage.setItem('user', this.user);
      localStorage.setItem('dollars', this.dollars);
      localStorage.setItem('gold', this.gold);
      localStorage.setItem('multiplier', this.multiplier);
      localStorage.setItem('intervalTime', this.intervalTime);
      localStorage.setItem('upgrades', JSON.stringify(this.upgrades));
    },
    buyUpgrade(upgrade) {
      // alert('You bought upgrade ' + upgrade);
      // check which upgrade was bought
      // alert('You bought upgrade ' + upgrade.number);
      switch (upgrade.number) {
        case 0:
          // upgrade 1
          if (this.dollars >= upgrade.cost) {
            this.upgrades[0].cost = upgrade.cost;
            this.dollars -= this.upgrades[0].cost;
            this.upgrades[0].cost = this.upgrades[0].cost * 2;
            this.multiplier *= 2;
            this.upgrades[0].lvl++;
            this.displayMoney();
          } else {
            this.notEnoughMoney(0);
          }
          break;
        case 1:
          // upgrade 2
          if (this.dollars >= upgrade.cost) {
            this.upgrades[1].cost = upgrade.cost;
            this.dollars -= this.upgrades[1].cost;
            this.upgrades[1].cost = this.upgrades[1].cost * 2;
            this.intervalTime -= 100;
            this.upgrades[1].lvl++;
            this.displayMoney();
          } else {
            this.notEnoughMoney(1);
          }
          break;
        case 2:
          // upgrade 3
          if (this.dollars >= upgrade.cost) {
            this.upgrades[2].cost = upgrade.cost;
            this.dollars -= this.upgrades[2].cost;
            this.gold += 1;
            this.upgrades[2].lvl++;
            this.displayMoney();
          } else {
            this.notEnoughMoney(2);
          }
          break;
        default:
          // do nothing
          break;
      }
    },
    notEnoughMoney(number) {
      this.showPopup = true;
      this.title = 'Not enough money';
      this.message = `You need $${this.upgrades[number].cost} to buy this upgrade. You only have $${this.dollars}.`;
      this.buttons = [
        {
          text: 'Ok',
          action: 'close',
          styleClass: 'success'
        },
      ];
    },
    saveDialog() {
      this.showPopup = true;
      this.title = 'Save Progress';
      this.message = 'Do you want to save your progress?';
      this.buttons = [
        {
          text: 'Cancel',
          action: 'close',
          styleClass: 'danger',
        },
        {
          text: 'Save',
          action: 'save',
          styleClass: 'success important',
        },
      ];
    },
    close() {
      this.inputBox = false;
      this.showPopup = false;
    },
    saveProgress() {
      this.showPopup = false;
      setTimeout(() => {
        this.showPopup = true;
      }, 450);
      this.title = 'Save Progress';
      this.message = 'Please name your save:';
      this.inputBox = true;
      this.inputText = 'file-name.json';
      this.inputBoxValue = this.fileName;
      this.buttons = [
        {
          text: 'Save',
          action: 'saveFile',
          styleClass: 'success',
        },
      ];

    },
    saveNameInput() {
      this.fileName = this.inputBoxValue;
      alert(this.fileName);
    },
    save() {
      this.showPopup = false;
      const date = new Date();
      const dateTime = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '-' + date.getHours() + '-' + date.getMinutes();
      this.fileName = `save-${this.user}-${dateTime}.json`;
      this.secCode = this.dollars + this.gold * 2 + this.multiplier + 2453 - this.intervalTime - this.upgrades[0].cost + 14 + this.upgrades[0].lvl + this.upgrades[1].cost + this.upgrades[1].lvl + this.upgrades[2].cost + this.upgrades[2].lvl;
      const data = {
        user: this.user,
        dollars: this.dollars,
        gold: this.gold,
        multiplier: this.multiplier,
        intervalTime: this.intervalTime,
        upgrades: this.upgrades,
        secCode: this.secCode,
      }

      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      saveAs(blob, this.fileName);
    },
    load(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        if (data.secCode === data.dollars + data.gold * 2 + data.multiplier + 2453 - data.intervalTime - data.upgrades[0].cost + 14 + data.upgrades[0].lvl + data.upgrades[1].cost + data.upgrades[1].lvl + data.upgrades[2].cost + data.upgrades[2].lvl) {
          // ask if user wants to load
          this.dataReact = data;
          this.showPopup = true;
          this.title = 'Load Save File';
          this.message = 'Do you want to load a save file? Your current progress will be lost.';
          this.buttons = [
            {
              text: 'Cancel',
              action: 'close',
              styleClass: 'danger',
            },
            {
              text: 'Load',
              action: 'loadFile',
              styleClass: 'warning important',
            },
          ];
        } else {
          // call popup with error message
          this.showPopup = true;
          this.title = 'Error';
          this.message = 'The file you are trying to load is corrupted or might be modified. Please try again.';
          this.buttons = [
            {
              text: 'OK',
              action: 'close',
              styleClass: 'success',
            },
          ];
        }
      }
      reader.readAsText(file);
    },
    loadFile() {
      this.showPopup = false;
      this.user = this.dataReact.user;
      this.dollars = this.dataReact.dollars;
      this.gold = this.dataReact.gold;
      this.multiplier = this.dataReact.multiplier;
      this.intervalTime = this.dataReact.intervalTime;
      this.upgrades = this.dataReact.upgrades;
      this.displayMoney();
    },
    displayMoney() {
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
      this.localStrg();
    },
    madeMoney() {
      this.dollars += 1 * this.multiplier;
      this.displayMoney();
    },

  },
  components: {
    AppHeader,
    AppGame,
    AppMainMenu,
    AppDialogWindow,
  }
}
</script>

<style lang="scss">
$primary-color: #2F3E46;
$secondary-color: #354F52;
$tertiary-color: #52796F;
$quaternary-color: #84A98C;
$quinary-color: #CAD2C5;
$success-color: #155f35;
$warning-color: #635500;
$danger-color: #952620;

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
  transition: all .3s;
}

.popup-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.popup-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.switch-enter-active,
.switch-leave-active {
  transition: all .2s;
}

.switch-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.head-slide-enter-active,
.head-slide-leave-active {
  transition: all .2s;
}

.head-slide-enter-from,
.head-slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

#popup #popup-inner #buttons button.normal {
  background-color: $primary-color;
  color: #fff;

  &:hover {
    background-color: $secondary-color;

  }
}

#popup #popup-inner #buttons button.success {
  // background-color: $success-color;
  // color: #fff;
  // &:hover {
  //   background-color: darken($success-color, 10%);
  // }
  color: $success-color;
  background-color: rgba($success-color, 0.1);

  &:hover {
    color: darken($success-color, 10%);
    background-color: rgba($success-color, 0.2);
  }
}

#popup #popup-inner #buttons button.danger {
  color: $danger-color;
  // make background color danger color with 10% opacity
  background-color: rgba($danger-color, 0.1);

  &:hover {
    color: darken($danger-color, 10%);
    background-color: rgba($danger-color, 0.2);
  }
}

#popup #popup-inner #buttons button.warning {
  color: $warning-color;
  background-color: rgba($warning-color, 0.1);

  &:hover {
    color: darken($warning-color, 10%);
    background-color: rgba($warning-color, 0.2);
  }
}

#popup #popup-inner #buttons button.important {
  font-weight: 600;
}

#popup-darkbg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

#app {

  background-color: $quaternary-color;
}
</style>
