//
// Event model (schema) for in-memory storage
//

// PUBLIC_INTERFACE
class Event {
  /**
   * Event model.
   * @param {Object} param0
   * @param {string} param0.id Unique ID for event
   * @param {string} param0.title Event title
   * @param {string} param0.description Event description
   * @param {string} param0.startDate ISO string
   * @param {string} param0.endDate ISO string
   * @param {string} param0.location Event location
   * @param {string} [param0.organizer] Organizer userId
   */
  constructor({ id, title, description, startDate, endDate, location, organizer }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.organizer = organizer || '';
  }
}
module.exports = Event;
