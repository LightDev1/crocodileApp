import express from "express";
import { v2 as cloudinary } from 'cloudinary';

class UploadFileController {
    upload(req: express.Request, res: express.Response) {
        const file = req.file;
        const filePath = '../' + file.path;

        cloudinary.uploader.upload(filePath, function (error, result) {
            if (error || !result) {
                return res.status(500).json({
                    status: 'error',
                    message: error || 'Upload error',
                });
            }
        });
    }
}

export const uploadFileCtrl = new UploadFileController();