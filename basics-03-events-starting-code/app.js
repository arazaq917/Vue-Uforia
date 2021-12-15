const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName:'',
      // fullName: "",
    };
  },
  watch: {
    counter(value){
      if(value>50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000);
      }
    }
  //   name(value) {
  //     if (value === "") {
  //       return (this.fullName = "");
  //     } else {
  //       this.fullName = value + " " + this.lastName;
  //     }
  //   },
  //   lastName(value){
  //     if (value === "") {
  //       return (this.fullName = "");
  //     } else {
  //       this.fullName = this.name + " " + value;
  //     }
  //   }
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    submitForm() {
      alert("Form Submitted");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    // setFullName() {
    //   console.log("I am Runing....");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Suleman";
    // },
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
