<template>
  <button class="btn btn-primary"
    @click="$emit('on:click')">
      <i class="fa fa-2x"
          :class="icon"
      ></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
