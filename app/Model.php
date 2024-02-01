<?php

namespace myExplorer;

abstract class Model
{
    protected static function find(array $propsAndVals = ['id' => -1]): Model
    {

    }

    protected static function findById(int $id = -1): Model
    {
        if ($id < 0){
            throw new \Exception(self::class .": user Id must be more then 0");
        }


    }
    protected static function assignData(Model $model, array $data): void
    {
        foreach ($data as $key => $val){
            if ( property_exists($model, $key) ) {
                $model->{$key} = $val;
            }
        }
    }
}