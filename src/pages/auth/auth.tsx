import bcrypt from "bcryptjs";
import { users } from "../../datas/user";

interface User {
    name: string;
    type: string;
    email: string;
    phone: string;
    opportunity: string;
    responsable: string;
    image: string;
    tags: string;
    password: string;
}

interface AuthResponse {
    success: boolean;
    user?: User;
    message: string;
}

export const login = (email: string, password: string): AuthResponse => {
    const user = users.find((u) => u.email === email);

    if (user && bcrypt.compareSync(password, user.password)) {
        localStorage.setItem("auth_user", JSON.stringify(user));
        return { success: true, user, message: "Login successfully" };
    }

    return { success: false, message: "Incorrect information" };
}

export const logout = () => {
    localStorage.removeItem("auth_user");
};

export const getCurrentUser = () => {
    const user = localStorage.getItem("auth_user")
    return user ? JSON.parse(user.toString()) : null;
};