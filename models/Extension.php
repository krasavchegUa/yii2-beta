<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "ext_extensions".
 *
 * @property integer $id
 * @property string $title
 * @property string $class
 * @property integer $status
 * @property integer $sort
 */
class Extension extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'ext_extensions';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'class', 'status', 'sort'], 'required'],
            [['status', 'sort'], 'integer'],
            [['title', 'class'], 'string', 'max' => 100]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'Pk'),
            'title' => Yii::t('app', 'Название'),
            'class' => Yii::t('app', 'Класс'),
            'status' => Yii::t('app', 'Элемент активен?'),
            'sort' => Yii::t('app', 'Сортировка'),
        ];
    }
}
