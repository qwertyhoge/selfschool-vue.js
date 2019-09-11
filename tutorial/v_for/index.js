var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {text: 'Learn JS'},
            {text: 'Learn Vue'},
            {text: 'Domite the world'},
        ],
    },
});

app.todos.push({text: 'Create a new world'});