const eventService = require('../services/event');

// PUBLIC_INTERFACE
class EventController {
  /**
   * Get all events
   */
  async list(req, res) {
    return res.status(200).json(eventService.getAll());
  }

  /**
   * Get a single event by ID
   */
  async get(req, res) {
    const event = eventService.getById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    return res.status(200).json(event);
  }

  /**
   * Create a new event
   */
  async create(req, res) {
    // Basic validation
    const { title, description, startDate, endDate, location, organizer } = req.body;
    if (!title || !startDate || !endDate || !location)
      return res.status(400).json({ message: 'Missing required fields' });

    const event = eventService.create({
      title,
      description,
      startDate,
      endDate,
      location,
      organizer
    });
    return res.status(201).json(event);
  }

  /**
   * Update an event
   */
  async update(req, res) {
    const updated = eventService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Event not found' });
    return res.status(200).json(updated);
  }

  /**
   * Delete an event
   */
  async delete(req, res) {
    const deleted = eventService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Event not found' });
    return res.status(204).send();
  }
}

module.exports = new EventController();
