/**
 * @swagger
 * components:
 *   schemas:
 *     Sales:
 *       type: object
 *       required:
 *         - Cliente
 *         - FechaVenta
 *         - Total
 *       properties:
 *         IdVenta:
 *           type: integer
 *           description: ID único de la Venta.
 *         Cliente:
 *           type: string
 *           description: Nombre del Cliente Asociado.
 *         FechaVenta:
 *           type: string
 *           format: date-time
 *           description: Fecha de la Venta.
 *         Total:
 *           type: number
 *           description: Total de la Venta.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de Creación.
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última Actualización.
 *         deleted_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de Eliminación.
 *       example:
 *         IdVenta: 1
 *         Cliente: Zahid 
 *         FechaVenta: "2024-10-22T10:20:30Z"
 *         Total: 75.00
 */

/**
 * @swagger
 * /api/sales:
 *   get:
 *     summary: Obtiene la lista de todas las Ventas.
 *     tags: [SALES (Consult)]
 *     responses:
 *       200:
 *         description: Lista de Ventas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sales'
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/sales:
 *   post:
 *     summary: Crea una Nueva Venta.
 *     tags: [SALES]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Cliente:
 *                 type: string
 *                 description: Nombre del Cliente Asociado.
 *               FechaVenta:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la Venta.
 *               Total:
 *                 type: number
 *                 description: Total de la Venta.
 *             example:
 *               Cliente: Zahid
 *               FechaVenta: "2024-10-22T10:20:30Z"
 *               Total: 75.00
 *     responses:
 *       201:
 *         description: Venta creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sales'
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/sales/{id}:
 *   get:
 *     summary: Obtiene una Venta por su ID.
 *     tags: [SALES]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Venta.
 *     responses:
 *       200:
 *         description: Venta encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sales'
 *       404:
 *         description: Venta no encontrada.
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/sales/{id}:
 *   put:
 *     summary: Actualiza una Venta por su ID.
 *     tags: [SALES]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Venta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Cliente:
 *                 type: string
 *                 description: Nombre del Cliente Asociado.
 *               FechaVenta:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la Venta.
 *               Total:
 *                 type: number
 *                 description: Total de la Venta.
 *             example:
 *               Cliente: Zahid
 *               FechaVenta: "2024-10-30T12:34:56Z"
 *               Total: 150.75
 *     responses:
 *       200:
 *         description: Venta actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sales'
 *       404:
 *         description: Venta no encontrada.
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/sales/{id}:
 *   delete:
 *     summary: Elimina una Venta por su ID.
 *     tags: [SALES]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Venta a eliminar.
 *     responses:
 *       200:
 *         description: Venta eliminada exitosamente.
 *       404:
 *         description: Venta no encontrada.
 *       500:
 *         description: Error en el Servidor.
 */

const express = require('express');
const ventasController = require('../controllers/ventasController');

const router = express.Router();

router.get('/', ventasController.getAllVentas);
router.post('/', ventasController.createVentas);
router.get('/:id', ventasController.getVentasById);
router.put('/:id', ventasController.updateVentas);
router.delete('/:id', ventasController.deleteVentas);

module.exports = router;
