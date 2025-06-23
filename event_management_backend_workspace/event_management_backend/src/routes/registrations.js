const express = require('express');
const controller = require('../controllers/registration');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Registrations
 *   description: Registration management
 */

/**
 * @swagger
 * /registrations:
 *   get:
 *     summary: Get registrations (optionally filter by event/user)
 *     tags: [Registrations]
 *     parameters:
 *       - in: query
 *         name: eventId
 *         schema:
 *           type: string
 *         required: false
 *         description: Event ID
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: false
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of registrations
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /registrations:
 *   post:
 *     summary: Register a user for an event
 *     tags: [Registrations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventId: { type: string }
 *               userId: { type: string }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Registration created
 *       400:
 *         description: Validation error
 *       409:
 *         description: Already registered
 */
router.post('/', controller.create.bind(controller));

/**
 * @swagger
 * /registrations/{id}:
 *   get:
 *     summary: Get a registration by ID
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Registration ID
 *     responses:
 *       200:
 *         description: The registration
 *       404:
 *         description: Not found
 */
router.get('/:id', controller.get.bind(controller));

/**
 * @swagger
 * /registrations/{id}:
 *   put:
 *     summary: Update a registration
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Registration ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated registration
 *       404:
 *         description: Not found
 */
router.put('/:id', controller.update.bind(controller));

/**
 * @swagger
 * /registrations/{id}:
 *   delete:
 *     summary: Delete a registration
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Registration ID
 *     responses:
 *       204:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
router.delete('/:id', controller.delete.bind(controller));

module.exports = router;
