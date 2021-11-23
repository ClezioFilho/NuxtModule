<template>
  <b-container fluid>
    <b-navbar type="dark" variant="info">
      <b-navbar-brand to="/">NuxtModules</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/users">Users</b-nav-item>
        <b-nav-item to="/todos">Todos</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
  </b-container>
</template>

