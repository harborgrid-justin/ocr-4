// Version: 1.0.1
// Serial: CDEF3344

const express = require('express');
const multer = require('multer');
const pdfController = require('../../controllers/pdf/pdfController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/upload', upload.single('pdf'), pdfController.uploadPDF);
router.get('/:id/content', pdfController.getPdfTextContent);

module.exports = router;
