require('dotenv').config();
const express = require('express');
const session = require('express-session')
const path = require('path');
const app  = express();
const configViewEngine = require('./config/configView');
const webRouter = require('./routes/web');
const connection = require('./config/database');
const db = require('./config/database')
const { log } = require('console');
// const fileUpload = require('express-fileupload');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer')
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8088;

configViewEngine(app);
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

app.use ( webRouter);

app.listen(port,hostname, () => console.log(`example at  http://localhost:${port}`) )







// const multer  = require('multer')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })

// const upload = multer({storage})
// app.post('/api/upload-file',upload.single('file'), (req, res) => {
//     res.json(req.file);   
// });

//---------




//-------------
// app.post('/file-upload', upload.single('file'), async (req, res) => {
//    const file = req.file;

//    if (!file) {
//        return res.status(400).send({ message: 'Please upload a file.' });
//    }

//    try {
//        // Insert the file name into the `files` table in the database
//        const sqlInsert = "INSERT INTO `files`(`name`) VALUES (?)";
//        const insertResult = await db.query(sqlInsert, [req.file.filename]);

//        // Fetch the last inserted file entry from the database
//        const sqlSelect = "SELECT * FROM `files` WHERE id = ?";
//        const fileId = insertResult.insertId; // Assuming the insert operation returns an object with `insertId`
//        const [fileEntry] = await db.query(sqlSelect, [fileId]);

//        // Construct the URL for the uploaded file
//        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

//        // Send a success response, including the file URL
//        return res.send({
//            message: 'File uploaded successfully.',
//            file: {
//                originalName: file.originalname,
//                mimetype: file.mimetype,
//                size: file.size,
//                url: fileUrl, // Include the file URL in the response
//            },
//            fileEntry
//        });
//    } catch (err) {
//        // Handle any errors
//        console.error('Database error:', err);
//        return res.status(500).send({ message: 'Database error' });
//    }
// });
//<img src="{url}" alt="{file.originalName}">


//----------------------------//

// app.use ('/', webRouter);

// // enable CORS
// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: true}));
// // serving static files

// app.use('/uploads', express.static('uploads'));
 

// // handle storage using multer
// var storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//       cb(null, 'uploads');
//    },
//    filename: function (req, file, cb) {
//       cb(null, `${Date.now()}-${file.originalname}`);
//    }
// });

// var upload = multer({ storage: storage });

// // upload image file in mysql db and app folder
// app.post('/file-upload', upload.single('file'), async (req, res) => {
//     const file = req.file;
 
//     if (!file) {
//         return res.status(400).send({ message: 'Please upload a file.' });
//     }
 
//     try {
//         // Insert the file name into the `files` table in the database
//         const sqlInsert = "INSERT INTO `files`(`name`) VALUES (?)";
//         const insertResult = await db.query(sqlInsert, [req.file.filename]);
 
//         // Fetch the last inserted file entry from the database
//         const sqlSelect = "SELECT * FROM `files` WHERE id = ?";
//         const fileId = insertResult.insertId; // Assuming the insert operation returns an object with `insertId`
//         const [fileEntry] = await db.query(sqlSelect, [fileId]);
 
//         // Print the file information from the database
//         console.log('New file entry in database:', fileEntry);
 
//         // Send a success response
//         return res.send({ message: 'File uploaded successfully.', file, fileEntry });
//     } catch (err) {
//         // Handle any errors
//         console.error('Database error:', err);
//         return res.status(500).send({ message: 'Database error' });
//     }
//  });

//------------//