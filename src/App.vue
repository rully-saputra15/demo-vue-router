<script>
// import { RouterLink, RouterView } from "vue-router";
// export default {
//   components: { RouterLink, RouterView },
// };

export default {
  data() {
    return {
      id: 2,
      routing: `/article/${this.id}`,
    };
  },
  methods: {
    handleChangePage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<template>
  <div>
    <!-- <RouterLink to="/" class="p-4 bg-sky-300 text-black">Home</RouterLink> -->

    <!-- <RouterLink :to="routing" class="p-4 bg-sky-300"
      >Pindah ke halaman article 2</RouterLink
    > -->

    <!-- <button class="p-4 bg-sky-300" @click="handleChangePage(`article/${id}`)">
      Pindah ke halaman article 2
    </button> -->

    <!-- <RouterLink to="/about" class="p-4 bg-sky-300 text-black mb-4"
      >About</RouterLink
    > -->
  </div>
  <RouterView />

  <button class="p-4 bg-sky-300" @click="handleChangePage('/main')">
    Home
  </button>

  <button class="p-4 bg-sky-300" @click="handleChangePage('/main/about')">
    About
  </button>
</template>

<style></style>
