import { hash, genSalt, compare } from "bcryptjs";


export const hashPassword = async (plainPassword: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      genSalt((err, salt) => {
        if (err) {
          reject(err);
        }
  
        hash(plainPassword, salt, (error, hashedVal) => {
          if (error) {
            reject(error);
          }
  
          resolve(hashedVal);
        });
      });
    });
  };


export const verifyPassword = async (
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      compare(plainPassword, hashedPassword, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  };

