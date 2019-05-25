$(document).ready(function(){
	
	iniSelect2();
});

function formatState (state) {
	console.log(state);
	if (!state.id) { return state.text; }
	var $state = $(
	  '<div style="height:20px !important; width:20px !important; padding:9px !important;" class="'+state.iso2.toLowerCase()+'"></div><span>'+state.name +' (+'+state.id+')'+'</span>'
   );
   return $state;
};

function iniSelect2(){
		$("select").select2({
		placeholder: 'Select allowed countries',
		width: '50%',
		selectOnClose: false,
		tags: false,
		templateResult: formatState,
		templateSelection: formatState,
		tokenSeparators: [',', ' '],
		ajax: {
			dataType : "json",
			url      : "assets/names.php",
			data:function(params){
				var query={
					q:params.term
				};
				return query;
			},
		},    
	});
}