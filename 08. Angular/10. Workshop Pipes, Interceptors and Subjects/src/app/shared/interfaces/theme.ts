export interface Theme {
  _id: string;
  themeName: string;
  created_at: string;
  userId: {
    username: string;
  };
  subscribers: string[];
}

export interface CreateThemeData {
  themeName: string;
  postText: string;
}
