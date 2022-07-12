var express = require('express');
var router = express.Router();
var user5 = require('../model/reference');

router.post('/getreference',async function(req, res, next) {

    try {
      
      const referencedata = await user5.create(req.body);

      res.status(201).json({

        data:referencedata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/getreference/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const referencedata = await user5.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:referencedata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/getreference/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const referencedata = await user5.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:referencedata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


router.get('/getreference',async function(req, res, next) {

  try {
    
    const referencedata = await user5.find();

    res.status(201).json({

      data:referencedata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

module.exports = router;
