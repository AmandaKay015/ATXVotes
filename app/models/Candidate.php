<?php

class Candidate extends \Eloquent
{
    public function election()
    {
        $this->belongsTo('Election', 'election_id');
    }

    public static function getCandidateIds($electionId)
    {
        $candidates = DB::table('candidates')->select('id')->where('election_id', $electionId)->get();

        $returnArray = array();
        foreach ($candidates as $candidate) {
            $returnArray[] = $candidate->id;
        }
        return $returnArray;
    }
}