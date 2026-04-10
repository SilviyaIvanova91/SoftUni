export interface Routes {
  [key: string]: () => Promise<void>;
}

// {
//     '/posts': renderPostsView,
//     '/users': renderUsersView,
// }
