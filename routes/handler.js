const express = require('express');
const router = express.Router();
const todaycurrentdate=require("../models/dateparser.js");
const corsMiddle =require("../models/corsmodule");

const app = express();
app.use(corsMiddle);


// Today List of Patients

router.get('/drdler/clinic/patients',async (req, res) => {
   
    if(req.isAuthenticated()){

    const patientdet = Schemas.Patientdef; 
    const patientDetails = await patientdet.find({ lastvisit:todaycurrentdate.todaydate
    },(err, patientdetData) => {
        if (err) throw err;
        if (patientdetData) {
          
            res.end(JSON.stringify(patientdetData));

        } else {
            res.end();
        }
    });
} else{
    res.redirect("http://drdler.com/drdler/clinic/services");
}
});



// Yesterday List of Patients


// Adding Patients

router.post('/addpatient', async (req, res) => {
    if(req.isAuthenticated()){
    const patientinfo = req.body.nameInput;
    const infobirthdate = req.body.birthInput;
    const infogender = req.body.optradio;
    const paymentus = req.body.payInput;
    const mobile = req.body.mobinput;

    const newpatientinfo = new Schemas.Patientdef({
        fullname: patientinfo,
        birthdate: infobirthdate,
        gender:infogender,
        phonenumber:mobile,
        payments:[
            {
                amount:paymentus
            }
        ]       
                

    });

    try {
        newpatientinfo.save((err, newpatientinfoResults) => {
            if (err)
            res.end("Some Thing Went Wrong try again!");
            res.redirect('http://drdler.com/drdler/clinic/secinterface');
            res.end();
        });
    } catch(err) {
        res.send(err);
        res.redirect('http://drdler.com/drdler/clinic/secinterface');
        res.end();
    };
} else{
    res.redirect("http://drdler.com/drdler/clinic/services");
}
});


router.post('/addpatientdoc', async (req, res) => {
    if(req.isAuthenticated()){
    const patientinfo = req.body.nameInput;
    const infobirthdate = req.body.birthInput;
    const infogender = req.body.optradio;
    const paymentus = req.body.payInput;
    const mobile = req.body.mobinput;

    const newpatientinfo = new Schemas.Patientdef({
        fullname: patientinfo,
        birthdate: infobirthdate,
        gender:infogender,
        phonenumber:mobile,
        payments:[
            {
                amount:paymentus
            }
        ]       
    });
 
    try {
        await newpatientinfo.save( (err, newpatientinfoResults) => {
             if (err)
                res.end("What the HeCk");
                res.redirect('http://drdler.com/drdler/clinic/docface');
                res.end();
        });
    } catch(err) {
        res.redirect('http://drdler.com/drdler/clinic/docface');
        res.end();
    };
} else{
    res.redirect("http://drdler.com/drdler/clinic/services");
}
});

router.get('/drdler/clinic/patients/:id', (req, res) => {
    if(req.isAuthenticated()){

    const patientdet = Schemas.Patientdef;
    const pid=req.params.id;
    const patientDetails = patientdet.findById({ _id:pid},(err, patientdetData) => {
        if (err) throw err;
        if (patientdetData) {
            res.end(JSON.stringify(patientdetData));
        } else {
            res.end();
        }
    });
} else{
    res.redirect("http://drdler.com/drdler/clinic/services");
}
   
});

router.get('/drdler/clinic/patientsvist/:id', (req, res) => {
    if(req.isAuthenticated()){

    const patientdet = Schemas.Patientdef;
    const pid=req.params.id;

    
    const patientDetails = patientdet.findById({ _id:pid},(err, patientdetData) => {
        if (err) throw err;
        if (patientdetData) {
            
            res.end(JSON.stringify(patientdetData));
        } else {
            res.end();
        }
    });
} else{
    res.redirect("http://drdler.com/drdler/clinic/services");
}
   
});

router.post('/payupdate/:id', async (req, res) => {
    if(req.isAuthenticated()){

const paymentid=req.body.paid;
const filtermoney={_id:req.params.id, "payments._id":paymentid};
const newamount = req.body.pyamount;

const payupinfo={
    amount:newamount,
    currency:"IQD",
    paydate:todaycurrentdate.todaydate,
}

const paymentupdate=  { $set: { payments: payupinfo } };

try {
    await Schemas.Patientdef.findOneAndUpdate(  { 
        _id:req.params.id, 
        "payments._id": paymentid 
      }, 
      { $set: { "payments.$": payupinfo } },{new:true},(err, infoResults) => {
        if (err)
        res.end("What the HeCk");
        res.redirect('http://drdler.com/drdler/clinic/secinterface');
        res.end();

    })}catch(err){ 
        res.end();
    };

} else{
    res.redirect("http://drdler.com/drdler/clinic/services");
}

});
   




module.exports = router;
