<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script setup>
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import { ref } from 'vue'

const { user } = getUser()
// refs
const message = ref('')

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp()
  }
  console.log(chat)
  message.value = ''
}

</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>