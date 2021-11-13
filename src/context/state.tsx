export type UserType = {
    avatar: string;
    name: string;
    username: boolean;
    id: string
};
export interface GlobalState {
    user: UserType | null;
}
export const initGlobalState: GlobalState = {
    user: null,
};
