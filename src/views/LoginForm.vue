<template>
  <base-container title="Login">
    <input
      placeholder="login"
      type="text"
      v-model="syncText"
    />
    <router-link :to="{ name: 'RegisterView' }">Go to Register</router-link>
  </base-container>
</template>

<script>
  import BaseContainer from "@/components/BaseContainer.vue";

  export default {
    components: {
      BaseContainer,
    },
    computed: {
      syncText: {
        get() {
          return this.$store.getters.text
        },
        set(text) {
          this.$store.dispatch('setText', text)
        },
      },
    },
  }
</script>
