function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startAgain() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addlogMess('Player', 'Attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addlogMess('Monster', 'Attack', attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addlogMess('Player', 'Attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addlogMess('Player', 'Heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addlogMess(who, what, howMuch) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: howMuch,
      });
    },
  },
});
app.mount("#game");
