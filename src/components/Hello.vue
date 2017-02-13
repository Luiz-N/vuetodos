<template>
  <section class="todoapp">
    <header class="header">
      <h1>Vue Todos</h1>
      <input class="new-todo"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <input class="toggle-all" type="checkbox" v-model="allDone">
      <ul class="todo-list">
        <li v-for="todo in filteredTodos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editedTodo }">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input class="edit" type="text"
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)">
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
      <span class="todo-count">
        <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
      </span>

      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      todos: [],
      newTodo: '',
      theMessage: 'Your Very First Vue.js App!' }
  },
  methods: {
    addTodo: function () {
      let value = this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: this.todos.length + Math.random(),
        title: value,
        completed: false
      })
    },
    removeCompleted: function () {
      this.todos = this.todos.filter(
        (todo) => {
          return !todo.completed
        })
    }
  },
  computed: {
    remaining: function () {
      return this.todos.filter(
        (todo) => {
          return !todo.completed
        }
      ).length
    }
  },
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
