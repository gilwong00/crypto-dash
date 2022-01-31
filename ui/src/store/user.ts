import create from 'zustand';
import { AuthUser } from '../@types';

interface UserStore {
  user: AuthUser | null;
  setUser: (user: AuthUser) => void;
}

const userStore = create<UserStore>(set => ({
  user: null,
  setUser: (user: AuthUser) => set({ user })
}));

export default userStore;
