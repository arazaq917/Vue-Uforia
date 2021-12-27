<template>
  <button @click="login" v-if="!isAuthenticated">Log In</button>
  <button @click="logout" v-if="isAuthenticated">Log Out</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>