//
// Registration model (schema) for in-memory storage
//

// PUBLIC_INTERFACE
class Registration {
  /**
   * Registration model.
   * @param {Object} param0
   * @param {string} param0.id Unique Registration ID
   * @param {string} param0.eventId Event ID
   * @param {string} param0.userId User ID
   * @param {string} param0.status Registration status
   * @param {string} param0.timestamp ISO timestamp of registration
   */
  constructor({ id, eventId, userId, status, timestamp }) {
    this.id = id;
    this.eventId = eventId;
    this.userId = userId;
    this.status = status;
    this.timestamp = timestamp;
  }
}
module.exports = Registration;
