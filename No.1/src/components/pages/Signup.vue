<script setup>
import { reactive } from '@vue/reactivity' // 追加
import Email from '../input/Email.vue'
import Password from '../input/Password.vue' // 追加
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"
const router = useRouter()
const auth = getAuth();
const data = reactive({
  email: "",
  password: "",
  passwordReinput: "",
});
const signUp = () => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
      alert("ユーザー作成に失敗しました")
    })
}
</script>

<template>
  <div id="app">
    <section class="vh-100">
      <div class="container py-5 vh-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-6">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center bg-light">

                <h3 class="mb-5">新規登録</h3>

                <Email id="email" title="社内メールアドレス" v-model="data.email" />
                <Password id="password" title="パスワード(6文字以上)" v-model="data.password" />
                <Password id="password-Reinput" title="パスワード(再入力)" v-model="data.passwordReinput" />
                <button class="btn btn-outline-primary btn-lg btn-block" type="submit" @click="signUp">登録</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card.shadow-2-strong {
  border-radius: 0.5rem;
}
section {
  background-color: rgba(94, 96, 207, 0.322);
}
</style>