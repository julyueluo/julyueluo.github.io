<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/svg/education.svg" width="125" height="125" /> -->
    <img alt="Vue logo" class="logo" src="./assets/master-albrecht-voss-homepage-banner2.jpg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="welcome to arya-homes" />
    </div>
  </header>
  
  <main>
    <div>Deploy by GITHUB ACTION</div>
    <div class="banner">
      <img alt="Vue logo" class="logo" src="./assets/master-albrecht-voss-homepage-banner.jpg" width="125" height="125" />
      <h2>长歌行</h2>
      <p>汉乐府〔两汉〕</p>
      <p>青青园中葵，朝露待日晞。</p>
      <p>阳春布德泽，万物生光辉。</p>
      <p>常恐秋节至，焜黄华叶衰。</p>
      <p>百川东到海，何时复西归？</p>
      <p>少壮不努力，老大徒伤悲！</p>
    </div>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  line-height: 1.5;
  /* background-color: rebeccapurple; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    .logo{
      /* width: 100%; */
      object-fit: contain;
      margin-left: 20px;
    }
  }

  .logo {
    margin: 0 2rem 0 0;
    display: block;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

main {
  /* background-color: red; */
  width: 100%;
  text-align: center;
  .logo {
    width: 100%;
    height: 360px;
    object-fit: cover;
    box-sizing: border-box;
    margin : 10px 0 20px;
  }
}

</style>
