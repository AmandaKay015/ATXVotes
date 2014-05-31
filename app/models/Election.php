<?php

class Election extends \Eloquent
{
    public function candidates()
    {
        return $this->hasMany('Candidate');
    }
}