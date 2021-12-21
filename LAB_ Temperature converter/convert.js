window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   convertButton=document.getElementById("convertButton");
   cInput=document.getElementById("cInput");
   fInput=document.getElementById("fInput");
   weather=document.getElementById("weatherImage");
   errorMessage=document.getElementById("errorMessage");

   cInput.addEventListener("input", function(){
      fInput.value="";
   });
   fInput.addEventListener("input", function(){
      cInput.value="";
   });

   convertButton.addEventListener("click", function(){
      if(Number.isNaN(parseInt(cInput.value)) && cInput.value !=""){
         errorMessage.innerHTML=cInput.value+" is not a number";
      }
      else if (Number.isNaN(parseInt(fInput.value)) && fInput.value!=""){
         errorMessage.innerHTML=fInput.value+" is not a number";
      }
      else if (cInput.value!=""){
         errorMessage.innerHTML="";
         fInput.value=convertCtoF(cInput.value);
         cInput.value="";
         if(fInput.value>50){
            weather.setAttribute("src", "warm.png")
         }
         else if(fInput.value>=32){
            weather.setAttribute("src", "cool.png")
         }
         else{
            weather.setAttribute("src", "cold.png")
         }

      }
      else if (fInput.value!=""){
         errorMessage.innerHTML="";
         if(fInput.value>50){
            weather.setAttribute("src", "warm.png")
         }
         else if(fInput.value>=32){
            weather.setAttribute("src", "cool.png")
         }
         else{
            weather.setAttribute("src", "cold.png")
         }
         cInput.value=convertFtoC(fInput.value);
         fInput.value=""
      }
      
   });
}
   


function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   
   let conversionDegree=degreesCelsius*(9/5)+32;
   return conversionDegree;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   let conversionDegree=(degreesFahrenheit-32)*5/9;
   return conversionDegree;
   

}
