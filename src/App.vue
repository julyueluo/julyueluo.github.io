<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/svg/education.svg" width="125" height="125" /> -->
    <img alt="Vue logo" class="logo" src="./assets/master-albrecht-voss-homepage-banner.jpg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="你好" />
    </div>

  </header>

  <main>
    <div>action</div>
    <div class="banner">
      <img alt="Vue logo" class="logo" src="./assets/master-albrecht-voss-homepage-banner2.jpg" width="125"
        height="125"  />
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
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.banner{
  img{
    width: 100%;
  }
}
</style>
