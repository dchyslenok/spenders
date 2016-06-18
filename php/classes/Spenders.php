<?php

class Spenders extends db
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
        $sth = $this->db->prepare("SELECT * FROM t_spenders");
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
        $sth = $this->db->prepare("SELECT * FROM t_spenders WHERE ID=:ID");
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
        try {
            $sql = $this->db->prepare("INSERT INTO t_spenders(
                NAME,
                ICON,
                PL_SPEND,
                CR_MONTH
            ) 
            VALUES(
                :NAME,
                :ICON,
                :PL_SPEND,
                :CR_MONTH);
            ");
            $result = $sql->execute(array(
                'NAME' => $formPacket['NAME'],
                'ICON' => $formPacket['ICON'],
                'PL_SPEND' => $formPacket['PL_SPEND'],
                'CR_MONTH' => date('n')
            ));

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

    /**
     * @see add()
     * @param Array $formPacket Collection of form items along with direct data
     * @return Array response packet
     */
    public function spend($form)
    {
        $sth = $this->db->prepare("SELECT * FROM t_wallets WHERE ID=:ID");
        $sth->execute(array(
            'ID' => $form['WALLET_ID']
        ));
        $wallet = $sth->fetch(PDO::FETCH_ASSOC);

        if ($wallet) {
            if ((($wallet['BALANCE'] - $form['SPEND']) < 0) && $wallet['IS_NEGATIVE'] == 'F') {
                return [
                    'success' => false,
                    'message' => 'balans not be negative'
                ];
            }
        }

        try {
            $this->db->beginTransaction();

            $sql = $this->db->prepare("UPDATE  t_wallets SET BALANCE = BALANCE - :SPEND WHERE ID = :WALLET_ID;");
            $tmp = $sql->execute(array(
                'SPEND' => $form['SPEND'],
                'WALLET_ID' => $form['WALLET_ID']
            ));

            $sql = $this->db->prepare("UPDATE  t_spenders SET SPEND = SPEND + :SPEND WHERE ID = :SPENDER_ID;");
            $sql->execute(array(
                'SPEND' => $form['SPEND'],
                'SPENDER_ID' => $form['SPENDER_ID']
            ));
            $this->db->commit();

        } catch (Exception $e) {
            $this->db->rollBack();
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

    public function edit($formPacket)
    {
        try {
            $sql = $this->db->prepare("UPDATE t_spenders SET
                NAME = :NAME,
                ICON = :ICON,
                PL_SPEND = :PL_SPEND
                WHERE ID = :ID;
            ");
            $result = $sql->execute(array(
                'ID' => $formPacket['ID'],
                'NAME' => $formPacket['NAME'],
                'ICON' => $formPacket['ICON'],
                'PL_SPEND' => $formPacket['PL_SPEND']
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
            $sql = $this->db->prepare("DELETE FROM t_spenders WHERE ID=:ID;");
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