<style>
.inputTrans
{
  background-color:rgba(0, 0, 0, 0);
  border: none;
  outline:none;
  height:30px;
  transition:height 1s;
  -webkit-transition:height 1s;
  float:right;
}
</style>



<div id="content">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary bluegrads">
    <div class="container-fluid ">
      <button type="button" id="sidebarCollapse" class="btn  btn-md ">
        <i class="fas fa-bars fa-2x" style="color: #f5f5f5;"></i>
      </button>
    </div>
  </nav>

  <!-- new payment -->

  <!--Main layout-->
  <main class="mt-5 ">

    <div class="container wow fadeIn">

      <div class=" d-flex align-items-center justify-content-center ">
        <h2 class="mr-2" id="exampleModalPreviewLabel">Violations</h5>
          <a type="button" class="btn-floating btn-lg blue-gradient" id="searchbtn"><i class="fas fa-search" aria-hidden="true"></i></a>

      </div>



      <!-- Heading -->
      <!-- <h2 class="text-center">Violation</h2> -->

      <br>
      <div class="row">

        <!-- <div class="col-4">
          <button class="btn btn-primary btn-sm" id="searchbtn">Search</button>
        </div> -->

        <form id="payment_submit">
          <!-- <div class="col">
          <h2 class="text-center">Checkout form</h2>
        </div> -->
      </div>

      <br>

      <!--Grid row-->
      <!-- <form id="payment_submit" > -->
      <div class="row ">

        <!--Grid column-->
        <div class="col-md-8 mb-4 ">

          <!--Card-->
          <div class="card p-3">

            <!--Card content-->

            <div class="col-lg-12 bg-info ">
              <div class="row p-3 ml-3">
                <div class="ml-2 text-white">Mode of Payment</div>
                <div class="custom-control custom-radio ml-3">
                  <input type="radio" class="custom-control-input" id="cashPayment" name="pay[paymentCol]" value="cash" checked>
                  <label class="custom-control-label text-white" for="cashPayment">Cash</label>
                </div>

                <div class="custom-control custom-radio ml-3">
                  <input type="radio" class="custom-control-input" id="chequePayment" name="pay[paymentCol]" value="bank" >
                  <label class="custom-control-label text-white" for="chequePayment">Bank</label>
                </div>

                <div class="custom-control custom-radio ml-3">
                  <input type="radio" class="custom-control-input" id="bankCashPayment" name="pay[paymentCol]" value="bankCash" >
                  <label class="custom-control-label text-white" for="bankCashPayment">Bank/Cash</label>
                </div>
              </div>
            </div>
            <br>
            <!--Grid row-->
            <div class="row">




              <!--Grid column-->
              <div class="col-md-4 mb-2">


                <div class="mb-2">
                  <label>Customer ID</label>
                  <input type="text" class="form-control " name="pay[customID]" id="payment_customer_id" readonly>
                </div>

              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-4 mb-2">


                <div class="mb-2">
                  <label>Stall number</label>
                  <input type="text" class="form-control " name="pay[stall_number]" id="payment_stall" readonly>
                </div>

              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-4 mb-2">


                <div class="mb-2">
                  <label>Violation ID</label>
                  <input type="text" class="form-control " name="pay[violation_id]" id="violation_id" readonly>
                </div>

              </div>
              <!--Grid column-->

            </div>
            <!--Grid row-->


            <div class="mb-2">
              <label>Name</label>
              <input type="text" class="form-control " name="pay[customer_name]" id="customer_name" readonly>
            </div>


            <!-- <div class="mb-2">
              <label>Address</label>
              <input type="text" class="form-control" id="address" readonly>
            </div> -->

            <div class="mb-2">
              <label>Violation Description</label>
                <textarea class="form-control rounded-0" id="violation_desc" rows="10" readonly></textarea>
            </div>



            <br>

            <div class="col-lg-12">


              <div class="row">
                <div class="col-lg-6 mt-3 h3 "> ITEMS </div>
                <div class="col-lg-6">
                  <button id="addRow" class=" btn btn-outline-success waves-effect float-right" type="button" onclick="addNewRow()">ADD ITEM</button>
                  <!-- <button id="removeRow" class=" btn btn-outline-danger waves-effect btn-sm " type="button" disabled>remove</button> -->
                </div>
              </div>


              <div class="table-responsive mb-3">
                <table class="table table-sm table-bordered text-center">
                  <thead >
                    <tr>
                      <td>No</td>
                      <td>Particulars</td>
                      <td>Date Effectivity</td>
                      <td>Price</td>
                      <td >Action</td>
                    </tr>
                  </thead>

                  <tbody id="tbodyParticulars"></tbody>
                </table>
              </div>


            </div>



            <!--Grid row-->
            <div class="row">




            </div>
            <!--Grid row-->


            <hr class="mb-4">




          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-4 mb-4">

          <!-- Heading -->
          <!-- <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill">3</span>
        </h4> -->

        <!-- Cart -->
        <ul class="list-group mb-3 z-depth-1">
          <li class="list-group-item d-flex justify-content-between lh-condensed">

            <div class="mb-2 w-100" >
              <label>O.R</label>
              <input type="text"  maxlength="7" class="form-control payment_details ntw text-danger inputmoney" name="pay[payment_or_number]" id="payment_or_number" required/>
            </div>
            <!-- <span class="text-muted">$12</span> -->
          </li>

          <li class="list-group-item d-flex justify-content-between lh-condensed">

            <div class="mb-2  w-100">
              <label>Payor Name</label>
              <input type="text" class="form-control " name="pay[payor]" id="payor">
            </div>
            <!-- <span class="text-muted">$12</span> -->
          </li>

          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div class=" mb-2 w-100">
              <label>Amount To Pay</label>
              <input type="text"  placeholder="0.00"  class="form-control text-right" name="pay[ttlAmt]" id="ttlAmt" readonly>
            </div>
          </li>

          <li class="list-group-item d-flex justify-content-between lh-condensed cashCol">
            <div class=" mb-2 w-100">
              <label>Cash tendered</label>
              <input type="text"  placeholder="0.00"  class="form-control payment_details text-right money2" name="pay[cash_tendered]" id="payment_cash_tendered" >

            </div>
          </li>



          <li class="list-group-item d-flex justify-content-center lh-condensed text-center">

            <div class="bankCol  bankCashCol " hidden>

              <button type="button" class =" stylish-color-dark btn text-white " id = "add_cheque_modal">Add/View cheque</button>

            </div>

          </li>


          <li class="list-group-item d-flex justify-content-between bg-light bankCol bankCashCol" hidden>
            <div class="" >
              <h6 class="my-0">Cheque total</h6>
            </div>
            <input type="text" class="inputTrans text-right float-right w-100 payment_details text-danger" name="pay[payment_cheque_total]" id="payment_cheque_total" placeholder="0.00" readonly />
          </li>

          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="">
              <h6 class="my-0">Cash total</h6>
            </div>
            <input type="text" class="inputTrans text-right float-right w-100 payment_details text-danger" name="pay[cash_total]" id="cash_total" placeholder="0.00" readonly />

          </li>

          <li class="list-group-item d-flex justify-content-between bg-light">
            <span>Total (Amount Given)</span>
            <!-- <strong>??? <span class="" id="">0.00</span></strong> -->
            <!-- <strong>??? </strong> -->
            <input type="text" class="inputTrans text-right float-right w-100 payment_details text-danger"  id="total_amount_given" name="pay[total_amount_given]" placeholder="0.00" readonly >

          </li>

          <li class="list-group-item d-flex justify-content-between bg-light">
            <span>Total (Amount to pay)</span>
            <!-- <strong>??? <span class="" id="">0.00</span></strong> -->
            <!-- <strong>??? </strong> -->
            <input type="text" class="inputTrans text-right float-right w-100 payment_details text-danger"  id="total_payment" name="pay[total_amount_given]" placeholder="0.00" readonly >

          </li>

          <li class="list-group-item d-flex justify-content-between ">
            <div class="">
              <h6 class="my-0">Change</h6>
            </div>
            <!-- <span class="">???  <span class="" id="change"></span></span> -->
            <!-- <span class="">???</span> -->
            <input type="text" class="inputTrans text-right float-right w-100 payment_details text-danger" name="pay[change]" id="change" placeholder="0.00" readonly />

          </li>


        </ul>
        <!-- Cart -->

        <!-- Promo code -->
        <!-- <form class="card p-2">
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
        <button class="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
      </div>
    </div>
  </form> -->
  <!-- Promo code -->
  <button class="btn btn-primary btn-lg btn-block" id = "payment_submit_btn" type="submit">Continue to checkout</button>
