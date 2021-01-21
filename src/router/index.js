import Vue from 'vue'
import VueRouter from 'vue-router'

import Playlist from '@/components/Playlist'
import Song from '@/components/Song'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'playlist'
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: Playlist
  },
  {
    path: '/song/:id',
    name: 'song',
    component: Song,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})