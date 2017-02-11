import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD_USER_FOLLOWERS: "Load [User] Followers",
	USER_FOLLOWERS_LOADED: "[User] Followeres Loaded",
	LOAD_USER_FOLLOWING: "Load [User] Following",
	USER_FOLLOWING_LOADED: "[User] Following Loaded",
	FOLLOW_USER: "Follow [User]",
	UPDATE_USER: "Update [User]"
}

export class LoadUserFollowersAction {
	type = ActionTypes.LOAD_USER_FOLLOWERS;
	constructor(public payload: string) {}
}

export class UserFollowersLoadedAction {
	type = ActionTypes.USER_FOLLOWERS_LOADED;
	constructor(public payload: any) {}
}

export class LoadUserFollowingAction {
	type = ActionTypes.LOAD_USER_FOLLOWING;
	constructor(public payload: string) {}
}

export class UserFollowingLoadedAction {
	type = ActionTypes.USER_FOLLOWING_LOADED;
	constructor(public payload: any) {}	
}

export class FollowUserAction {
	type = ActionTypes.FOLLOW_USER;
	constructor(public payload: string) {}	
}