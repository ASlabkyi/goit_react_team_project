<<<<<<< HEAD
export const selectUser = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectSessionId = state => state.auth.sessionId;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetching = state => state.auth.isFetchingCurrent;
=======
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
>>>>>>> a219e145141ee454dd81d9262a12853b00d04871
