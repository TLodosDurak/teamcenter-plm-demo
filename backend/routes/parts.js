
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/parts.json');

function readParts() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function writeParts(parts) {
    fs.writeFileSync(dataPath, JSON.stringify(parts, null, 2));
}

router.get('/', (req, res) => {
    const parts = readParts();
    res.json(parts);
});

router.get('/:id', (req, res) => {
    const parts = readParts();
    const part = parts.find(p => p.id === req.params.id);
    part ? res.json(part) : res.status(404).send('Part not found');
});

router.post('/:id/review', (req, res) => {
    const parts = readParts();
    const part = parts.find(p => p.id === req.params.id);
    if (part) {
        part.status = "In Review";
        writeParts(parts);
        res.json({ message: "Status updated to In Review." });
    } else {
        res.status(404).send("Part not found");
    }
});

router.post('/:id/approve', (req, res) => {
    const parts = readParts();
    const part = parts.find(p => p.id === req.params.id);
    if (part) {
        if (part.riskLevel === "High") {
            res.json({ message: "High risk part requires validation." });
        } else {
            part.status = "Released";
            writeParts(parts);
            res.json({ message: "Part released." });
        }
    } else {
        res.status(404).send("Part not found");
    }
});

module.exports = router;
