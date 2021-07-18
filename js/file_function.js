	$('#selectType').on('change',function(){
	if($(this).val()==="file"){
		$('#file_upload').show();
		$('#file_link_upload').hide();
		$('#file').attr('required', 'required');
		$('#file_link_upload_input').removeAttr('required');
		
	} else if($(this).val()==="file_link"){
		$('#file_link_upload').show();
		$('#file_upload').hide();
		$('#file_link_upload_input').attr('required', 'required');
		$('#file').removeAttr('required');
	}
});

	$('#files_cat_select').on('change',function(){
	if($(this).val()==="add_new"){
		$('#new_cat').show();
		//$('#old_cat').hide();
		$('#new_cat_input').attr('required', 'required');
		$('#new_cat_input').attr('name', 'cat');
		$('#files_cat_select').removeAttr('required');
		$('#files_cat_select').removeAttr('name');
		
	} else {
		//$('#old_cat').show();
		$('#new_cat').hide();
		$('#files_cat_select').attr('required', 'required');
		$('#files_cat_select').attr('name', 'cat');
		$('#new_cat_input').removeAttr('required');
		$('#new_cat_input').removeAttr('name');
	}
});	

$('#files_year_select').on('change',function(){
	if($(this).val()==="add_new"){
		$('#new_year').show();
		//$('#old_year').hide();
		$('#new_year_input').attr('required', 'required');
		$('#new_year_input').attr('name', 'recommanded_year');
		$('#files_year_select').removeAttr('required');
		$('#files_year_select').removeAttr('name');
		
	} else{
		//$('#old_year').show();
		$('#new_year').hide();
		$('#files_year_select').attr('required', 'required');
		$('#files_year_select').attr('name', 'recommanded_year');
		$('#new_year_input').removeAttr('required');
		$('#new_year_input').removeAttr('name');
	}
});
