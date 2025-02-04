import crypto from 'crypto';

export const generateMD5Id = (): string => {
  const seed = Math.random().toString();
  return crypto.createHash('md5').update(seed).digest('hex');
};
