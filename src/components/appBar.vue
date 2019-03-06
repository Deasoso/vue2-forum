<template>
  <!-- <mu-appbar class="tc pre top-bar">
    <img class="logo pab centre1" src="../assets/images/logo.png" alt="logo">
    <mu-flat-button label="发布" slot="right" @click.native="releaseTopic" />
  </mu-appbar> -->
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <a class="navbar-item" style="margin-left:auto;margin-right:0px">
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
        </a>
        <a role="button" class="navbar-burger burger" style="margin-left:0px" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="nav" @click="clicknav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu navbaritems" ref="navitem">
        <div class="navbar-start">
          <a class="navbar-item">
            首页
          </a>
          <a class="navbar-item">
            个人信息
          </a>
          <a class="navbar-item">
            我的团队
          </a>
          <a class="navbar-item">
            我的帖子
          </a>
          <a class="navbar-item">
            制作软件
          </a>
          <a class="navbar-item">
            我的消息
          </a>
          <a class="navbar-item">
            关于我们
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  data() {
    return {
      selected: ""
    }
  },
  computed: {
    ...mapState([
      'login'
    ]),
  },
  methods: {
    releaseTopic(){
      if(!this.login.loginstate){
        this.$router.replace({ name: 'user' });
        this.$store.commit('SWITCH_ROUTE_PAGE', 'user');
        this.$store.dispatch('showInfoPopup', {
          msg: '请先登录',
          bottom: 56,
          state: false
        })
      }else{
        this.$store.commit('SHOW_RELEASEPAGE');
      }
    },
    clicknav(){
      console.log(this.$refs.nav.classList);
      this.$refs.nav.classList.toggle("is-active");
      this.$refs.navitem.classList.toggle("is-active");
    }
  }

}
</script>

<style lang="less">
  .top-bar{
    .mu-appbar-title{
      .logo{
        width: 30px;
        height: 30px;
      }
    }
  }
  .navbaritems{
    position: absolute;
    opacity: 0.9;
    right: 0px
  }

</style>
