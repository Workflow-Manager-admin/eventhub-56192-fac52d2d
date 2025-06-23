const { v4: uuidv4 } = require('uuid');
const Registration = require('../models/registration');

let registrations = []; // In-memory store

// PUBLIC_INTERFACE
class RegistrationService {
  /**
   * List all registrations.
   */
  getAll() {
    return [...registrations];
  }

  /**
   * Get a registration by ID.
   * @param {string} id
   */
  getById(id) {
    return registrations.find(r => r.id === id);
  }

  /**
   * Get registrations by event or user filter.
   * @param {Object} filters {eventId, userId}
   */
  filter(filters) {
    return registrations.filter(r => {
      let ok = true;
      if (filters.eventId) ok = ok && r.eventId === filters.eventId;
      if (filters.userId) ok = ok && r.userId === filters.userId;
      return ok;
    });
  }

  /**
   * Register a user for an event.
   * @param {Object} data
   * @param {string} data.eventId
   * @param {string} data.userId
   * @param {string} [data.status]
   */
  create(data) {
    const reg = new Registration({
      ...data,
      id: uuidv4(),
      status: data.status || 'registered',
      timestamp: new Date().toISOString()
    });
    registrations.push(reg);
    return reg;
  }

  /**
   * Update registration.
   * @param {string} id
   * @param {Object} data
   */
  update(id, data) {
    const idx = registrations.findIndex(r => r.id === id);
    if (idx === -1) return null;
    registrations[idx] = { ...registrations[idx], ...data };
    return registrations[idx];
  }

  /**
   * Delete a registration.
   * @param {string} id
   */
  delete(id) {
    const idx = registrations.findIndex(r => r.id === id);
    if (idx === -1) return false;
    registrations.splice(idx, 1);
    return true;
  }
}

module.exports = new RegistrationService();
