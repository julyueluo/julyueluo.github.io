<script setup>

</script>

<template>
  <div class="navbar">
    <div class="logo">
      <p class="zhu">筇竹庭</p>
      <p class="arya-homes">arya homes</p>
    </div>
    <main>
    <div class="banner">
      <!-- <img alt="Vue logo" class="logo" src="./assets/master-albrecht-voss-homepage-banner.jpg" width="125" height="125" /> -->
      <h2>长歌行</h2>
      <p>汉乐府〔两汉〕</p>
      <p>青青园中葵，朝露待日晞。</p>
      <p>阳春布德泽，万物生光辉。</p>
      <p>常恐秋节至，焜黄华叶衰。</p>
      <p>百川东到海，何时复西归？</p>
      <p>少壮不努力，老大徒伤悲！</p>
    </div>
  </main>
    <!-- <div class="logoImg"> -->
      <img alt="Vue logo" class="logoImg" src="@/assets/master-albrecht-voss-homepage-banner.jpg" width="125" height="125" />
    <!-- </div> -->
  </div>
</template>

<style scoped lang='scss'>
@font-face {
  font-family: 'weiYang';
  src: url('@/assets/font/SanJiCaoQuanBeiLiShuJian-2.ttf');
}
@font-face {
  font-family: 'IPfonts';
  src: url('@/assets/font/IPfonts-3.ttf');
}
  .navbar{
    // background-color: blue;
    // width: 100%;
    background-color: bisque;
    position: relative;
    .logo{
      position: sticky;
      top: 0;
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      background-color: rgb(65, 36, 1);
      // background: no-repeat url("@/assets/master-albrecht-voss-homepage-banner.jpg") ;
      line-height: 60px;
      color: #bbbbbc;
      .zhu{
        font-family: weiYang;
        font-size: 70px;
        // color: rgba(110, 8, 205, 0.619);
        text-align: center;
        // line-height: 70px;
        // background-color: red;
      }
      .arya-homes{
        font-family: IPfonts;
        font-size: 28px;
        // letter-spacing: 10px;
        // color: rgb(89, 137, 195);
        text-align: center;
        // line-height: 70px;
        // background-color: red;
        // align-self: center;


      }
    }
    .banner{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      // background-color: bisque;
    }
    .logoImg{
      // display: block;
      // width: 100%;
      // height: 600px;
      // background-color: red;
      // margin-top: ;
      // img{
        height: 400px;
        width: 100%;
        object-fit:  scale-down;
      // }
      // background-color: bisque;
      // background-color: red;
    }
  }
</style>