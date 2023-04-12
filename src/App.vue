<template>
  <h1>Sneaker Head</h1>

  <div id=brand-drop-down>
    <select v-model="selectedBrand">
      <option value="">All Brands</option>
      <option v-for="product in products" :value="product.brand">{{ product.brand }}</option>
    </select>
  </div>

  <div class="cards">
    <ProductCard v-for="shoe in filteredShoes"
      :key="shoe.id"
      :name="shoe.name"
      :brand="shoe.brand"
      :price="shoe.price"
      :available="shoe.available"
      :image="shoe.image"
    />
  </div>

</template>

  <script>
    import productShoes from '@/data/products.json';
    import ProductCard from '@/components/ProductCard.vue';

    components: {
      ProductCard
    }
    export default {
      data () { return { 
          selectedBrand: "",
          products: productShoes
        }
      },
      methods: {
   
      },
      computed: {
        filteredShoes() {
          if (this.selectedBrand) {
            return this.products.filter(product => product.brand === this.selectedBrand)
          } else {
            return this.products;
          }
        }  
      }
    }

</script>

<style scoped>

h1 {
  text-align: center;
  font-family: rubik pixels;
}

.card {
  background-color: white;
  border-color: #8d989e;
  border-width: 20px;
  padding: 1rem;
  height: 9 rem;
  border-width: medium;
  box-shadow: 5px 5px 5px black;
  font-family: nunito;
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

@media (min-width: 600px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
</style>