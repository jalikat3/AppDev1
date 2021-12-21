window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest

   var xhr= new XMLHttpRequest();
   var quoteResponse=xhr.response;

   xhr.open('GET',"https://wp.zybooks.com/quotes.php?topic="+topic+"&count="+count);
   xhr.responseType='json'
   xhr.send();
   xhr.addEventListener("load", responseReceivedHandler);

   
  
   
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler(){
      let quotes=document.querySelector("#quotes");
      if(this.status!==200){
         return;
      }

      let xhrResponse=this.response;

      if(xhrResponse.error){
         quotes.innerHTML=xhrResponse.error;
      }
      else{
      let html = "<ol>";
      for(let c=0; c<xhrResponse.length; c++){
         html+="<li>"+xhrResponse[c].quote+" - "+xhrResponse[c].source+"</li>";
      }
      html += "</ol>";
      quotes.innerHTML = html;
   }
}
