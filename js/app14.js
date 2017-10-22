Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
    ',
    props: ['title']
})

new Vue({
    el: '#app',
    data: {
        newTodoText: '',
        todos: [{
                id: 1,
                title: 'Pergi pasar malam'
            },
            {
                id: 2,
                title: 'Pergi keroje'
            },
            {
                id: 3,
                title: 'Buat projeck'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});