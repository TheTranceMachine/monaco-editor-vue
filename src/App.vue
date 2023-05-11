<template>
  <header>
    <h1>Monaco Editor integration</h1>
    <p>Current route name: {{ $route.name }}</p>
  </header>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'home' }">home</router-link></li>
      <li><router-link :to="{ name: 'diff' }">diff</router-link></li>
    </ul>
  </nav>
  <main>
    <router-view class="view"></router-view>
  </main>
</template>
