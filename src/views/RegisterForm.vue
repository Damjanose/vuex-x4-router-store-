<template>
  <base-container title="Register">
    <input
      placeholder="register"
      type="text"
    />
    <p></p>
    <router-link :to="{ name: 'LoginView' }">Go to Login</router-link>
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