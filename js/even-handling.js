var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: 'Apano'
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.name + '!')

            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            if (event) event.preventDefault();
            alert(message);
            alert(event.target.tagName);
        },
        submit: function (message, event) {
            alert(message)
        }
    }
})