<template>
  <div v-bind:class="{ 'completed': todo.completed }">
    <p v-on:click="markComplete">{{ todo.title }}</p>
    <v-btn class="mx-2" fab dark small color="primary" @click="$emit('delete-todo', todo.id)">
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: [
    "todo"
  ],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>