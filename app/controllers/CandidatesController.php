<?php

namespace App\Controllers;

use App\Models\Candidate;
use App\Models\IssuesSimple;
use App\Models\IssuesDetail;
use Response;

class CandidatesController extends \BaseController {
	
	private $candidate;
	private $issuesSimple;
	private $issuesDetail;

	public function __construct(Candidate $candidate, IssuesSimple $issuesSimple, IssuesDetail $issuesDetail)
	{
		$this->candidate    = $candidate;
		$this->issuesSimple = $issuesSimple;
		$this->issuesDetail = $issuesDetail;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$data = $this->candidate->all()->toArray();

		return Response::json($data);
	}//END index

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$data = $this->candidate->find($id)->toArray();

		// get issues for specified candidate
		$simple = $this->issuesSimple->where('candidate_id', $id)->first();
		$detail = $this->issuesDetail->where('candidate_id', $id)->first();
			
		// make sure issues are not empty
		if ($simple) {
			$data['issues_simple'] = $simple->toArray();
		} else {
			$data['issues_simple'] = array();
		}

		if ($detail) {
			$data['issues_detail'] = $detail->toArray();
		} else {
			$data['issues_detail'] = array();
		}

		return Response::json($data);
	}//END show

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
}
