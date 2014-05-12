<?php
/**
 * Created by PhpStorm.
 * User: Красавчег
 * Date: 19.04.14
 * Time: 9:51
 */

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class AngularController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionProducts()
    {
        $array = array(
            array(
                'id' => 1,
                'sender' => 'jean@somecompany.com',
                'subject' => 'Hi there, old friend',
                'date' => 'Dec 7, 2013 12:32:00',
                'recipients' => array(
                    'greg@somecompany.com'
                ),
                'message' => 'Hey, we should get together for lunch sometime and catch up.' .
                    'There are many things we should collaborate on this year.'
            ),
            array(
                'id' => 2,
                'sender' => 'web@somecompany.com',
                'subject' => 'Hi1 there, old friend',
                'date' => 'Dec 3, 2013 12:32:00',
                'recipients' => array(
                    'web@somecompany.com'
                ),
                'message' => 'Hey, we should get together for lunch sometime and catch up.' .
                    'There are many things we should collaborate on this year.'
            ),
        );

        return json_encode($array);
    }
} 