<template>
  <div class="card">
    <img :src="image" style="height: 300px; width:345px">
    <h2>{{name}}</h2>
    <p>{{brand}} </p>
    <p>£{{price}}</p>
    <p v-if="available">In Stock</p>
    <p v-else>Coming Soon</p>
  </div>
</template>

<script>

export default {
  props: {
    image: String,
    name: String,
    brand: String,
    price: Number,
    available: Boolean
  },

  components: {
    name: "ProductCard",
  }
}
</script>