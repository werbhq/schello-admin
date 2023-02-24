import CryptoJS from "crypto-js";
import { authProvider } from "../provider/firebase";
import { ReportAPI } from "../api/report";

const PASS_KEY = "reports_key";

export class ReportsPassAuth {
  static checkPasswordInLocalStore() {
    const key = localStorage.getItem(PASS_KEY);
    return !!key;
  }

  static async checkPassword() {
    return await ReportAPI.AUTH(await this.getPassword());
  }

  static resetPassword() {
    localStorage.removeItem(PASS_KEY);
  }

  static async getPassword() {
    const permissions = await authProvider.getPermissions();
    const key = localStorage.getItem(PASS_KEY);
    if (!key) return null;

    return CryptoJS.AES.decrypt(key, permissions.user_id).toString(
      CryptoJS.enc.Utf8
    );
  }

  static async getHeaders() {
    const permissions = await authProvider.getPermissions();
    const key = localStorage.getItem(PASS_KEY);
    if (!key) return null;

    const password = CryptoJS.AES.decrypt(key, permissions.user_id).toString(
      CryptoJS.enc.Utf8
    );

    return {
      headers: {
        authorization: password,
      },
    };
  }

  static async setPassword(password) {
    const permissions = await authProvider.getPermissions();
    const data = CryptoJS.AES.encrypt(password, permissions.user_id);
    localStorage.setItem(PASS_KEY, data);
  }
}
