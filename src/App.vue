<script setup>
import Cards from "./components/Cards.vue";
import DetailView from "./components/DetailView.vue";
// import { fetchData } from "./fetchData.js";
import query from "./test.gql";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const { result } = useQuery(query);
</script>

<template>
  <div
    class="flex overflow-auto flex-wrap justify-center items-center bg-secondaryColor"
  >
    <Cards
      v-for="country in result && result.countries"
      :name="country.name"
      :emoji="country.emoji"
      :id="country.code"
    />
  </div>
</template>

<style scoped></style>
