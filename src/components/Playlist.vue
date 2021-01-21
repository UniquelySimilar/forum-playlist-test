<template>
  <div class="Playlist">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in songs" class="clickable text-center" v-bind:key="song.id">
          <td><router-link :to="{name: 'song', params: { id: song.id}}">{{song.id}}</router-link></td>
          <td>{{song.title}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import Songs from '@/data/songs.json'

  export default {
    name: 'Playlist',
    data() {
      return {
        songs: Songs
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  th {
    font-size: 175%;
    text-align: center;
  }

  td {
    font-size: 125%;
  }
</style>