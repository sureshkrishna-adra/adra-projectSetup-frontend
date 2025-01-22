import CryptoJS from 'crypto-js';

//Encrypt token
export function encryptData(data) {
    const ciphertextData = typeof data === "number" ? data?.toString() : data
    const ciphertext = CryptoJS.AES.encrypt(ciphertextData, process.env.REACT_APP_TOKEN_SECRET_KEY).toString();
    return ciphertext;
};


//Decrypt token
export function decryptData(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_TOKEN_SECRET_KEY);
    const originalData = bytes.toString(CryptoJS.enc.Utf8);
    if(originalData){
        return originalData;
    }else{
        return ''
    }
};