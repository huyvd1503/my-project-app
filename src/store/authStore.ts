// src/store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginApi, logoutApi } from '../api/auth';
import type { UserInfo } from '../api/auth';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number;
  iat: number;
  info: UserInfo;
}

type AuthStore = {
  user: UserInfo | null;
  token: string | null;
  tokenExpiry: number | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  checkTokenExpiration: () => boolean;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      tokenExpiry: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
          const response = await loginApi(email, password);

          // Lấy thông tin hết hạn từ token
          const decodedToken = jwtDecode<JwtPayload>(response.token);
          const expiryTime = decodedToken.exp * 1000; // Chuyển sang milliseconds
          console.log('decodedToken', decodedToken);
          set({
            user: response.user,
            token: response.token,
            tokenExpiry: expiryTime,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'Đăng nhập thất bại',
          });
          throw error;
        }
      },

      logout: async () => {
        try {
          const token = get().token;
          if (token) {
            await logoutApi(token);
          }
        } catch (error) {
          console.error('Lỗi đăng xuất:', error);
        } finally {
          set({
            user: null,
            token: null,
            tokenExpiry: null,
            isAuthenticated: false,
          });
        }
      },

      checkTokenExpiration: () => {
        const tokenExpiry = get().tokenExpiry;
        if (!tokenExpiry) return false;

        // Còn hạn nếu thời gian hết hạn > thời gian hiện tại
        const isValid = tokenExpiry > Date.now();

        // Nếu token đã hết hạn, tự động đăng xuất
        if (!isValid && get().isAuthenticated) {
          get().logout();
        }

        return isValid;
      },
    }),
    {
      name: 'auth-store',
    }
  )
);

export default useAuthStore;
