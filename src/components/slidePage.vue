<template>
  <section>
    <slider class="sliderContainer" animation="normal" auto="false" height="180px">
      <slider-item>
        <div class="slide slide1">
          <div class="slideContainer">
            <span class="slidetext slidetitle">各路武将 谁与争锋</span>
            <p class="slidetext">在幸运币商店购买幸运币即可抽取随机一位武将。</p>
            <br>
          </div>
          <div class="btndiv">
            <router-link class="button is-medium gotoDetail" :to="{ name: 'PreSale' }"><div class="btnfont">了解详情</div></router-link>
          </div>
        </div>
      </slider-item>
      <slider-item>
        <div class="slide slide2">
          <div class="slideContainer">
            <span class="slidetext slidetitle">群雄争霸天下</span>
            <p class="slidetext">指挥武将进行对战，争夺城池，一统天下。</p>
            <br>
          </div>
          <div class="btndiv">
            <router-link class="button is-medium gotoDetail" :to="{ name: 'Game' }"><div class="btnfont">了解详情</div></router-link>
          </div>
        </div>
      </slider-item>
      <slider-item>
        <div class="slide slide3">
          <div class="slideContainer">
            <span class="slidetext slidetitle">更多内容</span>
            <p class="slidetext">敬请期待。</p>
          </div>
        </div>
      </slider-item>
    </slider>
  </section>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
  components:{
    Slider,
    SliderItem,
  },
  props: {
    data: {

    }
  },
}
</script>

<style lang="less">
  //slide
  .sliderContainer {
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .slide {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: #000;
    display: inline-block;
    vertical-align: middle;
    padding-left: 15px;
  }
  .slide1 {
    background-image: url("../assets/img/home1.jpeg");
      background-size: cover;
  }
  .slide2 {
    background-image: url("../assets/img/home2.jpeg");
      background-size: cover;
  }
  .slide3 {
    background-image: url("../assets/img/home3.jpeg");
      background-size: cover;
  }
  .slideContainer {
    margin-top: 28px;
    margin-left: 15px;
    padding: 15px;
    width: 80%;
    height: 50%;
    background-color: #ffffff33;
    /*opacity: 0.5;*/
  }
  .slidetext {
    color: #000;
    font-size: 10px;
  }
  .slidetitle {
    font-size: 20px;
  }
  .gotoDetail {
    background-image: url("../assets/img/home_button.png");
    background-size: cover;
    height: 25px;
    width: 65px;
    background-color: transparent;
    border-color: transparent;
    color: #3a2729;
  }
  .btndiv {
    margin: 20px;
  }
  .btnfont{
    font-size:11px;
  }
</style>
