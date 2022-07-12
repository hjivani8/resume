var express = require('express');
var router = express.Router();
var user2 = require('../model/exprience');

router.post('/getexprience',async function(req, res, next) {

    try {
      
      const expriencedata = await user2.create(req.body);

      res.status(201).json({

        data:expriencedata

      })

    } catch (error) {
      
      res.send(error.message);

    }

});

router.patch('/getexprience/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const expriencedata = await user2.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:expriencedata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

router.delete('/getexprience/:id',async function(req, res, next) {

  console.log(req.params);
  try {
    
    const expriencedata = await user2.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:expriencedata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});


router.get('/getexprience',async function(req, res, next) {

  try {
    
    const expriencedata = await user2.find();

    res.status(201).json({

      data:expriencedata

    })

  } catch (error) {
    
    res.send(error.message);

  }

});

module.exports = router;