</div>

<input type="hidden"   class="form-control" name="pay[no]" id="no" readonly />
<input type="hidden"   class="form-control" name="pay[particulars]" id="particulars" readonly />
<input type="hidden"   class="form-control" name="pay[date]" id="date" readonly />
<input type="hidden"   class="form-control" name="pay[price]" id="price" readonly />

<input type="hidden"   class="form-control" name="pay[chqno]" id="chqno" readonly />
<input type="hidden"   class="form-control" name="pay[chqAmount]" id="chqAmount" readonly />
<input type="hidden"   class="form-control" name="pay[chqdate]" id="chqdate" readonly />
<input type="hidden"   class="form-control" name="pay[chqBranch]" id="chqBranch" readonly />
<!--Grid column-->

</div>
<!--Grid row-->
<!-- </form> -->

</div>
</main>

</form>

<!--Main layout-->

<!-- new payment  -->

<div id="add_Newitem_window" class="modal fade right shadow" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true" style="overflow:auto" >
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalPreviewLabel">Add item</h5>
        <button type="button" class="close"  id="" onclick="closeModal('add_Newitem_window')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="add_Newitem_form">
          <div class="mb-2">
            <input type="hidden" name="" id="what_row" required>
            <label>Type of payment</label>
            <input type="text" class="form-control payment_details" name="" id="payment_type_of_payment" readonly value="Violation">
          </div>

          <div class="mb-2" id="other_items" hidden>
            <label>Others</label>
            <input type="text" class="form-control payment_details" name="" id="others_f" placeholder="Please Specify">
          </div>

          <div class="mb-2">
            <label>Payment Effectivity</label>
            <input type="date" class="form-control payment_details" name="" id="payment_effectivity" required>
          </div>




          <div class="mb-2">
            <label>Amount to pay</label>
            <!-- <input type="text" placeholder="0.00" value="0.00" class="form-control payment_details ntw inputmoney money2" name="amount_to_pay" id="payment_amount_to_pay2" onkeypress="return isNumberKey(this, event);" ondrop="return false;" onpaste="return false;" oncontextmenu="return false;" required> -->
            <input type="text" placeholder="0.00" value="0.00" class="form-control text-right money2" name="amount_to_pay" id="payment_amount_to_pay2" onfocus="this.value=''" required>
          </div>
          <br>
          <button type="submit" class ="float-right stylish-color-dark btn text-white" id ="add_item_type">Add</button>
        </form>

      </div>

    </div>
  </div>
