<?php
// defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
// header("Access-Control-Allow-Origin: *");

class Market_android extends REST_Controller {

    public function __construct()
    {
        parent::__construct();
<<<<<<< HEAD
        $this->load->model('market_model','model');
=======

        $this->load->model('Market_model','model');
>>>>>>> dd56c4a39da6acde921351948524313aa5d5cf07
    }

    public function getStallInfo_get(){
        $stall_num = $this->input->get('info');

        $query = $this->model->getStallInfo($stall_num);

        $this->response($query, REST_Controller::HTTP_OK);
    }

    public function getAmbulantInfo_get()
    {
        $firstname = $this->input->get('info');

        $query = $this->model->getAmbulantInfo($firstname);

        $this->response($query, REST_Controller::HTTP_OK);
    }


    public function getTransactions_get()
    {
        $transact = $this->input->get('info');

        $query = $this->model->getTransactions($transact);

        $this->response($query, REST_Controller::HTTP_OK);
    }

<<<<<<< HEAD

    public function RegisterAmbulant()
=======
    
    public function RegisterAmbulant_get()
>>>>>>> dd56c4a39da6acde921351948524313aa5d5cf07
    {
        $registerambulant = $this->input->get('info');

        $query = $this->model->RegisterAmbulant($registerambulant);

        $this->response($query, REST_Controller::HTTP_OK);
    }

    public function login_post()
    {
        $username = $this->input->post('username');
        $password = $this->input->post('password');

        $query = $this->model->loginAuth($username,$password);

        $this->response($query, REST_Controller::HTTP_OK);
    }










}
