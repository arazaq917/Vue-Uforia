const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Abdul",
          phone: '03451065152',
          email: "a@gmail.com",
        },
        {
          id: "Moiz",
          name: "Abdul Razzaq",
          phone: '065152',
          email: "ab@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click = "toggleDetails">
    {{detailsVisible ? 'Hide' : 'Show'}}  Details</button>
    <ul v-if = "detailsVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "Moiz",
        name: "Abdul Razzaq",
        phone: '065152',
        email: "ab@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
