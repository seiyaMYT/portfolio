<script setup>
import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "vue-router" 

const auth = getAuth();
const router = useRouter();

const logout = () => {
  signOut(auth);
  router.push('/login');
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-5">
  <div class="container-fluid">
    <router-link class="navbar-brand .d-inline-block h1" to="/">〇〇株式会社社内報</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="mx-5 .d-inline-block"><a  class=".d-inline-block" href="./article">記事投稿</a></li>
        <li class="mx-5"><a href="./account">アカウント情報変更</a></li>
      </ul>
      <div class="d-flex">
      <button class="btn btn-outline-primary" @click="logout">ログアウト</button>
    </div>
    </div>
  </div>
</nav>
</template>

<style>
ul li a{
  text-decoration: none;
  font-size: 20px;
  border: 1em;
  color:white;
  background-color: rgb(2, 218, 146);
  padding:20px;
  border-radius: 1em;
}

.h1 {
  font-size: 30px;
  font-weight: bold;
}

</style>