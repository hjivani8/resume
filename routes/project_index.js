var express = require('express');
var router = express.Router();
var user6 = require('../model/project');

router.post('/getproject',async function(req, res, next) {

    try {
      
      const projectdata = await user6.create(req.body);

      res.status(201).json({

        data:projectdata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/getproject/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const projectdata = await user6.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:projectdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/getproject/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const projectdata = await user6.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:projectdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


router.get('/getproject',async function(req, res, next) {

  try {
    
    const projectdata = await user6.find();

    res.status(201).json({

      data:projectdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

module.exports = router;
