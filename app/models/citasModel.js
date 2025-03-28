const pool = require('../config/db');

class Citas {
    static async findAll()
    {
        const result = await pool.query('SELECT *FROM CITAS');
        return result.rows;
    }

    static async findById(IdCita) {
      const result = await pool.query('SELECT * FROM CITAS WHERE IdCita = $1', [IdCita]);
      return result.rows[0];
    }

    static async create(data) {
      const { Nombre, ApPaterno, ApMaterno, Correo, Telefono, Servicio, FechaAgendada } = data; 
      const result = await pool.query(
          `INSERT INTO CITAS (Nombre, ApPaterno, ApMaterno, Correo, Telefono, Servicio, FechaAgendada) 
           VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
          [Nombre, ApPaterno, ApMaterno, Correo, Telefono, Servicio, FechaAgendada]
      );
      return result.rows[0];
  }
  
  static async update(IdCita, data) {
    const { Nombre, ApPaterno, ApMaterno, Correo, Telefono, Servicio, FechaAgendada } = data;  
    const result = await pool.query(
        `UPDATE CITAS
         SET Nombre = $1, ApPaterno = $2, ApMaterno = $3, Correo = $4, Telefono = $5, Servicio = $6, FechaAgendada = $7 
         WHERE IdCita = $8 RETURNING *`,
        [Nombre, ApPaterno, ApMaterno, Correo, Telefono, Servicio, FechaAgendada, IdCita]  
    );
    return result.rows[0];
}


  static async delete(IdCita) {
    await pool.query('DELETE FROM CITAS WHERE IdCita = $1', [IdCita]);
    return { message: 'Cita deleted successfully' };
  }
}

module.exports = Citas;