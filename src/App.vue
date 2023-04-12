<template>
  <h1>Sneaker Head</h1>

  <div class=filters>
    <select v-model="selectedBrand">
      <option value="" disabled selected>Filter by Brand</option>
      <option value="">All Brands</option>
      <option v-for="brand in uniqueBrands" :key="brand" :value="brand">{{ brand }}</option>
    </select>

    <select v-model="selectedAvailability">
      <option value="" disabled selected>Filter by Availability</option>
      <option value="">All Trainers</option>
      <option :value=true>In Stock</option>
    </select>

    <select v-model="selectedOrder">
      <option value="" disabled selected>Filter by Price</option>
      <option value="ascending">Price: Low to High</option>
      <option value="descending">Price: High to Low</option>
    </select>
  
    <div id=counter>
      <p>Results: {{ getFilteredCount() }}</p>
    </div>
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
          selectedAvailability: "",
          selectedOrder: "",
          products: productShoes
        }
      },
      methods: {
        getFilteredCount() {
          return this.filteredShoes.length;       
        }
      },
      computed: {
        filteredShoes() {
          let shoes = [...this.products]

          if (this.selectedBrand && this.selectedAvailability) {
            return this.products.filter(product => product.brand === this.selectedBrand && product.available === this.selectedAvailability);
          }

          if (this.selectedBrand) {
            return shoes.filter(shoe => shoe.brand === this.selectedBrand)
          } 
          
          if (this.selectedAvailability) {
            return shoes.filter(shoe => shoe.available === this.selectedAvailability)
          } 
          
          if (this.selectedOrder === "ascending") {
            shoes.sort((a, b) => a.price - b.price);
          } else if (this.selectedOrder === "descending") {
            shoes.sort((a, b) => b.price - a.price);
          }
          return shoes;
        },   
        uniqueBrands() {
          return [...new Set(this.products.map((product) => product.brand))];
        },
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

select {
  font-family: nunito;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 20px;
  width: 14%;
  max-width: 300px;
  box-sizing: border-box;
  margin-left: 2%;
  margin-bottom: 2%; 
}

#counter {
  font-family: nunito;
  float: right;
  display: in-line;
  margin-right: 8%;
}

.filters {
  margin-left: 6%;
}

</style>