export const ApiConstants = {
  TODO: {
    ADD: () => {
      return '/todo';
    },
    FIND_NOT_COMPLETED: () => {
      return '/todo/findAllNotCompleted';
    },
    FIND_COMPLETED: () => {
      return '/todo/findAllCompleted';
    },
    MARK_COMPLETE: (todoId: number) => {
      return `/todo?todoId=${todoId}`;
    },
    DELETE: (todoId: number) => {
      return `/todo?todoId=${todoId}`;
    },
  },
  USER: {
    SIGN_UP: '/user/register',
    FIND_ALL: '/user',
    DELETE: (userId: number) => {
      return `/todo?todoId=${userId}`;
    },
    AUTHENTICATED_USER: '/user/AuthenticateUser',
  },
  LOGIN: '/auth/login',
};
