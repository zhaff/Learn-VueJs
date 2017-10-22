Vue.component('button-counter', {
    template: '<button @click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit('increment');
        }
    }
})

new Vue({
    el: '#app',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})