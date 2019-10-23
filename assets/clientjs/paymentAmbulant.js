var datable;

$(document).ready(function(){


  $('#AmbulantTable').DataTable({
    "ajax" : {
      "url" : global.settings.url + '/MainController/getPayAmbulantTableCon',
      dataSrc : 'data'
    },
    "columns" : [
      {
        "data" : "id"
      },
      {
        "data" : "pay_ambu_name"
      },

      {
        "data" : "pay_ambu_location"
      },

      {
        "data" : "pay_ambu_locnum"
      },

      {
        "data" : "btn"
      }]
    });
    $('.dataTables_length').addClass('bs-select');
  });



  function fetchdata(id){
    $('#AmbuPay').modal("show");
    console.log(id);
    $.ajax({
      url: global.settings.url + '/MainController/getambuinfopay',
      type: 'POST',
      data: {
        id: id
      },
      dataType:'JSON',
      success: function(res){
        console.log(res);
        res = res[0];

        $('#cus_id').val(res.customer_id );
        $('#name').val(res.firstname + ' '+ res.middlename +' ' + res.lastname);
        $('#location').val(res.location);
        $('#Location_num').val(res.location_no);
        // $('#last_pay').val(res.payment_datetime);
        // diffdates();
      },
      error: function(xhr){
        console.log(xhr.responseText);
      }
    })
  }
