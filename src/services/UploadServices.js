// Import thư viện fs và path
const fs = require('fs');
const path = require('path');

// Định nghĩa lớp UploadService
class UploadService {
    constructor(uploadDir) {
        this.uploadDir = uploadDir;
    }

    async saveFile(file, option = null) {
        try {
            const timestamp = Date.now();
            const fileName = `${timestamp}_${file.originalname}`;
            const filePath = path.join("public/upload/", this.uploadDir, fileName);
            
            // Trả về một lời hứa để xử lý quá trình di chuyển tệp tin
            return new Promise((resolve, reject) => {
                fs.rename(file.path, filePath, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(filePath);
                    }
                });
            });
        } catch (error) {
            console.error(error);
        }
    }

    async deleteFile(filePath) {
        return new Promise((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = UploadService;

