const Travel = require('../models/TravelModel');

const TravelController = {
    // Get all travel records
    getAllTravels: async (req, res) => {
        try {
            const travels = await Travel.find();
            res.status(200).json(travels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single travel record by ID
    getTravelById: async (req, res) => {
        try {
            const travel = await Travel.findById(req.params.id);
            if (!travel) {
                return res.status(404).json({ message: 'Travel not found' });
            }
            res.status(200).json(travel);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new travel record
    createTravel: async (req, res) => {
        const travel = new Travel(req.body);
        try {
            const newTravel = await travel.save();
            res.status(201).json(newTravel);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update an existing travel record
    updateTravel: async (req, res) => {
        try {
            const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedTravel) {
                return res.status(404).json({ message: 'Travel not found' });
            }
            res.status(200).json(updatedTravel);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a travel record
    deleteTravel: async (req, res) => {
        try {
            const deletedTravel = await Travel.findByIdAndDelete(req.params.id);
            if (!deletedTravel) {
                return res.status(404).json({ message: 'Travel not found' });
            }
            res.status(200).json({ message: 'Travel deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = TravelController;