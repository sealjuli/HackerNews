export const hackersNewsRoutes = {
    root: 'HackerNews',
} as const;

export type RoutesType = (typeof hackersNewsRoutes)[keyof typeof hackersNewsRoutes];