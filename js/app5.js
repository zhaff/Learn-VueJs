var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!'
    },
    methods: {
        processText: function() {
            alert(this.message);
        }
    }
})