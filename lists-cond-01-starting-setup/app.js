const app = Vue.createApp({
  data() {
    return {
      enteredGoalVal: '',
      goals: []
    };
  },
  methods: {
    addGoals(){
      return this.goals.push(this.enteredGoalVal);
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
