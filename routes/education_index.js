var express = require('express');
var router = express.Router();
var user1 = require('../model/education');

router.post('/geteducation',async function(req, res, next) {

    try {
      
      const educationdata = await user1.create(req.body);

      res.status(201).json({

        data:educationdata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/geteducation/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const educationdata = await user1.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:educationdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/geteducation/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const educationdata = await user1.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:educationdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


router.get('/geteducation',async function(req, res, next) {

  try {
    
    const educationdata = await user1.find();

    res.status(201).json({

      data:educationdata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


module.exports = router;
