<template>
  <div>
    姓名是: {{id}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    id: String
  }
}
</script>

<style scoped>

</style>