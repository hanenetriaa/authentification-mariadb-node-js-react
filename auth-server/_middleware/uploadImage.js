/** @format */

//L'importation de multer
const multer = require("multer");
//Déclaration la destination du stockage des images leurs noms.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./storages");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
//Filtrage des images par type
const fileFilter = (req, file, cb) => {
  //Cas de succès
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
    //Cas d'échec
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
//Exportation de multer et définitions des tailles limites

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { _fileSize: 1024 * 1024 * 1024 * 10 },
});
