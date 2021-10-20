import { v4 as uuid } from 'uuid';

export interface Task {
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
}

export const generateTask = (title: string): Task => ({
  id: uuid(),
  title,
  done: false,
  createdAt: new Date(),
});
