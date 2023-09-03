// Version: 1.0.2
// Serial: RSTU7788

const PDF = require('../../models/pdfModel');

exports.getMostViewedPDFs = async (req, res) => {
    try {
        // This is a placeholder. In a real-world scenario, you'd have a view count or similar metric in your PDF model.
        const pdfs = await PDF.find().sort({ createdAt: -1 }).limit(10);
        res.send(pdfs);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch analytics data' });
    }
};
