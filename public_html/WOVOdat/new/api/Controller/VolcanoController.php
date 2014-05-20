<?php
	class VolcanoController {

		/**
		*	@return 
		*		volcano list
		*/
		function loadVolcanoList() {
			$result = VolcanoRepository::getVolcanoList();
			return $result;
		}	

	}