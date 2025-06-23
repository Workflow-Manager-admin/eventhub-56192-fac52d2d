const registrationService = require('../services/registration');

// PUBLIC_INTERFACE
class RegistrationController {
  /**
   * Get all registrations
   */
  async list(req, res) {
    if (req.query.eventId || req.query.userId) {
      // filter by event or user
      return res.status(200).json(registrationService.filter(req.query));
    }
    return res.status(200).json(registrationService.getAll());
  }

  /**
   * Get a registration by ID
   */
  async get(req, res) {
    const reg = registrationService.getById(req.params.id);
    if (!reg) return res.status(404).json({ message: 'Registration not found' });
    return res.status(200).json(reg);
  }

  /**
   * Create a new registration
   */
  async create(req, res) {
    const { eventId, userId, status } = req.body;
    if (!eventId || !userId)
      return res.status(400).json({ message: 'Missing eventId or userId' });

    // OPTIONAL: Prevent registering twice for the same event
    const allRegs = registrationService.filter({ eventId, userId });
    if (allRegs.length > 0)
      return res.status(409).json({ message: 'User already registered for event' });

    const reg = registrationService.create({ eventId, userId, status });
    return res.status(201).json(reg);
  }

  /**
   * Update registration
   */
  async update(req, res) {
    const updated = registrationService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Registration not found' });
    return res.status(200).json(updated);
  }

  /**
   * Delete registration
   */
  async delete(req, res) {
    const deleted = registrationService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Registration not found' });
    return res.status(204).send();
  }
}

module.exports = new RegistrationController();
