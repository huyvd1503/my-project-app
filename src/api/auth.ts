// src/api/auth.ts
import { jwtDecode } from 'jwt-decode';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface UserInfo {
  id: number;
  email: string;
  name: string;
  avatar: string;
  user_id: number;
  first_name: string;
  last_name: string;
  code: string;
  is_leader: boolean;
  departments: Array<{
    profile_id: number;
    department_id: number;
    department_name: string;
    position_setting_id: number;
    position_setting_name: string;
    position_detail_setting_id: number;
    position_detail_setting_name: string;
    is_qttb: number;
  }>;
  is_qttb_user: boolean;
}

interface JwtPayload {
  exp: number;
  iat: number;
  info: UserInfo;
  sub: string;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  token: string;
  $statusCode: number;
}

export const loginApi = async (
  email: string,
  password: string
): Promise<{ user: UserInfo; token: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Đăng nhập thất bại');
    }

    const data: LoginResponse = await response.json();

    if (!data.status || !data.token) {
      throw new Error(data.message || 'Đăng nhập thất bại');
    }

    // Giải mã JWT token để lấy thông tin người dùng
    const decodedToken = jwtDecode<JwtPayload>(data.token);

    return {
      user: decodedToken.info,
      token: data.token,
    };
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    throw error;
  }
};

export const logoutApi = async (token: string): Promise<void> => {
  // Nếu API của bạn yêu cầu gọi logout
  try {
    await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Lỗi đăng xuất:', error);
  }
};
