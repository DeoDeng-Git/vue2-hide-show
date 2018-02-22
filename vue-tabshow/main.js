new Vue({
  el: '#app',
  data: {
    products: [{
        id: 0,
        name: 'Product A',
        editions: [
          { spec: 'Product A Home Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$10', link: 'some-link.html' },
          { spec: 'Product A Pro Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$11', link: 'some-link.html' },
          { spec: 'Product A Server Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$15', link: 'some-link.html' },
          { spec: 'Product A Unlimited Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$20', link: 'some-link.html' }
        ]
      },
      {
        id: 1,
        name: 'Product B',
        editions: [
          { spec: 'Product B Free Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$15', link: 'some-link.html' },
          { spec: 'Product B Pro + Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$16', link: 'some-link.html' },
          { spec: 'Product B Unlimited Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$17', link: 'some-link.html' }
        ]
      },
      {
        id: 2,
        name: 'Product C',
        editions: [
          { spec: 'Product C Free Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$24', link: 'some-link.html' },
          { spec: 'Product C Pro Edition', image: 'https://raw.githubusercontent.com/djdeo/vue1-loop-img/master/640x480.png', price: '$26', link: 'some-link.html' }
        ]
      }
    ],
    output: []
  },
  methods: {
    showDiv: function(id) {
    	this.output = this.products[id].editions
    }
  }
})