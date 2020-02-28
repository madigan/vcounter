<template>
  <div class="wrapper">
    <!-- Header -->
    <h1>Bestiary</h1>

    <!-- Search Bar -->
    <div class="search"></div>

    <!-- Table -->
    <div class="table"></div>
  </div>
</template>

<script>
export default {
  computed: {
    entries() {
      this.$store.bestiary.list.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  },
  data() {
    return {
      searchTerm: ''
    }
  }
}
</script>