const userService = require('../services/user');

// PUBLIC_INTERFACE
class UserController {
  /**
   * Get all users
   */
  async list(req, res) {
    return res.status(200).json(userService.getAll());
  }

  /**
   * Get a single user by ID
   */
  async get(req, res) {
    const user = userService.getById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(user);
  }

  /**
   * Create a new user
   */
  async create(req, res) {
    const { name, email } = req.body;
    if (!name || !email)
      return res.status(400).json({ message: 'Missing required fields' });

    const user = userService.create({ name, email });
    return res.status(201).json(user);
  }

  /**
   * Update a user
   */
  async update(req, res) {
    const updated = userService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(updated);
  }

  /**
   * Delete a user
   */
  async delete(req, res) {
    const deleted = userService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    return res.status(204).send();
  }
}

module.exports = new UserController();
