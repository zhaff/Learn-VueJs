var app = new Vue({
    el: '#app',
    data: {
        title: 'Click here',
        url: 'http://www.google.com',
        title2: 'Click to alert me',
        number1: 0,
        number2: 0
    },
    methods: {
        alertMe: function() {
                alert('test sajo la')
            }
            // calculate: function() {
            //     this.total = parseInt(this.number1) + parseInt(this.number2)
            // }
    },
    computed: {
        sumTotal: function() {
            return parseInt(this.number1) + parseInt(this.number2);
        }
    }
})