// Defining the type for user payload
export type UserType = {
    avatar: string;
    name: string;
    username: boolean;
    id: string
};
// Defining the type UserType in user const, if not exist the values then return the type null
export interface GlobalState {
    user: UserType | null;
}
// Exporting this initGlobalState with type GlobalState
export const initGlobalState: GlobalState = {
    user: null,
};
