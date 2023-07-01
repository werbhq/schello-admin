import CryptoJS from "crypto-js";
import { authProvider } from "provider/firebase";
import ReportAPI from "api/report";

const PASS_KEY = "reports_key";

class ReportsPassAuth {
  static isPasswordInLocalStore() {
    const key = localStorage.getItem(PASS_KEY);
    return !!key;
  }

  static async checkPassword() {
    return await ReportAPI.AUTH();
  }

  static resetPassword() {
    localStorage.removeItem(PASS_KEY);
  }

  static async getPassword() {
    const user = await authProvider.getAuthUser();
    const key = localStorage.getItem(PASS_KEY);
    if (!key) return null;

    return CryptoJS.AES.decrypt(key, user.uid).toString(CryptoJS.enc.Utf8);
  }

  static async getHeaders() {
    const authorization = await authProvider.getJWTToken();

    const key = localStorage.getItem(PASS_KEY);
    if (!key) return null;

    return {
      headers: {
        authorization,
        "x-access-key": key,
      },
    };
  }

  static async setPassword(password: string) {
    const permissions = await authProvider.getAuthUser();
    const data = CryptoJS.AES.encrypt(password, permissions.uid).toString();
    localStorage.setItem(PASS_KEY, data);
  }
}

export default ReportsPassAuth;
