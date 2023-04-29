export type Task = {
    id: number;
    name: string;
    icon: string;
    projectId: number;
    ownerId: number;
    assigneeIds?: number[];
    status: number;
};
