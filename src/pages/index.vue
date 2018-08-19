<template>
    <div class="container">
        <div class="item">
            <button class="to-show" @click="toShow()">
                作品页面
            </button>
        </div>
       <div class="item">
           <button class="to-upload" @click="toUpload()">
           我要上传
       </button>
       </div>
       
    </div>
</template>
<script>
export default {
  methods: {
    toShow() {
      this.$router.push({ name: "Show" });
    },
    toUpload() {
      this.$router.push({ name: "Upload" });
    }
  }
};
</script>
<style scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.container .item {
  text-align: center;
}
.container .item button {
  width: 200px;
  height: 50px;
  margin: 20px auto;
}
</style>


