<?php

namespace App\Models;

class Election extends \Eloquent
{
    public $timestamps = false;

    public function candidates()
    {
        return $this->hasMany('App\Models\Candidate', 'election_id', 'id');
    }
}