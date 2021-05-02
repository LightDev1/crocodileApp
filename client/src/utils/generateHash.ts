import crypto, { Hash } from 'crypto';

export const generateMD5 = (): Hash => {
    return crypto.createHash('md5');
};