<template>
    <div class="container">
        <div class="box">
            <div class="item">
                <span>标题:</span>
                <input type="text" class="input title">
            </div>
            <div class="item">
                <span>日期:</span>
                <input type="date" name="" id="" class="input date">
            </div>
            <div class="item">
                <span>简介:</span>
                <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
            </div>
            <div class="item">
                <span>照片:</span>
                <input type="file" id = "upload" multiple="multiple" accpet = "image/*" capture = "camera" @change="pushImg">
               <div class="blank"></div>
            </div>
            <div class="item">
                <ul v-if="path.length!=0">
                    <li v-for="(p,i) in path" :key="i">
                        <img :src="p" alt="" class="showImg">
                    </li>
                </ul>
                
            </div>
            <div class="item">
                <button>上传</button>
                <button>取消</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      path: []
    };
  },
  methods: {
    pushImg(e) {
      var files = e.target.files;
      var fileLen = files.length;
      var imgArr = new Array();
      var imgLen = this.path.length;

      if (imgLen + fileLen > 12) {
        alert("上传文件数目不得大于12");
      }
      else if (imgLen + fileLen < 13) {
        for (var i = 0; i < fileLen; i++) {
          var file = files[i];

          var imgType = /^image\//;

          if (!imgType.test(file.type)) {
            continue;
          }

          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (function() {
            return function(e) {
              imgArr.push(e.target.result);
            };
          })();
        }
      }

    this.path = imgArr;
      //   数组添加到另一个数组中
    //   for (var j = 0; j < imgArr.length; j++) {
    //     console.log(imgArr[j]);
    //   }
    },
    back() {
      this.$router.back(-1);
    },
    submit() {}
  }
};
</script>
<style scoped>
*:focus {
  outline: none;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.container .box {
  height: 450px;
  width: 100%;
  text-align: center;
}
.container .box .item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
}
.item span {
  width: 50px;
  line-height: 39px;
}
.item input {
  width: 200px;
  height: 35px;
  text-align: center;
  font-size: 16px;
  background: #fff;
}
.item input[type="file"] {
  height: 39px;
  width: 80px;
  line-height: 39px;
  list-style-type: none;
}
.item .blank {
  width: 120px;
}
.item textarea {
  width: 190px;
  height: 140px;
  font-size: 16px;
  padding: 5px;
}
.item button {
  width: 120px;
  height: 35px;
  margin: 0 10px;
  background: #3399ff;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 16px;
}
.item ul {
  width: 80%;
  min-width: 320px;
  height: 200px;
  display: inline;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
}
.item ul li {
  width: 170px;
  height: 200px;
  display: inline-block;
  list-style-type: none;
}
.item ul li .showImg {
  width: 150px;
  height: 200px;
}

/** 特效 **/
.input {
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
}
.input:focus {
  border: 1px solid #e042ff;
  box-shadow: 0 0 5px 0 #e042ff;
}
</style>


