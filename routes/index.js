var express = require('express');
const Imagekit=require("./imagekit");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload",async function(req,res,next){
  console.log(req.files);
  const {url,fileId} =await Imagekit.upload({
    file:req.files.image.data,
    fileName:req.files.image.name,
  })

console.log(url,fileId)
})

module.exports = router;
