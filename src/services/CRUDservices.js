const connection = require('../config/database') ;

const getAllRecord = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM students`);
    return results;
}

const getRecord = async (studentId) => {
    let [results, fields] = await connection.query(`SELECT * FROM students WHERE id = ?`, [studentId]);
    return results;
}

const getStudentById = async (studentsId) => {
    let [results, fields] = await connection.query(`SELECT * FROM students  WHERE id = ?`, [studentsId]);
    let student = results && results.length > 0 ? results[0] : [];
    return student;
}

const updateStudentById = async (fullname, address, phone, classname, photo, studentId) => { 
    let[results, fields] = await connection.query( 
        `UPDATE students 
        SET fullname = ?, address = ?, phone = ?, classname = ?, photo = ? 
        WHERE id = ?`, 
        [fullname, address, phone, classname, photo, studentId], 
    ) 
}

const deleteStudentById = async (id) => { 
    let[results, fields] = await connection.query( 
        `DELETE FROM students WHERE id = ? `, [id], 
    ) 
}

module.exports = {
    getAllRecord, getStudentById, updateStudentById, deleteStudentById, getRecord
}