<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsVisible">
      <li>
        <strong>Phone: </strong>
        {{ cell }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ emailAddress }}
      </li>
    </ul>
<button @click="$emit('delete',id)">Delete</button>
  </li>
</template>
<script>
export default {
  //   props: ["name", "cell", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cell: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      //   validator: function (value) {
      //     return value == "1" || value == "0";
      //   },
    },
  },

  emits: ["favorite-friend"],
  //   emits: {
  //     "favorite-friend": function (id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },
  //   },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.$emit("favorite-friend", this.id);
    },
  },
};
</script>