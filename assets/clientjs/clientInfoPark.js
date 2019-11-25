var datable;

$(document).ready(function(){


  datable = $('#parkTable').DataTable({
    "ajax" : {
      "url" : global.settings.url + '/MainController/getparkingpaytablecon',
      dataSrc : 'data'
    },
    "columns" : [
      {
        "data" : "id"
      },

      {
        "data" : "pay_parking_lot"
      },

      {
        "data" : "pay_parking_name"
      },

      {
        "data" : "btn"
      }]
    });
    $('.dataTables_length').addClass('bs-select');



  });


  $('#updatecustomerinfo').submit(function(e){
    e.preventDefault();


    $.ajax({
      url: global.settings.url + '/MainController/updateparkinginfo',
      type: 'POST',
      data: $(this).serialize(),
      dataType:'JSON',
      success: function(res){
        Swal.fire({
          icon: 'success',
          title: 'Updated',
        });

        datable.ajax.reload();

      },
      error:function(res){

      }
    });

  });




  function fetchdata(id){

    console.log(id);
    $.ajax({
      url: global.settings.url + '/MainController/getparkingpay',
      type: 'POST',
      data: {
        id: id
      },
      dataType:'JSON',
      success: function(res){
        console.log(res);
        res = res[0];
        $('#customer_id').val(id);
        $('#name').val(res.firstname );
        $('#stall').val(res.unit_no);
        $('#park_ln').val(res.lastname);
        $('#park_add').val(res.address);
        $('#park_cn').val(res.contact_number);
        $('#driver_id').val(res.driver_id);


      },
      error: function(xhr){
        console.log(xhr.responseText);
      }
    })
  }
