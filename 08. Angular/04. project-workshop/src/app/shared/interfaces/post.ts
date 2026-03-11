export interface Post {
  _id: string;
  text: string;
  userId: {
    username: string;
  };
  themeId: {
    themeName: string;
  };
  created_at: string;
}
