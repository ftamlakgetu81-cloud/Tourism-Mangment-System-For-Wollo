const pool = require('../config/db');

// Get all destinations
exports.getDestinations = async (req, res) => {
  try {
    const destinations = await pool.query('SELECT * FROM destinations ORDER BY id ASC');
    res.json(destinations.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error fetching destinations' });
  }
};

// Get all tour packages
exports.getTourPackages = async (req, res) => {
  try {
    const packages = await pool.query('SELECT * FROM tour_packages ORDER BY id ASC');
    res.json(packages.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error fetching tour packages' });
  }
};