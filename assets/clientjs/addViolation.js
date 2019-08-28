$(document).ready(function(){
var base_url = window.location.origin + '/Market/';
 load_data();
 $('#example').DataTable( {
       "scrollY":        "200px",
       "scrollCollapse": true,
       "paging":         false
   } );

 function load_data(query)
 {
  $.ajax({
   url:base_url +'/MainController/fetch',
   method:"POST",
   data:{query:query},
   success:function(data){
    $('#result').html(data);
   }
  })
 }

 $('#search_text').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });
});
