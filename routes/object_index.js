var express = require('express');
var router = express.Router();
var user4 = require('../model/object');

router.post('/getobject',async function(req, res, next) {

    try {
      
      const objectdata = await user4.create(req.body);

      res.status(201).json({

        data:objectdata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/getobject/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const objectdata = await user4.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:objectdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/getobject/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const objectdata = await user4.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:objectdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


router.get('/getobject',async function(req, res, next) {

  try {
    
    const objectdata = await user4.find();

    res.status(201).json({

      data:objectdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

module.exports = router;
