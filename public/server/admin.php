<?php

use myExplorer\Request;
use myExplorer\User;

use myExplorer\Repository\User as UserRep;
use myExplorer\Repository\UserGroup as UserGroupRep;
use myExplorer\Repository\Root as RootRep;
use myExplorer\Repository\Event as EventRep;
use myExplorer\Repository\PublicLink as PublicLinkRep;
use myExplorer\Repository\Setting as SettingRep;

try {
    //$logged = User::checkAuthorization(Request::cookie('login'), Request::cookie('token'));
    //if ($logged){
        //$user = UserRep::find(Request::cookie('login'));
        //if ((int)$user['is_admin']) {
            if (Request::$action == 'GetUsers') {
                $users = (new UserRep)->getRecords();
                $response = [
                    'Success' => false,
                    'Result' => (object)[
                        'Users' => []
                    ]
                ];
                if ($users) {
                    $response['Success'] = true;
                    foreach ($users as $user) {
                        $response['Result']->Users[] = [
                            $user['id'],
                            $user['group'],
                            $user['login'],
                            $user['full_name'],
                            $user['login_count'],
                            $user['last_login'],
                            $user['created'],
                            $user['modified']
                        ];
                    }
                }
                header('Content-Type: application/json');
                die(json_encode($response));
            }

            if (Request::$action == 'GetGroups') {
                $groups = (new UserGroupRep)->getRecords();
                $response = [
                    'Success' => false,
                    'Result' => (object)[
                        'Groups' => []
                    ]
                ];
                if ($groups) {
                    $response['Success'] = true;
                    foreach ($groups as $group) {
                        $response['Result']->Groups[] = [
                            $group['id'],
                            $group['description'],
                            $group['name'],
                            $group['members'],
                            $group['created'],
                            $group['modified']
                        ];
                    }
                }
                header('Content-Type: application/json');
                die(json_encode($response));
            }

            if (Request::$action == 'GetRootFolders') {
                $roots = (new RootRep)->getRecords();
                $response = [
                    'Success' => false,
                    'Result' => (object)[
                        'RootFolders' => []
                    ]
                ];
                if ($roots) {
                    $response['Success'] = true;
                    foreach ($roots as $root) {
                        $response['Result']->RootFolders[] = [
                            $root['id'],
                            $root['description'],
                            $root['name'],
                            $root['location'],
                            $root['created'],
                            $root['modified']
                        ];
                    }
                }
                header('Content-Type: application/json');
                die(json_encode($response));
            }

            if (Request::$action == 'GetEvents') {
                $events = (new EventRep)->getRecords();
                $response = [
                    'Success' => false,
                    'Result' => (object)[
                        'Events' => []
                    ]
                ];
                if ($events) {
                    $response['Success'] = true;
                    foreach ($events as $event) {
                        $response['Result']->Events[] = [
                            $event['id'],
                            $event['type'],
                            $event['date'],
                            $event['time'],
                            $event['user']
                        ];
                    }
                }
                header('Content-Type: application/json');
                die(json_encode($response));
            }

            if (Request::$action == 'GetPublicLinks') {
                $links = (new PublicLinkRep)->getRecords();
                $response = [
                    'Success' => false,
                    'Result' => (object)[
                        'PublicLinks' => []
                    ]
                ];
                if ($links) {
                    $response['Success'] = true;
                    foreach ($links as $link) {
                        $response['Result']->PublicLinks[] = [
                            $link['id'],
                            $link['name'],
                            $link['linked'],
                            $link['created_by'],
                            $link['hits'],
                            $link['last_hit'],
                            $link['expiration'],
                            $link['hit_lim'],
                            $link['created'],
                            $link['modified']
                        ];
                    }
                }
                header('Content-Type: application/json');
                die(json_encode($response));
            }
        //}
    //}

}catch (Exception $e){
    echo $e->getMessage();
}
