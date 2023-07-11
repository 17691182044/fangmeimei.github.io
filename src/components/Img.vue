<template>
  <div class="img-container">
    <div class="container">
      <ul class="img-ul">
        <li class="img-li"><img :src="imgurl.img1" alt=""></li>
        <li class="img-li"><img :src="imgurl.img2" alt=""></li>
        <li class="img-li"><img :src="imgurl.img3" alt=""></li>
        <li class="img-li"><img :src="imgurl.img4" alt=""></li>
        <li class="img-li"><img :src="imgurl.img5" alt=""></li>
        <li class="img-li"><img :src="imgurl.img6" alt=""></li>
        <li class="img-li"><img :src="imgurl.img7" alt=""></li>
        <li class="img-li"><img :src="imgurl.img8" alt=""></li>
        <li class="img-li"><img :src="imgurl.img9" alt=""></li>
        <li class="img-li"><img :src="imgurl.img10" alt=""></li>
        <li class="img-li"><img :src="imgurl.img11" alt=""></li>
      </ul>
    </div>
    <div class="htmleaf-container">
      <div class="wrapper">
        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class='end' @click="btnclick" >开启浪漫回忆</div>
  </div>
</template>

<script>
import $ from 'jquery'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
import img7 from '../assets/img/7.jpg'
import img8 from '../assets/img/8.jpg'
import img9 from '../assets/img/9.jpg'
import img10 from '../assets/img/10.jpg'
import img11 from '../assets/img/11.jpg'

export default {
  components: {

  },
  data () {
    return {
      user: '',
      leng: 0,
      index: 0,
      imgel: [],
      imgurl: {
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,
        img7: img7,
        img8: img8,
        img9: img9,
        img10: img10,
        img11: img11
      }
    }
  },
  methods: {
    btnclick () {
      $('audio#img-music')[0].pause()
      $('audio#memory-music')[0].play()
      let url = '/memories'
      this.$router.push({ path: url })
    },
    feiru () {
      if (this.leng === 0 && this.index === 0) {
        return
      }
      if (this.leng > this.index) {
        setTimeout(this.feirucore, 4000)
      } else {
        setTimeout(this.showEndBtn, 4000)
      }
    },
    feirucore () {
      this.animateFct()
      console.log(this.index)
      this.index++
      this.feiru()
    },
    showEndBtn () {
      $('.end').fadeIn(3000)
    },
    animateFct () {
      let i = this.index
      let li = this.imgel
      var randTBArr = ['top', 'bottom']
      var randLRArr = ['right', 'left']
      var data = {}
      var c = Math.floor((Math.random() * 2) + 1)
      li.eq(i).css(randTBArr[c - 1], '-100%')
      var d = Math.floor((Math.random() * 2) + 1)
      li.eq(i).css(randLRArr[d - 1], '-100%')
      li.eq(i).css('z-index', i)
      var n = Math.floor((Math.random() * 30) + (-30))
      li.eq(i).css({transform: 'rotate(' + n + 'deg)'})
      li.eq(i).find('img').css({width: '250px', height: '350px'})
      li.eq(i).show()
      if (parseInt(li.eq(i).css('top')) < 0) {
        data.top = parseInt(Math.random() * 20 + 5) + '%'
      }
      if (parseInt(li.eq(i).css('left')) < 0) {
        data.left = parseInt(Math.random() * 15 + 5) + '%'
      }
      if (parseInt(li.eq(i).css('right')) < 0) {
        data.right = parseInt(Math.random() * 15 + 5) + '%'
      }
      if (parseInt(li.eq(i).css('bottom')) < 0) {
        data.bottom = parseInt(Math.random() * 30 + 15) + '%'
      }
      li.eq(i).stop().animate(data, 3000)
    }
  },
  mounted () {
    let li = $('.img-li')
    this.leng = li.length
    this.imgel = li
    this.feiru()
  }
}
</script>

