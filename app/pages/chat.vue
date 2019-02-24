<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-card class="message_wrap">
          <div class="messages">
            <message />
          </div>
          <input-form />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import message from '../components/atoms/message';
  import inputForm from '../components/atoms/inputForm';

  export default {
    name: 'Chat',

    components: {
      message,
      inputForm
    }
  }
</script>

<style scoped>
  .message_wrap {
    padding: 24px 24px 5px;
    max-width: 700px;
    margin: 15px auto;
    text-align: right;
    font-size: 14px;
    background: #ffffff;
  }

  .messages {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 400px;
  }
</style>
