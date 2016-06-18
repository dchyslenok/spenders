<?php
require('config.php');
header('Content-Type: text/javascript');

$API = get_extdirect_api();
$actions = array();

foreach ($API as $aname=>&$a) {
    $methods = array();
    foreach ($a['methods'] as $mname=>&$m) {
        if (isset($m['len'])) {
            $md = array(
                'name'=>$mname,
                'len'=>$m['len']
            );
        } else {
            $md = array(
                'name'=>$mname,
                'params'=>$m['params']
            );
        }
        if (isset($m['formHandler']) && $m['formHandler']) {
            $md['formHandler'] = true;
        }
        $methods[] = $md;
    }
    $actions[$aname] = $methods;
}

$cfg = array(
    'url'=>'php/router.php',
    'type'=>'remoting',
    'actions'=>$actions
);

echo 'var Ext = Ext || {}; Ext.REMOTING_API = ';

echo json_encode($cfg);
echo ';';