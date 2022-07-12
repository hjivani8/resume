var express = require('express');
var router = express.Router();
var user = require('../model/personal');

/* GET home page. */
router.post('/getpersonal',async function(req, res, next) {

    try {
      
      const personaldata = await user.create(req.body);

      res.status(201).json({

        data:personaldata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/getpersonal/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const personaldata = await user.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:personaldata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/getpersonal/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const personaldata = await user.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:personaldata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});



router.get('/getpersonal',async function(req, res, next) {

  try {
    
    const personaldata = await user.find();

    res.status(201).json({

      data:personaldata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


module.exports = router;
