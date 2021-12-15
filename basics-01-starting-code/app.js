const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'We will learn React!',
            courseGoalB: '<h2>We will learn Vue!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoals(){
            const randomNumber = Math.random();
            if(randomNumber<0.5)
            return this.courseGoalA;
            else
            return this.courseGoalB;
        }
    },
});


app.mount('#user-goal');