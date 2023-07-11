<template>
  <div class="mem-container">
    <div class="bgcolor">
      <full-page :options="options" style="z-index:100;">
        <!--第一屏-->
        <div class="section">
          <div class="ly-box01">
            <div class="ly-txt01">
              <p class="ly-stxt01">2022-11-05</p>
              <p class="ly-stxt02">我们接触了</p>
              <p class="ly-stxt03">媒介名为朱紫</p>
              <p class="ly-stxt05">2022-11-18</p>
              <p class="ly-stxt06">你好，橘子学院的JO同学</p>
              <p class="ly-stxt07">我是熊猫王十一</p>
              <p class="ly-stxt07">很高兴认识你</p>
            </div>
          </div>
          <div class="ly-img01">
            <img class="img1" :src="ruxue" alt="" />
          </div>
        </div>

        <!--第二屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint11"></div>
          <div class="ly-box11">
            <div class="ly-txt11">
              2022-05-21
            </div>
            <div class="ly-txt12">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle11"></div>
        </div>

        <!--第三屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2022-05-25
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第四屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2022-08-07
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第五屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2022-09-09
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第六屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2023-01-29
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第七屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2023-06-27
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第七屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2023-08-20
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第七屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              2023-10-06
            </div>
            <div class="ly-txt22">
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>

        <!--第八屏-->
        <div class="section">
          <div class="timeline"></div>
          <div class="timepoint21"></div>
          <div class="ly-box21">
            <div class="ly-txt21">
              to be continued
            </div>
          </div>
          <div class="ly-triangle21"></div>
        </div>
      </full-page>

      <!--试验-->
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
</template>

