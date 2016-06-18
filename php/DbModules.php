<?php

class dbmodules extends db
{
    public $db = null;

    public function __construct()
    {
        $this->db = parent::init();
    }

    public function getlist()
    {
        //        $_result = $this->db->query("select name,name_group from t_spenders") or
        //        die('connection error: ' . $this->db->connect_error);
        //
                $results = array();
        //
        //        while ($row = $_result->fetch_assoc()) {
        //            array_push($results, $row);
        //        }
        //
        //        $this->db->close();
        //
        //        return $results;


        $sql = $this->db->prepare("SELECT NAME,NAME_GROUP FROM t_spenders WHERE ACTIVE=?");
        $sql->bind_param('s', $isActive);
        $isActive = 'F';

        $sql->execute();
        $sql->store_result();

        $result = $sql->get_result();


        while ($row = $result->fetch_assoc()) {
            array_push($results, $row);
        }

        $sql->free_result();
        $sql->close();

        return $results;
    }

}