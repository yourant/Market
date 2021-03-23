<?php

class apiModel extends CI_model{

  public function __construct() {
       parent::__construct();

       // To set session inside the model could be use to get session ids.
       $this->load->library('session');
       $this->load->helper('url');
       $this->load->database();
   }

   public function searchStall($search,$searchcat)
   {
     $this->db->where("concat($searchcat)",$search);
     $this->db->join('tenant', 'tenant.fk_customer_id=customer.customer_id');
     $this->db->join('stall', 'stall.tenant_id=tenant.tenant_id');
		 $query = $this->db->get('customer');
		 
		 return $query->result();
   }

   public function saveTransaction($table,$data,$count)
   {
     $query = $this->db->insert($table,$data);
     $transaction_id = $this->db->insert_id();
     return array('query'=> $query, 'id'=>$transaction_id, 'count' => $count);
   }
}

?>
