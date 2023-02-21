<script>
import { defineComponent, reactive } from 'vue'
import DisplayName from '../Home/DisplayName.vue'
import View from '../Home/View.vue' // 追加
import Send from '../Home/Send.vue' //　追加
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";
import Header from '../header/Header.vue'

export default defineComponent({
  components: {
    View,
    Send, //追加
    DisplayName, // 追加
    Header,
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    })
    data.user = getAuth().currentUser;
    data.displayName = data.user.displayName ?? '自分さん'; // 追加
    const refMessage = ref(getDatabase(), 'chat'); // 追加
    onValue(refMessage, (snapshot) => {
    const data = snapshot.val();
    updateChat(data);
  });
    const updateChat = (snap) => {
    data.chat = [];
    for (const key in snap) {
    data.chat.push({
      message: snap[key].message,
      uid: snap[key].uid,
      displayName: snap[key].displayName
    })
  }
}
    const pushMessage = (chatData) => {
      chatData.uid = data.user.uid // 追加
      //data.chat.push(chatData) // 引数で受け取ったChatDataを配列にpush
      chatData.displayName = data.displayName // 追加
      const db = getDatabase(); // 追加
      push(ref(db, 'chat'), chatData); // 追加
    };
    const updateDisplayName = (name) => {
    updateProfile(data.user, {
    displayName: name
  });
    data.displayName = name
}
    return {
      data,
      pushMessage,
      updateDisplayName
    }
  },
  beforeRouteEnter: (to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next();
    } else {
      next('/login');
    }
  });
}
})
</script>

<template>
  <Header />  <!-- 追加 -->
  <div class="container">
    <DisplayName v-model="data.displayName" @update="updateDisplayName" /> <!-- 追加 -->
    <View :data="data"/>
    <Send @sendMessage="pushMessage"/>
  </div>
</template>

<style scoped>

</style>