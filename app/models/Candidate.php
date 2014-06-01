<?php

namespace App\Models;

use DB;

class Candidate extends \Eloquent
{
    public $timestamps = false;

    public function election()
    {
        $this->hasOne('Election', 'id', 'election_id');
    }

    public function getCandidateIds($electionId)
    {
        $candidates = DB::table('candidates')->select('id')->where('election_id', $electionId)->get();

        $returnArray = array();
        foreach ($candidates as $candidate) {
            $returnArray[] = $candidate->id;
        }
        return $returnArray;
    }
}