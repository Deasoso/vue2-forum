<template>
  <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="in-out"
  >
    <div class="login not">
      <div class="enter-user tc">
        <!-- <mu-icon 
          class="lock-icon pre" 
          :class="{ac:active}" 
          value="lock_outline"
        /> -->
        <i class="far fa-address-book usericon" width="24px"></i>
        <mu-text-field 
          hintText="accessToken" 
          v-model="accessToken"
          @focus="handlefocus"
          @blur="handleblur"
          class="tl"
        />
      </div>
      <div class="enter-password tc">
        <mu-icon 
          class="lock-icon pre" 
          :class="{ac:active}" 
          value="lock_outline"
        />
        <mu-text-field 
          hintText="accessToken" 
          v-model="accessToken"
          @focus="handlefocus"
          @blur="handleblur"
          class="tl"
        />
      </div>
      <div class="pre">
        <mu-raised-button label="登录" class="tc wauto" @click="handleLogin" />
        <mu-raised-button label="注册" class="tc wauto" href="https://www.vue-js.com/" />
        <mu-circular-progress class="pfi centre1" v-if="login.isfetching" color="#41b883" :size="40"/>
      </div>
      <p class="how-get" @click="handleHowGet">
        <mu-icon value="help" :size="18" color="#e96900"></mu-icon>
        如何获取 accessToken？
      </p>
      <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <div class="tip" v-show="isShow">
          <a class="vue-link" href="https://www.vue-js.com/">官方网站</a>登录后，
          在设置页面可以看到自己的<b>accessToken</b>。<br />
          将<b>accessToken</b>复制，粘贴到⬆文本框，即可登录。
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex'


export default {
  data(){
    return{
      accessToken:'c6f42acd-2681-43f2-a4e8-0e66360649c0',
      active:false,
      isShow:false,
    }
  },
  computed: {
    ...mapState([
      'login',
      'common',
    ])
  },
  methods: {
    handlefocus(val){
      this.active = true;
    },
    handleblur(){
      this.active = false;
    },
    handleHowGet(){
      this.isShow = !this.isShow;
    },
    handleLogin(){
      let at = this.accessToken.trim();
      if(at==""){
        this.$store.dispatch('showInfoPopup', {
          msg: 'accesstoken 不能为空',
          bottom: 56
        })
      }else{
        this.$store.dispatch('fetchUserLogin', {
          accesstoken : at
        });
      }
    }
  },
  created(){
    this.$store.dispatch('setTitle', {text: '登录'})
  }
}
</script>

<style lang="less">
  .usericon{
    margin-left: 10px;
    margin-right: 10px;
  }
  .login{
    // max-width: 352px;
    .enter-user{
      margin-top: 30px;
      .lock-icon{
        bottom: -8px;
        padding: 0 10px;
        color: #7a7777;
        &.ac{
          color: #41b883;
        }
      }
      .mu-text-field{
        width: 200px;
        .mu-text-field-focus-line{
          background-color: #41b883;
        }
      }
    }
    .enter-password{
      .lock-icon{
        bottom: -8px;
        padding: 0 10px;
        color: #7a7777;
        &.ac{
          color: #41b883;
        }
      }
      .mu-text-field{
        width: 200px;
        .mu-text-field-focus-line{
          background-color: #41b883;
        }
      }
    }
    .mu-raised-button{
      display: block;
      width: 70%;
      margin-top: 12px;
      &:nth-child(1){
        color: #fff;
        background-color: #41b883;
      }
    }
    .how-get{
      width: 22rem;
      margin: 30px auto 15px;
      font-size: 1rem;
      font-weight: bold;
      .material-icons{
        position: relative;
        top: 2px;
      }
    }
    .tip{
      padding: 0 40px;
      line-height: 1.6;
      font-size: .95rem;
    }
  }

</style>
