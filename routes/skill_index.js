var express = require('express');
var router = express.Router();
var user3 = require('../model/skill');

router.post('/getskill',async function(req, res, next) {

    try {
      
      const skilldata = await user3.create(req.body);

      res.status(201).json({

        data:skilldata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/getskill/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const skilldata = await user3.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:skilldata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/getskill/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const skilldata = await user3.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:skilldata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


router.get('/getskill',async function(req, res, next) {

  try {
    
    const skilldata = await user3.find();

    res.status(201).json({

      data:skilldata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

module.exports = router;
