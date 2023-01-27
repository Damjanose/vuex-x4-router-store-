<template>
  <base-container title="Login">
    <input
      placeholder="login"
      type="text"
      v-model="login"
      v-on:keyup="console"
    />
    <p>{{update}}</p>
    <router-link to="/register">Go to register</router-link>
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseContainer.vue";

export default {
  console() {
    console.log(this.value)
  },
  components: {
    BaseContainer,
  },
  computed: {
    update() {
      return this.$store.getters.updateValue;
    },
  },
}
</script>
