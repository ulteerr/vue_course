<template>
  <div>
    <bookable-list-item
      item-title="Cheap Villa"
      item-content="A very cheap villa"
      :price="10000"
    ></bookable-list-item>
    <bookable-list-item
      item-title="Cheap Villa"
      item-content="A very cheap villa2"
      :price="10000"
    ></bookable-list-item>
    <bookable-list-item
      item-title="Cheap Villa"
      item-content="A very cheap villa3"
    ></bookable-list-item>
    <bookable-list-item
      item-title="Cheap Villa"
      item-content="A very cheap villa4"
    ></bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem,
  },
  // beforeCreate() {
  //   console.log("before created");
  // },
  created() {
    console.log("created");
  },
  // beforeMount() {
  //   console.log("before mount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeDestroy() {
  //   console.log("before destroy");
  // },
	// destroyed() {
  //   console.log("destroy");
  // },
};
</script>