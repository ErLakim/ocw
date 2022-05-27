<template>
<v-app>
    <div class="container">
      <h1>this is website admin page</h1>
      <v-btn depressed color="primary">test</v-btn>
    </div>
</v-app>
</template>

<script>
import {mapState} from "vuex"
    export default {
        mounted() {
console.log(this.lakim)
        },
         computed:{
        ...mapState(
          [ "lakim"]

        ),
    },

    }
</script>
