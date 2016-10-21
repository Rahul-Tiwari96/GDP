var fs = require('fs');
var readLine = require('readline');
var rd=readLine.createInterface({
    input:fs.createReadStream('data.csv'),
    output:fs.createWriteStream('requirement2.json')
});
/////////////////////////////////the main condition////////////////////////////
var country={};
rd.on('line',function(line){
         line=line.split(',');
          if ( line!='')
          {
             if(line[0]!='"Country Name"')
             {
              countryKey=line[0];
                  if (line[0]!='"European Union"')
                  {

                      country[countryKey]={};
                      country[countryKey].country=countryKey;
                      country[countryKey].power=line[23];

                  }
              else
              {
                  console.log("sorry");
              }
}
}

      });
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>functon to change in array of object/////////////////////////////
      country=format(country);
   function format(obj) {
    var arr = [];
    for (countryKey in obj)
 {

   arr.push(obj[countryKey]);
 }
 return arr;
 }

rd.on('close', function(){
    country=format(country);
    console.log(country);
    rd.output.write(JSON.stringify(country));
});
 //fs.writeFile("coun.json",JSON.stringify(country),function(err){if(err) throw err; console.log("save country file");})
