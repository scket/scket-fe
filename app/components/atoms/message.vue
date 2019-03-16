<template>
  <div class="message_body">
    <div class="message_body_other">
      <div class="message_user">
        <img src="~/assets/member_photo_noimage_thumb.png">
      </div>
      <div class="message_body_other_text">
        <div class="text">
          <p>左吹き出し文<br>あああああ</p>
        </div>
      </div>
    </div>
    <div class="message_body_me">
      <p>
        右ふきだし文
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',

  props: {
    // data: {
    //   type: Object,
    //   required: true
    // }

    // user: {
    //   type: String,
    //   required: true
    // }
  }
}
</script>

<style scoped>
  .message_body {
    padding-bottom: 20px;
  }

  .message_body_other {
    width: 100%;
    margin: 10px 0;
    overflow: hidden;
  }

  .message_body_other .message_user {
    float: left;
    margin-right: -50px;
    width: 40px;
  }

  .message_body_other .message_user img{
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  .message_body_other .message_body_other_text {
    width: 100%;
    text-align: left;
  }
  .text {
    display: inline-block;
    position: relative;
    margin: 0 0 0 50px;
    padding: 10px;
    max-width: 600px;
    border-radius: 12px;
    background: #edf1ee;
  }

  .text:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px;
    left: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
    -ms-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }
  .text p {
    margin: 0;
    padding: 0;
  }

  .message_body_me {
    margin: 10px 0;
  }
  .message_body_me p {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    padding: 8px;
    max-width: 250px;
    border-radius: 12px;
    background: #30e852;
    font-size: 15px;
  }

  .message_body_me p:after {
    content: "";
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-left: 18px solid #30e852;
    -ms-transform: rotate(-35deg);
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }
</style>
