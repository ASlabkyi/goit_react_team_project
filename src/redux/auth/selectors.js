export const selectUser = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectSessionId = state => state.auth.sessionId;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetching = state => state.auth.isFetchingCurrent;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// export const selectSid = state => state.auth.sid;
