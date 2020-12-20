var datable;

$(document).ready(function(){

  $( "#payhistbtn" ).click(function() {
    $('#violationmodal').modal('show');

  });

  function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }

  $('#search_cl_s').on('change', function() {
    var search = $("#search_cl_f").val();
    var searchcat = $(this).children("option:selected").val();
    if (isEmptyOrSpaces(search)) {
      console.log("do nothing");
    }else if ($(this).children("option:selected").text() == "Please Select") {
      console.log("do nothing");
    }else {
      $('#AmbulantTable').DataTable().clear().destroy();
      search_client(search, searchcat);
    }
  });


  $('#search_cl_f').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var search = $("#search_cl_f").val();

      var searchcat = $("#search_cl_s option:selected").val();

      if (isEmptyOrSpaces(search) && !$('#search_cl_s').val()) {
        Swal.fire({
          icon: 'error',
          title: 'Please input your Search and Select a category',
        });
      }else if (isEmptyOrSpaces(search)) {
        Swal.fire({
          icon: 'error',
          title: 'Please input your Search',
        });
      }else if (!$('#search_cl_s').val()) {
        Swal.fire({
          icon: 'error',
          title: 'Please Select a category',
        });
      }

      else {
        $('#AmbulantTable').DataTable().clear().destroy();
        search_client(search, searchcat);
      }
    }
  });

  function search_client(search, searchcat) {
    $('#AmbulantTable').DataTable({
      "paging": true,
      "searching": false,
      "ordering": true,
      "ajax" : {
        "url" : global.settings.url + '/MainController/getPayAmbulantTableCon',
        "data": {search:search, searchcat:searchcat},
        "dataType": "json",
        "type": "POST"
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
          "data" : "nature_of_business"
        },

        {
          "data" : "btn"
        }
      ]
    });
    $('.dataTables_length').addClass('bs-select');
  }



});

function fetchdata(id){
  customerinfo(id);
  transactionhistory(id);

}

function customerinfo(id){

  console.log(id);
  $.ajax({
    url: global.settings.url + '/MainController/getcustomerinfoAMBUpaycon',
    type: 'POST',
    data: {
      id: id
    },
    dataType:'JSON',
    success: function(res){
      console.log(res);
      $('#customer_id').val(res[0].customer_id)
      $('#ambulant_id').val(res[0].ambulant_id);
      $('#ambulant_fn').val(res[0].firstname);
      $('#ambulant_mn').val(res[0].middlename);
      $('#ambulant_ln').val(res[0].lastname);
      $('#ambulant_add').val(res[0].address);
      $('#ambulant_cn').val(res[0].contact_no);
      $('#location').val(res[0].location);
      $('#Location_num').val(res[0].Location_num);
      $('#nature_of_business').val(res[0].nature_of_business);
    },
    error: function(xhr){
      console.log(xhr.responseText);
    }
  })
}



function transactionhistory(id)
{
  $('#pay_hist_tab').DataTable().destroy();
  $('#pay_hist_tab').DataTable({
    "ajax" : {
      "url" : global.settings.url + '/MainController/getcustomertransactionhistory/' + id,
      type: 'GET',
      dataSrc : "data",
    },
    "columns" : [{
      "data" : "or_no"
    },

    {
      "data" : "nature_of_payment"
    },

    {
      "data" : "amount"
    },


    {
      "data" : "date"
    }]

  });



  $('.dataTables_length').addClass('bs-select');
}

function openauth(){
  $("#loginauthmodal").modal('show');
}


$('#updatecustomerinfo').submit(function(e){
  e.preventDefault();
  $.ajax({
    url: global.settings.url + '/MainController/updateambulantinfo',
    type: 'POST',
    data: $(this).serialize(),
    dataType:'JSON',
    success: function(res){
      Swal.fire({
        icon: 'success',
        title: 'Updated',
      });
    console.log("lehoo");
      $('#updatecustomerinfo')[0].reset();
      $('#AmbulantTable').DataTable().ajax.reload();
      $('#updatecustomerinfo')[0].reset();
    },
    error:function(res){

    }
  });

});



$('#login_account').submit(function(e){
  e.preventDefault();
  $.ajax({
    url : global.settings.url + '/Pages/login_acc',
    type : 'POST',
    data : $(this).serialize(),
    dataType : 'json',
    success : function(res){

      if(res.user_level == 0)
      {
        Swal.fire({
          title: 'Are you sure?',
          text: "Do you want to save changes?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            $("#loginauthmodal").modal('hide');
            $( "#updatecustomerinfo" ).submit();
            $('#login_account')[0].reset();


          } else{
            console.log("no");

          }

        })


      }else if (res.user_level == 1) {
        Swal.fire({
          icon: 'error',
          title: 'User Not Authorized'
        });
      }
      else if(res == 'usernameError'){
        Swal.fire({
          icon: 'error',
          title: 'Wrong Credentials',
          text: 'Username not found'
        });
      }
      else if(res == 'passwordError'){
        Swal.fire({
          icon: 'error',
          title: 'Wrong Credentials',
          text: 'password does not match'
        });
      }


    },
    error : function(xhr){
      console.log('kenneth');
      console.log(xhr.responseText);
    }
  })

});
