<?php

function get_extdirect_api() {

    $API = array(
        'QueryDatabase' => array(
            'methods' => array(
                'getResults' => array(
                    'len' => 1
                ),
                'updateBasicInfo'=>array(
                    'len'=>1
                ),
                'add'=>array(
                    'len' => 0,
                    'formHandler'=>true
                )
            )
        ),
        'Spenders' => array(
            'methods' => array(
                'getList' => array(
                    'len' => 0
                ),
                'getItem' => array(
                    'len' => 1
                ),
                'add' => array(
                    'len' => 0,
                    'formHandler'=>true
                ),
                'spend' => array(
                    'len' => 0,
                    'formHandler'=>true
                ),
                'edit' => array(
                    'len' => 0,
                    'formHandler'=>true
                ),
                'delete' => array(
                    'len' => 1
                ),
                'disable' => array(
                    'len' => 1
                ),
            )
        ),
        'Wallets' => array(
            'methods' => array(
                'getList' => array(
                    'len' => 0
                ),
                'getItem' => array(
                    'len' => 1
                ),
                'add' => array(
                    'len' => 0,
                    'formHandler'=>true
                ),
                'edit' => array(
                    'len' => 0,
                    'formHandler'=>true
                ),
                'delete' => array(
                    'len' => 1
                ),
                'disable' => array(
                    'len' => 1
                ),
                'inValue' => array(
                    'len' => 2
                ),
            )
        ),
        'SpendList' => array(
            'methods' => array(
                'getList' => array(
                    'len' => 0
                )
            )
        )
    );

    return $API;
}