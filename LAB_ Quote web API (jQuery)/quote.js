$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()

   

   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      $.ajax({
         url: "lookup.php", 
         method: "GET",
         data: "topic",
         dataType: "json"
      })
      html += data.quote+data.source
      
   }
   html += "</ol>";

   $("#quotes").html(html);
}
