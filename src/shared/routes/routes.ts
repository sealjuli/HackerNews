export const hackersNewsRoutes = {
    root: 'hackerNews',
} as const;

export type RoutesType = (typeof hackersNewsRoutes)[keyof typeof hackersNewsRoutes];