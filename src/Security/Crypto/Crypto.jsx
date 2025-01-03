import CryptoJS from 'crypto-js';

//Encrypt token
export function encryptData(data) {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_TOKEN_SECRET_KEY).toString();
    return ciphertext;
};


//Decrypt token
export function decryptData(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_TOKEN_SECRET_KEY);
    const originalData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return originalData;
};