import { json } from '@sveltejs/kit';
import type { Project } from '$lib/types';

const projects: Project[] = [
    {
        id: 1,
        projectName: 'Project 1',
        projectColor: 'red'
    },
    {
        id: 2,
        projectName: 'Project 2',
        projectColor: 'blue'
    }
];

export function GET() {
    return json(projects);
}
