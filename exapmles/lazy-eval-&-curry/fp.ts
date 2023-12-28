import { Todo, TodoFormatted } from "./type.ts";

const res = await fetch("https://jsonplaceholder.typicode.com/todos");
const todos = await res.json<Todo[]>();

type Sequence<T> = T[] | Generator<T, void, unknown>;

const createFilter =
  <T>(
    predicate: (item: T) => boolean,
  ): ((sequence: Sequence<T>) => Generator<T, void, unknown>) =>
  (sequence: Sequence<T>) => {
    function* filter() {
      for (const item of sequence) {
        if (predicate(item)) {
          yield item;
        }
      }
    }

    return filter();
  };

const createMap =
  <T, R>(
    mapper: (sequence: T) => R,
  ): ((sequence: Sequence<T>) => Generator<R, void, unknown>) =>
  (sequence: Sequence<T>) => {
    function* map() {
      for (const item of sequence) {
        yield mapper(item);
      }
    }

    return map();
  };

const completeFilter = createFilter<Todo>((todo) => todo.completed);
const todoMapper = createMap<Todo, TodoFormatted>(({ id, title, ...rest }) => ({
  title: `${id} - ${title}`,
  ...rest,
}));
const formattedTodos = Array.from(todoMapper(completeFilter(todos)));

console.log(formattedTodos);
