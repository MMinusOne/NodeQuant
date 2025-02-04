import crypto from 'crypto';

export const generateMD5Id = (input: string): string => {
  return crypto.createHash('md5').update(input).digest('hex');
};
