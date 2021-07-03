<template>
  <div>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import {db} from "../firebase.js";

export default {
  name: "PostPage",
  data() {
    return {
      id: this.$route.params.id,
      post: []
    }
  },
  mounted() {
    db.collection('posts').
    doc(this.id).get().
    then(snapshot => {
      const post = snapshot.data()
      this.post=post
    })

  },
}
</script>

<style scoped>

</style>