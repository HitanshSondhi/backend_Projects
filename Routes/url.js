const express=require('express');
const{generateShortUrl}=require('../controllers/url')
const router=express.Router();

router.post('/',generateShortUrl)
router.get('/analytics/:shortId',)
module.exports=router;