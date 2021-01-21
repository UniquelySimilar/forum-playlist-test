<template>
  <div class="song">
    <p>
      <span class="label">ID: </span>{{ song.id }}
    </p>
    <p>
      <span class="label">Title: </span>{{ song.title }}
    </p>
    <p>
      <router-link :to="{name: 'playlist'}">Back</router-link>
    </p>
  </div>
</template>

<script>
  import Songs from '@/data/songs.json'

  export default {
    name: 'Song',
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        songs: Songs
      }
    },
    computed: {
      song() {
        return this.songs.filter( song => {
          return song.id === this.id;
        })[0];
      }
    }
  }
</script>

<style scoped>
  .song {
    text-align: left;
  }

  .label {
    font-weight: bold;
  }
</style>