<style lang="less">
.img-container {
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-weight: 300;
  }
  .container, .htmleaf-container {
      font-family:"Microsoft YaHei";
      color: white;
      font-weight: 300;
  }
  .container ::-webkit-input-placeholder, .htmleaf-container ::-webkit-input-placeholder {
      /* WebKit browsers */
      font-family:"Microsoft YaHei";
      color: white;
      font-weight: 300;
  }
  .container :-moz-placeholder, .htmleaf-container :-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      font-family:"Microsoft YaHei";
      color: white;
      opacity: 1;
      font-weight: 300;
  }
  .container ::-moz-placeholder, .htmleaf-container ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      font-family:"Microsoft YaHei";
      color: white;
      opacity: 1;
      font-weight: 300;
  }
  .container :-ms-input-placeholder, .htmleaf-container :-ms-input-placeholder {
      /* Internet Explorer 10+ */
      font-family:"Microsoft YaHei";
      color: white;
      font-weight: 300;
  }
  .wrapper {
    background: #ee9ca7;
    background: -webkit-linear-gradient(top left, #ee9ca7 0%, #ee9ca7 100%);
    background: linear-gradient(to bottom right, #ee9ca7 0%, #ee9ca7 100%);
    background-color:rgba(255,255,255,0.9);
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wrapper.form-success .container h1 {
      -webkit-transform: translateY(85px);
      -ms-transform: translateY(85px);
      transform: translateY(85px);
  }
  .container {
      max-width: 600px;
      margin: 0 auto;
      margin-top: 7%;
      padding: 80px 0;
      height: 400px;
      text-align: center;
  }
  .container h1 {
      font-size: 40px;
      -webkit-transition-duration: 1s;
      transition-duration: 1s;
      -webkit-transition-timing-function: ease-in-put;
      transition-timing-function: ease-in-put;
      font-weight: 200;
  }
  form {
      padding: 20px 0;
      position: relative;
      z-index: 2;
  }
  form input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: 0;
      border: 1px solid rgba(255, 255, 255, 0.4);
      background-color: rgba(255, 255, 255, 0.2);
      width: 250px;
      border-radius: 3px;
      padding: 10px 15px;
      margin: 0 auto 10px auto;
      display: block;
      text-align: center;
      font-family: "Microsoft YaHei";
      font-size: 18px;
      color: white;
      -webkit-transition-duration: 0.25s;
      transition-duration: 0.25s;
      font-weight: 300;
  }
  form input:hover {
      background-color: rgba(255, 255, 255, 0.4);
  }
  form input:focus {
      background-color: white;
      width: 300px;
      color: #ee9ca7;
  }
  form button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: 0;
      background-color: white;
      font-family: "Microsoft YaHei";
      border: 0;
      padding: 10px 15px;
      color: #ee9ca7;
      border-radius: 3px;
      width: 250px;
      cursor: pointer;
      font-size: 18px;
      -webkit-transition-duration: 0.25s;
      transition-duration: 0.25s;
  }
  form button:hover {
      background-color: #f5f7f9;
  }
  .bg-bubbles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
  }
  .bg-bubbles li {
      position: absolute;
      list-style: none;
      display: block;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.15);
      bottom: -160px;
      -webkit-animation: square 30s infinite;
      animation: square 30s infinite;
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;
  }
  .bg-bubbles li:nth-child(1) {
      left: 10%;
  }
  .bg-bubbles li:nth-child(2) {
      left: 20%;
      width: 80px;
      height: 80px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 17s;
      animation-duration: 17s;
  }
  .bg-bubbles li:nth-child(3) {
      left: 25%;
      -webkit-animation-delay: 4s;
      animation-delay: 4s;
  }
  .bg-bubbles li:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      -webkit-animation-duration: 22s;
      animation-duration: 22s;
      background-color: rgba(255, 255, 255, 0.25);
  }
  .bg-bubbles li:nth-child(5) {
      left: 70%;
  }
  .bg-bubbles li:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
  }
  .bg-bubbles li:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      -webkit-animation-delay: 7s;
      animation-delay: 7s;
  }
  .bg-bubbles li:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      -webkit-animation-delay: 15s;
      animation-delay: 15s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
  }
  .bg-bubbles li:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
      background-color: rgba(255, 255, 255, 0.3);
  }
  .bg-bubbles li:nth-child(10) {
      left: 90%;
      width: 160px;
      height: 160px;
      -webkit-animation-delay: 11s;
      animation-delay: 11s;
  }
  .container {
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 2;
  }

  .img-ul {
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
  }

  .container .img-li{
      position: absolute;
      display: none;
      list-style-type: none;
      margin: 0;
      padding: 0;
      border: 10px solid #fff;
      border-radius: 4px;
  }
  .container img{
      display: block;
      width: 300px;
      height: 400px;
      margin: 0;
      padding: 0;
      background: #f9f9f9;
  }

  .end{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 666;
    height: 10%;
    font-size: 30px;
    color: #fff;
    display: none;
  }
}


@-webkit-keyframes square {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-900px) rotate(600deg);
        transform: translateY(-900px) rotate(600deg);
    }
}
@keyframes square {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-900px) rotate(600deg);
        transform: translateY(-900px) rotate(600deg);
    }
}
</style>
