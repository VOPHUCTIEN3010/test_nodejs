const connection = require("../config/database");
const { getAllRecord, getStudentById, updateStudentById, deleteStudentNyId, getRecord } = require("../services/CRUDservices");

const getHomepage = async (req, res) => {
    let results = await getAllRecord();
    return res.render('index.ejs', {listStudents : results})
}

const postCreateUser = async (req, res) => {
    let {fullname, address, phone, classname} = req.body;
    
    let[results, fields] = await connection.query( 
        `INSERT INTO students (fullname, address, phone, classname) VALUES (?, ?, ?, ?)`, [fullname, address, phone, classname], 
    ) 
    return res.redirect('/');
} 

const getCreatePages = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePages = async (req, res) => {
    const studentsId = req.params.id;
    let student = await getStudentById(studentsId);
    res.render('edit.ejs', {studentEdit : student})
}

const postUpdateUser = async (req, res) => {
    let fullname = req.body.fullname;
    let address = req.body.address;
    let phone = req.body.phone;
    let classname = req.body.classname;
    let studentId = req.body.studentId;
    await updateStudentById(fullname, address, phone, classname, studentId);
    return res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const studentsId = req.params.id;
    let student = await getStudentById(studentsId);
     res.render('delete.ejs', {studentEdit : student});
}


const postRemoveUser = async (req, res) => {     
    const id = req.body.studentId;
    await deleteStudentNyId(id);
    res.redirect('/');
}

const getViewPages = async (req, res) => {
    let studentId = req.params.id;
    let results = await getRecord(studentId);
    return res.render('view.ejs', {studentView : results});
}

module.exports = {
    getHomepage, postCreateUser, getCreatePages, getUpdatePages, postUpdateUser, postDeleteUser, postRemoveUser, getViewPages
}
