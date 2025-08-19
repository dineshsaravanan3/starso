function maskphone(phone){
    try{
      return phone.slice(0, 2) + '*'.repeat(phone.length - 5) + phone.slice(-3);

    }
    catch(error){
        return 'Invalid Mobile Number'
    }
}

function maskmail(mail){
    try{
        if(mail.includes("@")){
            const Username = mail.split('@');
            const finalstring = Username[0].slice(0,3) + '*'.repeat(Username[0].length -3) +'@'+Username[1]
            return finalstring;
        }
        else{
            return 'Invalid Mail ID';
        }
    
    }
    catch(error){
        return 'Invalid Mail ID';
    }
}

module.exports= {maskphone,maskmail};