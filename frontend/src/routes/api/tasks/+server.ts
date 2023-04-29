import { json } from '@sveltejs/kit';
import type { Task } from '$lib/types';
import task1pic from '$lib/assets/task-1.png';
import task2pic from '$lib/assets/task-2.png';
import task3pic from '$lib/assets/task-3.png';

const tasks: Task[] = [
    {
        id: 1,
        name: 'Prepare API docs',
        icon: task1pic,
        projectId: 1,
        ownerId: 3,
        assigneeIds: [1],
        status: 0
    },
    {
        id: 2,
        name: 'Implement database for user authentication',
        icon: task2pic,
        projectId: 2,
        ownerId: 2,
        assigneeIds: [1],
        status: 0
    },
    {
        id: 3,
        name: 'Build login functionality',
        icon: task3pic,
        projectId: 2,
        ownerId: 2,
        assigneeIds: [1],
        status: 0
    }
];

export function GET() {
    return json(tasks);
}
