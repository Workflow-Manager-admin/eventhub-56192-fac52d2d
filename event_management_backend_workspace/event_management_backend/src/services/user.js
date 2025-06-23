const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');

let users = []; // In-memory user store

// PUBLIC_INTERFACE
class UserService {
  /**
   * List all users.
   */
  getAll() {
    return [...users];
  }

  /**
   * Get a user by ID.
   * @param {string} id
   */
  getById(id) {
    return users.find(u => u.id === id);
  }

  /**
   * Create a new user.
   * @param {Object} data User data
   */
  create(data) {
    const user = new User({ ...data, id: uuidv4() });
    users.push(user);
    return user;
  }

  /**
   * Update a user.
   * @param {string} id
   * @param {Object} data
   */
  update(id, data) {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...data };
    return users[idx];
  }

  /**
   * Delete a user.
   * @param {string} id
   */
  delete(id) {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    users.splice(idx, 1);
    return true;
  }
}

module.exports = new UserService();
