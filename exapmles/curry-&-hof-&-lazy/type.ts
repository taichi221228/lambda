export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoFormatted {
  title: `${Todo["id"]} - ${Todo["title"]}`;
  completed: boolean;
  userId: number;
}