</div>
<!-- END OF MODAL -->


<div id="cheqmodal" class="modal fade right" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close"  onclick="closeModal('cheqmodal')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <div class="bankCol  bankCashCol mt-3" >
          <div class="row mt-2">

            <div class="col-lg-6 col-sm-12 mt-2">
              <label>Cheque Number</label>
              <input type="text" class="form-control payment_details" name="pay[cheque_number]" id="payment_cheque_number">
            </div>

            <div class="col-lg-6 col-sm-12 mt-2">
              <label >Cheque Amount</label>
              <!-- <input type="text"  placeholder="0.00"  class="form-control payment_details inputmoney money2" name="pay[cheque_amount]" id="payment_cheque_amount"  onkeypress="return isNumberKey(this, event);" ondrop="return false;" onpaste="return false;" oncontextmenu="return false;"> -->
              <input type="text"  placeholder="0.00"  class="form-control payment_details  money2" name="pay[cheque_amount]" id="payment_cheque_amount">
            </div>

            <div class="col-lg-6 col-sm-12 mt-2">
              <label>Cheque Date </label>
              <input type="date" class="form-control payment_details" name="pay[cheque_date]" id="payment_cheque_date">
            </div>

            <div class="col-lg-6 col-sm-12 mt-2">
              <label>Bank/Branch</label>
              <input type="text" class="form-control payment_details" name="pay[bank_branch]" id="payment_bank_branch">
            </div>

            <div class="col-lg-12">
              <button type="button" class ="float-right stylish-color-dark btn text-white" id = "add_cheque">Add</button>
            </div>



            <div class="mb-2 col-lg-12 form-group mt-3">
              <table class="table table-striped table-bordered p-2 table-sm" id="table_cheque">
                <thead>
                  <tr>
                    <th class="border border-dark">Cheque no</th>
                    <th class="border border-dark ">Cheque Amount</th>
                    <th class="border border-dark">Cheque Date</th>
                    <th class="border border-dark">Bank Branch</th>
                    <th class="border border-dark">delete</th>
                  </tr>
                </thead>
                <tbody id="ttlChequeTbody">
                </tbody>
              </table>
            </div>


            <div class="col-lg-12 col-sm-12">
              <label>TOTAL CHEQUE AMOUNT</label>
              <p class="text-success p-2 float-right" value="0.00" placeholder="0.00"  id="payment_chq_total"></p>
            </div>



          </div>
        </div>


      </div>

    </div>
  </div>
