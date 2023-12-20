import { Todo, TodoFormatted } from "./type.ts";

const res = await fetch("https://jsonplaceholder.typicode.com/todos");
const todos = await res.json<Todo[]>();

todos.reduce((acc: TodoFormatted[], { id, title, completed, ...rest }) => {
  if (completed) {
    acc.push({
      title: `${id} - ${title}`,
      completed,
      ...rest,
    });
  }
  return acc;
}, []);
