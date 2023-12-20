import { Todo, TodoFormatted } from "./type.ts";

const res = await fetch("https://jsonplaceholder.typicode.com/todos");
const todos = await res.json<Todo[]>();

const completedTodos = todos.filter((todo) => todo.completed);
const formattedTodos = completedTodos.map<TodoFormatted>(
  ({ id, title, ...rest }) => ({
    title: `${id} - ${title}`,
    ...rest,
  }),
);

console.log(formattedTodos);
