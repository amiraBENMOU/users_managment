
var mongoose = require('mongoose');

    var UserSchema = mongoose.Schema({
        firstName:{
            type:String,
            require:true,
        },
        lastName:{
            type:String,
            require:true,
        },
        Email:{
            type:String,
            require:true,
            Unique:true,
        },
        LC:{
            
                type: String,
                enum: [ 'Telemcen', 'Oran', 'Blida','Benak','Babez','bejaia','Costentine','Ouergla'],
                required : true 
            
            
        },
        Role:{
            
            type: String,
            enum: ['admin','Event Responsible', 'Sub Event Responsible', 'Blog Responsible', 'Sub Blog Responsible'],
            required : true 
        
        
    },
    Statue:{
            
        type: String,
        enum: ['active','not active'],
        required : true 
    
    
    }
    
     } );
     
     const Userdb=mongoose.model('Userdb',UserSchema)
      module.exports=Userdb;