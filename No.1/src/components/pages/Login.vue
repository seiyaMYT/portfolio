<script setup>
import Email from '../input/Email.vue'
import Password from '../input/Password.vue' // 追加
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { reactive } from '@vue/reactivity'
import { useRouter } from "vue-router"
const data = reactive({
  email: '',
  password: '',
})
const router = useRouter()
const auth = getAuth();
const login = () => {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      //alert("ログインに成功しました！")
      router.push('/');
    })
    .catch((err) => {
      console.log(err)
      alert("正しいログイン情報を入力してください")
    });
}
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg- col-xl-6">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center bg-light">
              <h3 class="mb-5">ログイン</h3>
              <Email id="email-address" title="社内メールアドレス" v-model="data.email" /> <!-- idとtitleをpropsで渡すように変更 -->
              <Password id="password" title="パスワード" v-model="data.password" />
              <button class="btn btn-outline-primary btn-lg btn-block m-3" type="submit" @click="login">Login</button>
              <button class="btn btn-outline-primary btn-lg btn-block m-3" type="submit" @click="router.push('/signup');">新規登録はこちら</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card.shadow-2-strong {
  border-radius: 0.5rem;
}
section {
  background-color: rgba(94, 96, 207, 0.322);
}
</style>