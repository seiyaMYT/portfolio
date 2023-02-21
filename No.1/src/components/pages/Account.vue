<script setup>
import Email from '../input/Email.vue'
import Password from '../input/Password.vue' // 追加
import element from '../input/element.vue' // 追加
import belonging from '../input/belonging.vue' // 追加
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, push, onValue } from "firebase/database";
import { reactive } from '@vue/reactivity'
import { useRouter } from "vue-router"
import Header from '../header/Header.vue'

const data = reactive({
  email: "",
  password: "",
  belonging:"",
  element1:"",
  element2:"",
  element3:"",
})
//データを読み込む
const refMessage = ref(getDatabase(), 'account'); // 追加
onValue(refMessage, (snapshot) => {val() 
  const data = snapshot.val();
  updateChat(data);
});
const updateChat = () => {
      data.email = data.email
      data.password = data.password
      data.belonging = data.belonging
      data.element1 = data.element1
      data.element2 = data.element2
      data.element3 = data.element3
  }
//  データを更新する。
const renew = (chatData) => {
      const db = getDatabase(); // DBコネクションを確立
      chatData.email = data.email
      chatData.password = data.password
      chatData.belonging = data.belonging
      chatData.element1 = data.element1
      chatData.element2 = data.element2
      chatData.element3 = data.element3
      push(ref(db, "account"), chatData); // 追加
    };
</script>

<template>
  <Header />  <!-- 追加 -->
  <section class="vh-100">
    <div class="container py-5 vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg- col-xl-8">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">登録情報変更</h3>
              <Email id="email-address" title="社内メールアドレス" v-model="data.email" /> <!-- idとtitleをpropsで渡すように変更 -->
              <Password id="password" title="パスワード" v-model="data.password" />
              <belonging id="belonging" title="所属" v-model="data.belonging" />
              <element id="element1" title="属性1" v-model="data.element1" />
              <element id="element2" title="属性2" v-model="data.element2" />
              <element id="element3" title="属性3" v-model="data.element3" />
              <button class="btn btn-outline-primary btn-lg btn-block m-3" type="submit" @click="renew">変更を反映する</button>
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