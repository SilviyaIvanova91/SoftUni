export interface Theme {
  _id: string;
  themeName: string;
  created_at: string;
  userId: {
    username: string;
  };
  subscribers: string[];
}
