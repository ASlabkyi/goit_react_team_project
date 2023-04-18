export const selectUser = state => state.auth.user.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectSessionId = state => state.auth.sessionId;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetching = state => state.auth.isFetchingCurrent;
