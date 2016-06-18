<?php

class Wallets extends db
{

    public $db = null;

    public function __construct()
    {
        $this->db = parent::init();
    }

    /**
     * @see getList()
     */
    public function getList()
    {
        $sth = $this->db->prepare("SELECT * FROM t_wallets");
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    /**
     * @see getItem()
     * @param $id - this is ID spender
     */
    public function getItem($id)
    {
        $sth = $this->db->prepare("SELECT * FROM t_wallets WHERE ID=:ID");
        $sth->execute(array(
            'ID' => $id
        ));
        $result = $sth->fetch(PDO::FETCH_ASSOC);
        return $result;
    }

    /**
     * @see add()
     * @param Array $formPacket Collection of form items along with direct data
     * @return Array response packet
     */
    public function add($formPacket)
    {
        $isNagative = 'F';
        $result = false;
        if (!empty($formPacket['IS_NEGATIVE'])) {
            $isNagative = $formPacket['IS_NEGATIVE'] == 'on' ? 'T' : 'F';
        }
        try {
            $sql = $this->db->prepare("INSERT INTO t_wallets(
                NAME,
                BALANCE,
                TYPE,
                IS_NEGATIVE,
                ICON
            ) 
            VALUES(
                :NAME,
                :BALANCE,
                :TYPE,
                :IS_NEGATIVE,
                :ICON
            );");
            $result = $sql->execute(array(
                'NAME' => $formPacket['NAME'],
                'BALANCE' => $formPacket['BALANCE'],
                'TYPE' => $formPacket['TYPE'],
                'IS_NEGATIVE' => $isNagative,
                'ICON' => $formPacket['ICON']
            ));

        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }

        return [
            'success' => true,
            'message' => 'ok'
        ];
    }


    /**
     * @see add()
     * @param Array $formPacket Collection of form items along with direct data
     * @return Array response packet
     */
    public function spend($formPacket)
    {
        $statement = $this->db->prepare("UPDATE  t_spenders SET SPEND = SPEND + :SPEND WHERE ID=:ID_SPENDER;");

        $result = $statement->execute(array(
            'SPEND' => $formPacket['SPEND'],
            'ID_SPENDER' => $formPacket['ID_SPENDER']
        ));

        $response = [];
        $success = $result;
        $response['success'] = $success;
        $response['debug_formPacket'] = $formPacket;

        return $response;
    }

    public function edit($formPacket)
    {
        $isNagative = 'F';
        if (!empty($formPacket['IS_NEGATIVE'])) {
            $isNagative = $formPacket['IS_NEGATIVE'] == 'on' ? 'T' : 'F';
        }
        try {
            $sql = $this->db->prepare("UPDATE t_wallets SET
                NAME = :NAME,
                BALANCE = :BALANCE,
                TYPE = :TYPE,
                IS_NEGATIVE = :IS_NEGATIVE,
                ICON = :ICON
                WHERE ID = :ID;
            ");
            $result = $sql->execute(array(
                'ID' => $formPacket['ID'],
                'NAME' => $formPacket['NAME'],
                'BALANCE' => $formPacket['BALANCE'],
                'TYPE' => $formPacket['TYPE'],
                'IS_NEGATIVE' => $isNagative,
                'ICON' => $formPacket['ICON']
            ));

        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }

        return [
            'success' => $result,
            'id' => $formPacket['ID'],
            'message' => 'ok'
        ];

    }

    public function delete($id)
    {
        $result = false;
        try {
            $sql = $this->db->prepare("DELETE FROM t_wallets WHERE ID=:ID;");
            $result = $sql->execute([
                'ID' => $id
            ]);
            return [
                'success' => $result
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
        return [
            'success' => $result,
            'message' => 'ok'
        ];
    }

    public function disable()
    {
    }
}