<template>
  <base-container title="Register">
    <input
      placeholder="register"
      type="text"
      v-model="register"
    />
    <p></p>
    <router-link to="/">Go to Login</router-link>
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseContainer.vue";
  export default {
    components: {
      BaseContainer,
    }
  }
</script>