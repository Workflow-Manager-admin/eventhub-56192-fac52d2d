//
// User model (schema) for in-memory storage
//

// PUBLIC_INTERFACE
class User {
  /**
   * User model.
   * @param {Object} param0
   * @param {string} param0.id Unique user ID
   * @param {string} param0.name Name
   * @param {string} param0.email Email
   */
  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
module.exports = User;
