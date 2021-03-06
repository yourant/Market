<div id="content">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary bluegrads">
    <div class="container-fluid ">
      <button type="button" id="sidebarCollapse" class="btn  btn-md ">
        <i class="fas fa-bars fa-2x" style="color: #f5f5f5;"></i>
      </button>
    </div>
  </nav>

  <div class="container justify-content-center">
    <h5 class="card-header text-center bg-primary text-white bluegrads">Add Parking Client</h5>
    <br>
    <div class="card m-2 shadow">
      <div class="container">

          <div class="row p-3">
            <div class="col">
              <div class="form-group">
                <label>Search</label>
                <input class="form-control form-control-sm mr-3 w-75" type="text" id="search_cl_f" placeholder="Search (stall#, name, section, etc)"
                aria-label="Search">
                <!-- <i class="fas fa-search" aria-hidden="true"></i> -->
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label>Category</label>
                <select class="form-control form-control-sm" id="search_cl_s">
                  <option selected value="">Please Select</option>
                  <option value="customer_id">Customer ID</option>
                  <option value="firstname,' ',middlename,' ',lastname">Tenant's name</option>
                  <option value="aofirstname,' ',aomiddlename,' ',aolastname">Occupant's name</option>
                  <option value="unit_no">Stall number</option>
                  <option value="Section">Section</option>
                  <option value="nature_or_business">Nature of business</option>
                  <option value="sqm">Area(sqm)</option>
                  <option value="dailyfee">Daily fee</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-12 form-group">
            <table class="table table-striped table-bordered shadow" id="tableNoStall">
              <thead>
                <tr>
                  <td class="border border-dark">Customer ID</td>
                  <td class="border border-dark">Stall no.</td>
                  <td class="border border-dark">Section</td>
                  <td class="border border-dark">Nature of business</td>
                  <td class="border border-dark">Area(sqm)</td>
                  <td class="border border-dark">Daily fee</td>
                  <td class="border border-dark">Tenant's name</td>
                  <td class="border border-dark">Occupant's name</td>
                  <td class="border border-dark" scope="col">Add Parking</td>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>





      </div>
    </div>
  </div>
  <br>
  <br>

</div>



</div>


<div id="violationmodal" data-backdrop="static" class="modal fade right" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalPreviewLabel">Add Parking</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form  id="savePark" name="savePark">
        <div class="row">
          <div class="col">
            <input type="hidden" class="form-control" name="customer[tenant_id]" id="tenant_id">
            <input type="hidden" class="form-control" name="customer[customer_id]" id="customer_id">
            <div class="form-group">
              <h5 class="font-weight-bold">Details</h5>
              <label for="">Parking Lot No</label>
              <input type="text" class="form-control" name="customer[lot_no]" id="lot_no" required>
            </div>
            <div class="form-group text-right">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>


<!-- Dark Overlay element -->

<div class="overlay"></div>
