// Version: 1.0.1
// Serial: YZAB2233

const PDF = require('../../models/pdfModel');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const Tesseract = require('tesseract.js');

exports.uploadPDF = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ error: 'No PDF uploaded' });
    }

    try {
        const textContent = await Tesseract.recognize(
            req.file.path,
            'eng',
            { logger: m => console.log(m) }
        );

        const pdf = new PDF({
            title: req.file.originalname,
            path: req.file.path,
            textContent: textContent.data.text,
            uploadedBy: req.user._id
        });

        await pdf.save();
        res.status(201).send({ message: 'PDF uploaded and processed successfully', pdf });
    } catch (error) {
        res.status(500).send({ error: 'Failed to process PDF' });
    }
};

exports.getPdfTextContent = async (req, res) => {
    try {
        const pdf = await PDF.findById(req.params.id);
        if (!pdf) {
            return res.status(404).send({ error: 'PDF not found' });
        }
        res.send({ textContent: pdf.textContent });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch PDF content' });
    }
};
