const { v4: uuidv4 } = require('uuid');
const Event = require('../models/event');

let events = []; // In-memory event store

// PUBLIC_INTERFACE
class EventService {
  /**
   * List all events.
   */
  getAll() {
    return [...events];
  }

  /**
   * Get an event by ID.
   * @param {string} id
   */
  getById(id) {
    return events.find(e => e.id === id);
  }

  /**
   * Create a new event.
   * @param {Object} data Event data
   */
  create(data) {
    const event = new Event({ ...data, id: uuidv4() });
    events.push(event);
    return event;
  }

  /**
   * Update an event.
   * @param {string} id
   * @param {Object} data
   */
  update(id, data) {
    const idx = events.findIndex(e => e.id === id);
    if (idx === -1) return null;
    events[idx] = { ...events[idx], ...data };
    return events[idx];
  }

  /**
   * Delete an event.
   * @param {string} id
   */
  delete(id) {
    const idx = events.findIndex(e => e.id === id);
    if (idx === -1) return false;
    events.splice(idx, 1);
    return true;
  }
}

module.exports = new EventService();
