Vue.component('currency-input', {
    template: '\
        <span>\
            $\
            <input\
                rel="input"\
                v-bind:value="value"\
                v-on:input="updateValue($event.target.value)"\
            />\
        </span>',
    props: ['value'],
    methods: {
        updateValue: function (value) {
            var formattedValue = value
                .trim()
                .slice(
                    0,
                    value.indexOf('.') === -1 ?
                    value.length :
                    value.indexOf('.') + 3
                )

            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }

            this.$emit('input', Number(formattedValue))
        }
    }
})

new Vue({
    el: '#app',
    data: {
        price: 0
    }
})