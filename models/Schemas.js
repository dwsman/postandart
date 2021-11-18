const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todaycurrentdate=require("./dateparser")
/*const userSchema = new Schema({
    username: {type:String, required:true},
    fullname: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const tweetSchema = new Schema({
    tweet: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});

const Users = mongoose.model('users', userSchema, 'users');
const Tweets = mongoose.model('tweets', tweetSchema, 'tweets');
const mySchemas = {'Users':Users, 'Tweets':Tweets};
*/
const patientSchema =new Schema({
    fullname:{
        type:String,
        required:true
    },
    birthdate:{
        type:String,
    
    },
    gender:{
        type:String
    
    },
    phonenumber:{
        type:Number,
    
    },
    lastvisit:{
        type:String,
        required:true,
        default:todaycurrentdate.todaydate
    },
    firstvisit:{
        type:String,
        required:true,
        default:todaycurrentdate.todaydate
    },
    
    feeding:{
        type:String,
    },
    vacciration:{
        type:String,
    
    },
    
    developmental:{
        type:String,
    
    },
    
    natal:{
        type:String,
    
    },
    
    prevadmision:{
        type:String,
    
    },
    
    familyhv:{
        type:String,
    
    },
    
    
    pmhx:{
        type:String,
    
    },
    
    drugallerg:{
        type:String,
    
    },
    
    natalhxga:{
        type:String
    
    },
    
    natalhxwt:{
        type:String,
    },
    natalhxmod:{
        type:String
    
    },
    natalhxbg:{
        type:String
    
    },
    payments:[
        {
            amount:{
                type:Number,
            },
            currency:{
                type:String,
                default:"IQD"
            
            },
            
            paydate:{
                type:String,
                default:todaycurrentdate.todaydate
            }  
        }
    ],
    cases:[


        {
        subject:{
            type:String,
            
        },

        casedate:{
            type:String,
            default:todaycurrentdate.todaydate

        },

        digno:{
            type:String,
        
        },
        
        presill:{
            type:String,
        
        },
    
        age:{
            type:String,
        
        },
    
        examini:{
            type:String,
        
        },
    
        weight:{
            type:Number,
        
        },
    
        height:{
            type:Number,
        
        },
    
        ofc:{
            type:String,
        
        },
    
        treatment:{
            type:String,
        
        },
    
        notes:{
            type:String,
        
        }
        }
    ]
    
    });
    
        
    
      
    
    const Patientdef=mongoose.model('Patientdef',patientSchema,"Patientdef");
    
    const mySchemas={"Patientdef":Patientdef}





module.exports = mySchemas;