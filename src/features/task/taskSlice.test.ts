import { describe, expect, it } from 'vitest';
import reducer, { createTask, editTask, completeTask, deleteTask } from './taskSlice';

describe('task lifecycle after the Redux Toolkit security upgrade', () => {
  it('creates, edits, completes and deletes tasks without mutating prior state', () => {
    const initial = reducer(undefined, { type: '@@init' });
    const created = reducer(initial, createTask('New task'));
    expect(initial.tasks).toHaveLength(1);
    const task = created.tasks[0];
    expect(task.title).toBe('New task');
    const edited = reducer(created, editTask({ id: task.id, title: 'Updated task' }));
    expect(created.tasks[0].title).toBe('New task');
    expect(edited.tasks[0].title).toBe('Updated task');
    const completed = reducer(edited, completeTask({ id: task.id }));
    expect(completed.tasks[0].completed).toBe(true);
    expect(reducer(completed, deleteTask({ id: task.id })).tasks).toEqual(initial.tasks);
  });
});
