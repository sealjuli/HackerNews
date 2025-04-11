export const hackersNewsRoutes = {
    root: 'hackersNews',
} as const;

export type RoutesType = (typeof hackersNewsRoutes)[keyof typeof hackersNewsRoutes];