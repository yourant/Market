var datable;

var check_number = [];
var check_amount = [];
var check_date = [];
var bank = [];
var payment_type;



$(document).ready(function(){



  $( "#printbtnrec" ).click(function() {
    $('#rec').modal("hide");
    $('#recModal').modal("show");

  });

  $( "#printbtnclose" ).click(function() {
    $('#recModal').modal("hide");
  });

  $('#printrec').submit(function(e){
    e.preventDefault();

    $.ajax({
      type: "POST",
      data: {amount_to_pay:amount_to_pay,type_of_payment:type_of_payment,ntw:ntw,check_amount:check_amount,check_number:check_number,check_date:check_date,bank:bank,or_number:or_number,text1:text1,text2:text2,text3:text3,text4:text4,text5:text5,text6:text6,text7:text7,num1:num1,num2:num2,num3:num3,num4:num4,num5:num5,num6:num6,num7:num7,payment_name:payment_name,total:total,payment_type:payment_type},
      url: global.settings.url +'/MainController/paymentreceiptprint',
      xhrFields: {
        responseType: 'blob'
      },

      success:function(data)
      {
        // document.getElementById('frameasdas').contentWindow.location.reload();
        console.log("hmm");
        var url = window.URL.createObjectURL(data);
        $('#frameasdas').attr('src',url);
        $('#rec').modal('show');
        $('#recModal').modal('hide');

        //  $('#frameasdas').attr('src',data);
      },
      error:function()
      {

      }

    });


  });


  //
  // $('#AmbulantTable').DataTable({
  //   "ajax" : {
  //     "url" : global.settings.url + '/MainController/getPayAmbulantTablepay',
  //     dataSrc : 'data'
  //   },
  //   "columns" : [
  //     {
  //       "data" : "id"
  //     },
  //     {
  //       "data" : "pay_ambu_name"
  //     },
  //
  //     {
  //       "data" : "pay_ambu_location"
  //     },
  //
  //     {
  //       "data" : "pay_ambu_locnum"
  //     },
  //
  //     {
  //       "data" : "btn"
  //     }]
  //   });
  $( "#close_modal_payment" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to close the payment window?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Close',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        $('#AmbuPay').modal("hide");
      }
    })
  });

  $( "#close_modal_receipt" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to close the receipt window?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Close',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        $('#print').modal("hide");
      }
    })
  });

  $( "#close_modal_receipt2" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to close the printing window?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Close',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        $('#rec').modal("hide");
      }
    })
  });

  function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }

  $('#search_cl_s').on('change', function() {
    var search = $("#search_cl_f").val();
    var searchcat = $(this).children("option:selected").val();
    if (isEmptyOrSpaces(search)) {
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


  // function search_client(search) {
  //   $('#AmbulantTable').DataTable({
  //     "paging": true,
  //     "searching": false,
  //     "ordering": true,
  //     "ajax" : {
  //       "url" : global.settings.url + '/MainController/getPayAmbulantTablepay',
  //       "data": {search:search},
  //       "dataType": "json",
  //       "type": "POST"
  //     },
  //     "columns" : [
  //       {
  //         "data" : "id"
  //       },
  //       {
  //         "data" : "pay_ambu_name"
  //       },
  //
  //       {
  //         "data" : "pay_ambu_location"
  //       },
  //
  //       {
  //         "data" : "pay_ambu_locnum"
  //       },
  //
  //       {
  //         "data" : "btn"
  //       }]
  //   });
  //
  // }



  $('.dataTables_length').addClass('bs-select');
  $('#demo').num2words();

  function changeboth() {
    var am_topay = $("#payment_amount_to_pay").text();
    cash_tendered = $('#payment_cash_tendered').val();
    total = $('#total').val();

    if ($("#payment_amount_to_pay").val() == '') {
      console.log("do nothing");
      $('#change').val(null);
    } else if ($('#payment_cash_tendered').val() == '') {
      console.log("do nothing");
      $('#change').val(null);
    }else {
      change = parseFloat(cash_tendered) - parseFloat(total);
      $('#change').val(change);
    }
  }

  $('#payment_cash_tendered').change(function(){
    changeboth();
    $('#total_amount_given').val($('#payment_cash_tendered').val());
  });


  $('#sub_total').click(function(){
    if($(this).is(":checked")){
      particular();
      if($('#payment_amount_to_pay').val() == ""){
        amount_to_pay = 0;
      }
      else
      {
        amount_to_pay = $('#payment_amount_to_pay').val();
      }
      total = parseFloat(total) + parseFloat(amount_to_pay);
      $('#total').val(total);
      $('#total_amount_given').val($('#payment_cash_tendered').val());

    }
    else if($(this).is(":not(:checked)")){
      $('#total').val($('#payment_amount_to_pay').val());
      changeboth();
      $('#total_amount_given').val($('#payment_cash_tendered').val());
    }
  });

  $('#payment_amount_to_pay').change(function(){
    if($('#sub_total').is(":not(:checked)")){
      $('#total').val($('#payment_amount_to_pay').val());
      changeboth();
    }
    if($('#sub_total').is(":checked")){
      particular();
      if($('#payment_amount_to_pay').val() == ""){
        amount_to_pay = 0;

      }
      else
      {
        amount_to_pay = $('#payment_amount_to_pay').val();
      }
      total = parseFloat(total) + parseFloat(amount_to_pay);
      $('#total').val(total);
      changeboth();
    }
  });

  $('.partnum').change(function(){
    if($('#sub_total').is(":checked")){
      particular();
      if($('#payment_amount_to_pay').val() == ""){
        amount_to_pay = 0;
      }
      else
      {
        amount_to_pay = $('#payment_amount_to_pay').val();
      }
      total = parseFloat(total) + parseFloat(amount_to_pay);
      $('#total').val(total);
    }
  });



  $('#payment_submit').submit(function(e){
    e.preventDefault();
    text1 = $('#part1text').val();
    text2 = $('#part2text').val();
    text3 = $('#part3text').val();
    text4 = $('#part4text').val();
    text5 = $('#part5text').val();
    text6 = $('#part6text').val();
    text7 = $('#part7text').val();
    num1 = $('#part1num').val();
    num2 = $('#part2num').val();
    num3 = $('#part3num').val();
    num4 = $('#part4num').val();
    num5 = $('#part5num').val();
    num6 = $('#part6num').val();
    num7 = $('#part7num').val();
    ntw = $('#ntwntw').val();
    customer_id = $('#payment_customer_id').val();
    tenant_id = $('#payment_tenant_id').val();
    type_of_payment = $('#payment_type_of_payment').val();
    or_number =$('#payment_or_number').val();
    amount_to_pay = $('#payment_amount_to_pay').val();
    cash_tendered = $('#payment_cash_tendered').val();
    payment_effectivity = $('#payment_effectivity').val();
    payment_name = $('#payment_name').val();
    total = $('#total').val();
    var fund_id = 1;
    var payment_type = $('#payment_type').val();

    if ($('#change').val() == "" || $('#change').val() == null) {
      Swal.fire({
        icon: 'error',
        title: 'Complete the transaction first.',
      });
    }else if ($('#change').val() < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Insufficient amount.',
      });
    }else {
      $.ajax({
        type: "POST",
        data:{fund_id:fund_id,customer_id:customer_id,type_of_payment:type_of_payment,or_number:or_number,amount_to_pay:amount_to_pay,cash_tendered:cash_tendered,payment_effectivity:payment_effectivity},
        url: global.settings.url +'/MainController/savetransaction',
        success: function(res){
          $('.payment_details').val("");
          $('#AmbuPay').modal('hide');
          $.ajax({
            type: "POST",
            data: {amount_to_pay:amount_to_pay,type_of_payment:type_of_payment,ntw:ntw,or_number:or_number,text1:text1,text2:text2,text3:text3,text4:text4,text5:text5,text6:text6,text7:text7,num1:num1,num2:num2,num3:num3,num4:num4,num5:num5,num6:num6,num7:num7,payment_name:payment_name,total:total,payment_type:payment_type},
            url: global.settings.url +'/MainController/paymentreceipt',
            xhrFields: {
              responseType: 'blob'
            },

            success:function(data)
            {

              // document.getElementById('frame').contentWindow.location.reload();
              var url = window.URL.createObjectURL(data);
              $('#frameasdas').attr('src',url);
              $('#rec').modal('show');
              //  $('#frameasdas').attr('src',data);
              console.log(data);
            },
            error:function()
            {

            }

          });


        },
        error: function(res){

        }
      });
    }



  });

  $('#payment_or_number').change(function(){
    var or_number = $('#payment_or_number').val();
    $.ajax({
      url: global.settings.url + '/MainController/checkOr',
      type: 'POST',
      data: {
        or_number: or_number
      },
      dataType:'JSON',
      success: function(res){

        if(res=="meron"){
          Swal.fire({
            title: 'O.R number already exist!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          $('#payment_or_number').val("");
        }

      },
      error: function(xhr){
        console.log(xhr.responseText);
      }
    })
  });


});

// end of doc ready
// end of doc ready
// end of doc ready
// end of doc ready






function fetchdata(id){
  $('.payment_details').val("");
  $('#AmbuPay').modal('show');
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

      $('#paymentDet').hide();
      $('#chequeDetails').hide();
      $('#payment_type').val(null);

      $('.payment_details').val('');
      $('.rowrow').remove();
      $('#payment_cheque_number').val("");
      $('#payment_cheque_amount').val("");
      $('#payment_bank_branch').val("");

      $('#payment_customer_id').val(res.customer_id );
      $('#payment_name').val(res.firstname + ' '+ res.middlename +' ' + res.lastname);
      $('#payment_location').val(res.location);
      $('#payment_location_number').val(res.location_no);
      // // $('#last_pay').val(res.payment_datetime);
      // // diffdates();
    },
    error: function(xhr){
      console.log(xhr.responseText);
    }
  })
}


function particular(){

  if($('#part1num').val() == ""){
    num1 = 0;
  }
  else{
    num1 = $('#part1num').val();
  }

  if($('#part2num').val() == ""){
    num2 = 0;
  }
  else{
    num2 = $('#part2num').val();
  }

  if($('#part3num').val() == ""){
    num3 = 0;
  }
  else{
    num3 = $('#part3num').val();
  }

  if($('#part4num').val() == ""){
    num4 = 0;
  }
  else{
    num4 = $('#part4num').val();
  }

  if($('#part5num').val() == ""){
    num5 = 0;
  }
  else{
    num5 = $('#part5num').val();
  }

  if($('#part6num').val() == ""){
    num6 = 0;
  }
  else{
    num6 = $('#part6num').val();
  }

  if($('#part7num').val() == ""){
    num7 = 0;
  }
  else{
    num7 = $('#part7num').val();
  }


  total = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6) + parseInt(num7);
}

function isNumberKey(txt, evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode == 46) {
    //Check if the text already contains the . character
    if (txt.value.indexOf('.') === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 &&
      (charCode < 48 || charCode > 57))
      return false;
    }
    return true;
  }
