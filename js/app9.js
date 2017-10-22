var app = new Vue({
    el: '#app',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function(newQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: _.debounce(
            function() {
                if (this.question.indexOf('?') == -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)';
                    return;
                }

                this.answer = 'Thinking...';
                var vm = this;
                axios.get('https://yesno.wtf/api')
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function(error) {
                        vm.answer = 'Error! Could not reach the API. ' + error;
                    })
            },
            500
        )
    }
})