<script>
import img1 from '../assets/img/ruxue.png';
export default {
  components: {},
  data() {
    return {
      ruxue: img1,
      options: {
        navigation: true,
        navigationPosition: "left",
        // navigationColor: ['#fff'],
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        sectionSelector: ".section",
        afterLoad: this.afterLoad
      }
    };
  },
  methods: {
    afterLoad(origin, destination, direction) {
      console.log("After load....");
      console.log(destination);
    }
  }
};
</script>
<style lang="less">
.mem-container {
  height: 100%;
  width: 100%;

  .bgcolor {
    background: #ee9ca7;
    background: -webkit-linear-gradient(top left, #ee9ca7 0%, #ee9ca7 100%);
    background: linear-gradient(to bottom right, #ee9ca7 0%, #ee9ca7 100%);
    opacity: 0.9;
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
  /***                                  内容区域                                 ***/
  /**                                   第一部分                                  **/
  /*盒子*/
  .ly-box01 {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 80%;
    margin-bottom: 50%;
    overflow: hidden;
    transform-origin: center bottom;
    animation: box_to_point 20s 0s, bounce 2.5s 20s;
  }

  /* 照片 */
  .ly-img01 {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 80%;
    margin-bottom: 50%;
    overflow: hidden;
    transform-origin: center bottom;
    animation: box_to_point_unfold 40s 2s, bounce 2.5s 40s;

    .img1 {
      width: 100%;
      height: 100%;

      animation: ly-img1_move 25s;
      animation-delay: 3s;
      -webkit-animation: ly-img1_move 25s;
      -webkit-animation-delay: 3s;
    }
  }
  /*文本*/
  .ly-txt01 {
    position: absolute;
    width: 100%;
    left: 0.5rem;
    top: 1rem;
    font-size: 20px;
  }
  .ly-stxt01 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    opacity: 0;
    animation: ly-stxt01_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt01_move 15s;
    -webkit-animation-delay: 3s;
  }

  .ly-stxt02 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    margin-top: -71px;
    opacity: 0;
    animation: ly-stxt02_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt02_move 15s;
    -webkit-animation-delay: 3s;
  }

  .ly-stxt03 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    opacity: 0;
    margin-top: -71px;
    animation: ly-stxt03_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt03_move 15s;
    -webkit-animation-delay: 3s;
  }

  .ly-stxt04 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    opacity: 0;
    margin-top: -71px;
    animation: ly-stxt04_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt04_move 15s;
    -webkit-animation-delay: 3s;
  }

  .ly-stxt05 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    opacity: 0;
    margin-top: -71px;
    animation: ly-stxt05_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt05_move 15s;
    -webkit-animation-delay: 3s;
  }

  .ly-stxt06 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    opacity: 0;
    margin-top: -71px;
    animation: ly-stxt06_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt06_move 15s;
    -webkit-animation-delay: 3s;
  }

  .ly-stxt07 {
    font-family: Microsoft YaHei;
    position: relative;
    left: 1%;
    top: 5%;
    opacity: 0;
    margin-top: -71px;
    animation: ly-stxt07_move 15s;
    animation-delay: 3s;
    -webkit-animation: ly-stxt07_move 15s;
    -webkit-animation-delay: 3s;
  }

  /**                                      第二部分                                       **/
  /*时间轴的线*/

  .timeline {
    width: 8px;
    height: 0;
    position: absolute;
    left: 14%;
    top: -100%;
    background-color: #ccc;
    border-radius: 3px;
    transition: all 2s;
  }
  .active .timeline {
    width: 10px;
    height: 100%;
    top: 0;
    transition-delay: 0.1s;
  }
  /*时间轴上的点*/
  .timepoint {
    width: 20px;
    height: 20px;
    margin-left: -5px;
    position: absolute;
    left: 20%;
    top: 15.5%;
    opacity: 0;
    background-color: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    transition: all 0.3s;
  }
  .active .timepoint {
    opacity: 1;
    transition-delay: 2s;
  }
  /**时间轴上的点**/
  .timepoint11 {
    width: 20px;
    height: 20px;
    margin-left: -5px;
    position: absolute;
    left: 14%;
    top: 0;
    opacity: 1;
    background-color: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    transition: all 1s;
  }
  .active .timepoint11 {
    top: 15.5%;
    transition-delay: 2s;
  }

  /* 盒子 */
  .ly-box11 {
    width: 70%;
    height: 600px;
    border: 2px #ccc;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    position: absolute;
    left: 23%;
    top: 10%;
    overflow: hidden;
    opacity: 0;
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    transition: all 1s;
  }
  .active .ly-box11 {
    opacity: 0.9;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    transition-delay: 2.5s;
  }
  /*小三角*/
  .ly-triangle11 {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-right: 22px solid white;
    border-bottom: 20px solid transparent;
    border-radius: 2px;
    margin-left: 24px;
    position: absolute;
    right: 77%;
    top: 14%;
    opacity: 0;
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    transition: all 0.5s;
  }
  .active .ly-triangle11 {
    opacity: 0.6;
    margin-left: 2px;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    transition-delay: 3.5s;
  }

  /*文本*/
  .ly-txt11 {
    font-family: Microsoft YaHei;
    font-size: 30px;
    text-shadow: 1px;
    position: absolute;
    left: 3%;
    top: 4%;
    opacity: 0;
    transition: all 0.5s;
  }

  .active .ly-txt11 {
    opacity: 1;
    transition-delay: 3.5s;
  }

  .ly-txt12 {
    font-family: Microsoft YaHei;
    font-size: 16px;
    text-indent: 2em;
    position: absolute;
    padding-top: 20px;
    left: 5%;
    top: 12%;
    opacity: 0;
    transition: all 1s;
  }

  .active .ly-txt12 {
    opacity: 1;
    transition-delay: 4s;
  }

  /** 第三部分**/

  /**时间轴上的点**/
  .timepoint21 {
    width: 20px;
    height: 20px;
    margin-left: -5px;
    position: absolute;
    left: 14%;
    top: 0;
    opacity: 1;
    background-color: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
  }
  .active .timepoint21 {
    top: 15.5%;
    transition-delay: 1.5s;
  }

  /* 盒子 */
  .ly-box21 {
    width: 70%;
    height: 600px;
    border: 2px #ccc;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    position: absolute;
    left: 23%;
    top: 10%;
    overflow: hidden;
    opacity: 0;
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    transition: all 1s;
  }
  .active .ly-box21 {
    opacity: 0.9;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    transition-delay: 2.5s;
  }
  /*小三角*/
  .ly-triangle21 {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-right: 22px solid white;
    border-bottom: 20px solid transparent;
    border-radius: 2px;
    margin-left: 24px;
    position: absolute;
    right: 77%;
    top: 14%;
    opacity: 0;
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    transition: all 0.5s;
  }
  .active .ly-triangle21 {
    opacity: 0.6;
    margin-left: 2px;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    transition-delay: 3.5s;
  }

  /*文本*/
  .ly-txt21 {
    font-family: Microsoft YaHei;
    font-size: 30px;
    text-shadow: 1px;
    color: #000;
    position: absolute;
    left: 3%;
    top: 2%;
    opacity: 0;
    transition: all 0.5s;
  }

  .active .ly-txt21 {
    opacity: 1;
    transition-delay: 3.5s;
  }

  .ly-txt22 {
    font-family: Microsoft YaHei;
    font-size: 16px;
    text-indent: 2em;
    position: absolute;
    left: 5%;
    top: 8%;
    opacity: 0;
    transition: all 1s;
  }

  .active .ly-txt22 {
    opacity: 1;
    transition-delay: 4s;
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

@keyframes bounce {
  0% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    bottom: 50%;
    left: 48%;
  }
  50% {
    margin-bottom: 0;
    left: 48%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    bottom: 0;
    left: 48%;
  }
  100% {
    margin-bottom: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    left: 48%;
    bottom: 0;
    left: 20%;
  }
}
@-webkit-keyframes bounce {
  0% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    bottom: 50%;
    left: 48%;
  }
  50% {
    margin-bottom: 0;
    left: 48%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    bottom: 0;
    left: 48%;
  }
  100% {
    margin-bottom: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    left: 48%;
    bottom: 0;
    left: 20%;
  }
}
@keyframes box_to_point {
  0% {
    margin-bottom: 50%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
  10% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
  14% {
    margin-bottom: 0;
    width: 80%;
    height: 550px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10%;
    bottom: 12%;
  }
  96% {
    margin-bottom: 0;
    width: 80%;
    height: 550px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    left: 10%;
    bottom: 12%;
  }
  100% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
}
@keyframes box_to_point_unfold {
  0% {
    margin-bottom: 50%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 50%;
    opacity: 0;
  }
  40% {
    margin-bottom: 50%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 50%;
    opacity: 0;
  }
  50% {
    margin-bottom: 50%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 50%;
    opacity: 1;
  }
  60% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
  64% {
    margin-bottom: 0;
    width: 80%;
    height: 550px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10%;
    bottom: 12%;
  }
  96% {
    margin-bottom: 0;
    width: 80%;
    height: 550px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    left: 10%;
    bottom: 12%;
  }
  100% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
}
@-webkit-keyframes box_to_point {
  0% {
    margin-bottom: 50%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
  10% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
  14% {
    margin-bottom: 0;
    width: 80%;
    height: 550px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10%;
    bottom: 12%;
  }
  96% {
    margin-bottom: 0;
    width: 80%;
    height: 550px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    left: 10%;
    bottom: 12%;
  }
  100% {
    margin-bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 48%;
    bottom: 50%;
  }
}
@keyframes ly-stxt01_move {
  0% {
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  98% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes ly-stxt01_move {
  0% {
    opacity: 0;
  }
  8% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  98% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes ly-stxt02_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  8% {
    opacity: 0;
    margin-top: -71px;
  }
  16% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@-webkit-keyframes ly-stxt02_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  8% {
    opacity: 0;
    margin-top: -71px;
  }
  16% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@keyframes ly-stxt03_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  16% {
    opacity: 0;
    margin-top: -71px;
  }
  24% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@-webkit-keyframes ly-stxt03_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  16% {
    opacity: 0;
    margin-top: -71px;
  }
  24% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@keyframes ly-stxt04_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  24% {
    opacity: 0;
    margin-top: -71px;
  }
  32% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@-webkit-keyframes ly-stxt04_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  24% {
    opacity: 0;
    margin-top: -71px;
  }
  32% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@keyframes ly-stxt05_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  32% {
    opacity: 0;
    margin-top: -71px;
  }
  40% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@-webkit-keyframes ly-stxt05_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  32% {
    opacity: 0;
    margin-top: -71px;
  }
  40% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@keyframes ly-stxt06_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  40% {
    opacity: 0;
    margin-top: -71px;
  }
  48% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@-webkit-keyframes ly-stxt06_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  40% {
    opacity: 0;
    margin-top: -71px;
  }
  48% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@keyframes ly-stxt07_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  48% {
    opacity: 0;
    margin-top: -71px;
  }
  56% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
@keyframes ly-img1_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  30% {
    opacity: 1;
    margin-top: -71px;
  }

  100% {
    opacity: 1;
    margin-top: -71px;
  }
}
@-webkit-keyframes ly-stxt07_move {
  0% {
    opacity: 0;
    margin-top: -71px;
  }
  48% {
    opacity: 0;
    margin-top: -71px;
  }
  56% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 0;
  }
}
</style>