</div>


<div id="printModal" class="modal fade right" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <!-- <div class="modal-header">
      <button type="button" class="close" id="print_nolayout">
      <span aria-hidden="true">&times;</span>
    </button>
  </div> -->
  <div class="modal-body">
    <form id ="printrec">
      <h3 class = "text-center">Save transaction?</h3>
      <div class = "text-center">
        <button class = "btn btn-success rounded-pill" type ="button" value = "yes" onclick="savedatanow()">Yes</button>
        <button class = "btn btn-danger rounded-pill" type ="button" value ="no" id="pintmodalclose"  data-dismiss="modal" onclick="closeModal()">Close</button>

        <iframe src = "" id="printFrame"  height ="500" width = "100%"> </iframe>


      </div>
    </form>
  </div>

</div>
</div>
</div>



<div id="rec" class="modal fade right shadow" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true" style="overflow:auto" >
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header p-2">
        <button class = "btn btn-success btn-sm m-2" id="printbtn" type='button' onclick="printReceipt()">Print Receipt</button>

        <button type="button"  id="close_modal_receipt2"  class="close" onclick="closeModal()" >
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="modal-body p-0">

        <iframe src = "" id="frameasdas" height ="500" width = "100%">
        </iframe>

      </div>

    </div>
  </div>
</div>

<div id="viewcheq" class="modal fade right shadow" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true" style="overflow:auto" >
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header p-2">
        <h5 class="modal-title" id="exampleModalPreviewLabel">Cheques</h5>

        <button type="button"  id="close_modal_receipt2"  class="close" onclick="closeModal('viewcheq')" >
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="modal-body">


      </div>

    </div>
  </div>
</div>



<div id="searchmodal" class="modal fade right" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Violations</h5>
        <a href="<?php echo base_url() . 'pages/view/home' ?>">
          <button type="button" class="btn btn-primary">
            To home
          </button>
        </a>
      </div>
      <div class="modal-body">

          <div class="">
            <table width="100%" class="table table-striped table-bordered" id="getviolationtable">
              <thead>
                <tr>
                  <td class="border border-dark">Customer ID</td>
                  <td class="border border-dark">description</td>
                  <td class="border border-dark">date occurred</td>
                  <td class="border border-dark">status</td>
                  <td class="border border-dark">name</td>
                  <td class="border border-dark">Resolve</td>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>




      </div>

    </div>
  </div>
</div>



</div>
<div class="overlay"></div>
