<template>
  <div id="app">
    <header>
      <div class="Navbar">
        <h1 class="logo">MusikDB</h1>
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'playlist' }">Playlist</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
  body {
    text-align: center;
  }

  a,
  a:hover,
  a:active,
  a:visited,
  a:focus {
    text-decoration: none;
  }

  .comps {
    margin-top: 25px;
  }

  .Navbar {
    width: 80%;
    margin-left: 2%;
  }

  header {
    margin: 0;
    background: #222;
    font-family: 'Work Sans', sans-serif;
    font-weight: 550;
  }

  header::after {
    content: '';
    display: table;
    clear: both;
  }

  .logo {
    float: left;
    padding: 10px 0;
    color: white;
  }

  nav {
    float: left;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    display: inline-block;
    margin-left: 70px;
    padding-top: 23px;

    position: relative;
  }

  nav a {
    color: rgb(225, 245, 242);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }

  nav a:focus {
    color: rgb(225, 245, 242);
  }

  nav a:hover {
    color: white;
  }

  nav a::before {
    content: '';
    display: block;
    height: 5px;
    background-color: white;

    position: absolute;
    top: 0;
    width: 0%;

    transition: all ease-in-out 250ms;
  }

  nav a:hover::before {
    width: 100%;
  }
</style>