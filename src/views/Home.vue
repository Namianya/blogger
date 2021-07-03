<template>
    <div class="flex">
        <div class="hidden md:block w-72 px-4">hello</div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="post in posts" :key="post.id">
              <div v-if="post.id != [] ">
                <router-link :to="'/post/'+post.id">

                <BlogTile :title='post.title' :id='post.id' :topic='post.topic' :author="post.author" :date="post.date.toDate().toDateString()" :body='post.body'/>
                </router-link>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogTile from '../components/BlogTile.vue'
import {db} from "../firebase.js";

export default {
    name: 'Home',
    components: { BlogTile },
    data() {
        return {
            posts: [],
        }
    },


  mounted() {
    db.collection('posts').onSnapshot(
        res=>{
          const changes = res.docChanges();
          changes.forEach(change=> {
            if(change.type === 'added'){
              this.posts.push({
                ...change.doc.data(),
                id: change.doc.id
              })
            }
          })
        }
    )
    },
}
</script>

<style scoped></style>
