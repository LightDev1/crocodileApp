import express from "express";
import cloudinary from '../core/cloudinary';

class UploadFileController {
    upload(req: express.Request, res: express.Response) {
        const file = req.file;

        cloudinary.uploader.upload_stream({ resource_type: 'auto', gravity: "face", height: 150, width: 150, crop: "thumb" }, (error, result) => {
            if (error || !result) {
                return res.status(500).json({
                    status: 'error',
                    message: error || 'Upload error',
                });
            }

            res.status(201).json({
                url: result.url,
                size: Math.round(result.bytes / 1024),
                width: result.width,
                height: result.height,
            });
        }).end(file.buffer);
    }
}

export const uploadFileCtrl = new UploadFileController();