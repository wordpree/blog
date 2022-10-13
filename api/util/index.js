import CryptoJS from "crypto-js";

const encryptPwd = (password, key) => {
  return CryptoJS.AES.encrypt(password, key).toString();
};

const decryptPwd = (password, key) => {
  const bytes = CryptoJS.AES.decrypt(password, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export { encryptPwd, decryptPwd };
