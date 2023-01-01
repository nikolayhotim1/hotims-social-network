import { AppSateType } from './reduxStore';
import { UserType } from '../types/types';
import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helpers/objectHelper';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};
type InitialStateType = typeof initialState;
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            };
        }
        case SET_USERS: {
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        default:
            return state;
    }
};
type ActionsTypes =
    FollowSuccessType
    | UnfollowSuccessType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleIsFollowingProgressType;
type FollowSuccessType = {
    type: typeof FOLLOW,
    userId: number
};
export const followSuccess = (userId: number): FollowSuccessType => (
    { type: FOLLOW, userId }
);
type UnfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number
};
export const unfollowSuccess = (userId: number): UnfollowSuccessType => (
    { type: UNFOLLOW, userId }
);
type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
};
export const setUsers = (users: Array<UserType>): SetUsersType => (
    { type: SET_USERS, users }
);
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
};
export const setCurrentPage = (currentPage: number): SetCurrentPageType => (
    { type: SET_CURRENT_PAGE, currentPage }
);
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => (
    { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
);
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => (
    { type: TOGGLE_IS_FETCHING, isFetching }
);
type ToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
};
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressType => (
    { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
);
type ThunkType = ThunkAction<Promise<void>, AppSateType, unknown, ActionsTypes>;
export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    };
};
type DispatchType = Dispatch<ActionsTypes>;
type ActionCreatorType = (userId: number) => FollowSuccessType | UnfollowSuccessType;
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: ActionCreatorType) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.getNewFollowedUser.bind(userId), followSuccess);
    };
};
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.getNewUnfollowedUser.bind(userId), unfollowSuccess);
    };
};
export default usersReducer;