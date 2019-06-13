// components/theSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=231620273,2622968107&fm=27&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=281531042,273318123&fm=27&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2731345960,2613387946&fm=26&gp=0.jpg"
    ],
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e) {
      console.log(e);
      this.setData({
        currentIndex: e.detail.current
      });
    }
  }
});
