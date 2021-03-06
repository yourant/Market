var datableTransaction;
var clientType;
var dateFrom;
var dateTo;

$(document).ready(function(){
  loadDataTable(clientType,dateFrom,dateTo);
});

$('#client_type').change(function(){
  clientType = $(this).val();

  if (clientType == "tenant") {
    $('#tableNoStall').parent().find('.table thead tr').append('<th class="border border-dark">stall number</th>');
    $('#tableNoStall').dataTable().fnDestroy();

    loadDataTableTenant(clientType,dateFrom,dateTo);
  }else {

    $('#tableNoStall').dataTable().fnDestroy();

    // Get index of parent TD among its siblings (add one for nth-child)
    var ndx = $('#tableNoStall').parent().index() + 8;
    // Find all TD elements with the same index
    $('th', event.delegateTarget).remove(':nth-child(' + ndx + ')');
    $('td', event.delegateTarget).remove(':nth-child(' + ndx + ')');

    loadDataTable(clientType,dateFrom,dateTo);
  }

});

$("#date_from").on('change',function(){

  dateFrom = $(this).val();

   $('#tableNoStall').dataTable().fnDestroy();

   if (clientType == "tenant") {
     loadDataTableTenant(clientType,dateFrom,dateTo);
   }else {
     loadDataTable(clientType,dateFrom,dateTo);
   }

});


$("#date_to").on('change',function(){

 dateTo = $(this).val();

 $('#tableNoStall').dataTable().fnDestroy();
 if (clientType == "tenant") {
   loadDataTableTenant(clientType,dateFrom,dateTo);
 }else {
   loadDataTable(clientType,dateFrom,dateTo);
 }


});




function loadDataTable(clientType,dateFrom,dateTo){

   $('#tableNoStall').DataTable({
    "autoWidth" : false,
    "ajax" : {
      type: "POST",
      data:{clientType:clientType,dateFrom:dateFrom,dateTo:dateTo},
      "url" : global.settings.url + '/MainController/otcbackend',
      dataSrc : 'data'
    },
    "columns" : [{
      "data" : "id"
    },
    {
      "data" : "trans_fullname"
    },

    {
      "data" : "trans_or"
    },


    {
      "data" : "trans_amount"
    },

    {
      "data" : "trans_nature"
    },

    {
      "data" : "trans_date"
    },

    {
      "data" : "trans_fund"
    }]
  });
  $('.dataTables_length').addClass('bs-select');
}

function loadDataTableTenant(clientType,dateFrom,dateTo){

  $('#tableNoStall').DataTable({
    "autoWidth" : false,
    "ajax" : {
      type: "POST",
      data:{clientType:clientType,dateFrom:dateFrom,dateTo:dateTo},
      "url" : global.settings.url + '/MainController/otcbackendtenant',
      dataSrc : 'data'
    },
    "columns" : [{
      "data" : "id"
    },
    {
      "data" : "trans_fullname"
    },

    {
      "data" : "trans_or"
    },


    {
      "data" : "trans_amount"
    },

    {
      "data" : "trans_nature"
    },

    {
      "data" : "trans_date"
    },

    {
      "data" : "trans_fund"
    },



    {
      "data" : "unit_no"
    }]
  });
  $('.dataTables_length').addClass('bs-select');
}















$('#genrep').click(function(){

  exClientType = $('#client_type').val();
  exDateFrom = $('#date_from').val();
  exDateTo = $('#date_to').val();




  if(exDateFrom == "" || exDateTo == "")
  {
    Swal.fire({
      title: 'Error!',
      text: 'Pick a Date',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }

  else{

    if (exClientType == "tenant") {
      console.log('pasok');
      $.ajax({
        url : global.settings.url +'/MainController/gettransexceltenant',
        type : 'POST',
        data :{exClientType:exClientType, exDateFrom:exDateFrom, exDateTo:exDateTo},
        dataType : 'json',
        success : function(data){

          console.log('pasok');

          window.open(global.settings.url + '/pages/view/printtransactotc', '_blank');


        },
        error : function(xhr){

        }

      });
    }else {
      $.ajax({
        url : global.settings.url +'/MainController/gettransexcel',
        type : 'POST',
        data :{exClientType:exClientType, exDateFrom:exDateFrom, exDateTo:exDateTo},
        dataType : 'json',
        success : function(data){



          window.open(global.settings.url + '/pages/view/printtransactotc', '_blank');


        },
        error : function(xhr){

        }

      });
    }




  }


});
