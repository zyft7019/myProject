<template>
  <div class="box">
    <div id="qrcode" ref="qrcode"></div>
    <div>
      <a id="downLoadImg"></a>
      <button class="button" @click="downLoadImg" title="DOWNLOAD">DOWNLOAD</button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      a: 1
    };
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 200,
        height: 200,
        // text: sessionStorage.getItem('text'),
        text: 'shazi',
        render: "canvas"
      });
    },
    downLoadImg() {}
  },
  mounted() {
    this.qrcode();
  }
};
</script>

<style>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
