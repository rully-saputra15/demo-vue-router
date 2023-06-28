<script>
export default {
  created() {
    console.log("ini dari created", this.$route.params.articleId);
  },
};
</script>

<template>
  <div class="p-4 bg-red-200">Article {{ $route.params.articleId }}</div>
</template>
