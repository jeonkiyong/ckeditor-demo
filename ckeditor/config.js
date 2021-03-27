CKEDITOR.editorConfig = function( config ) {
	config.extraPlugins = 'youtube';
	config.toolbar = [
		{ name: '1', items: [ 'Font', 'FontSize', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat' ] },
		{ name: '2', items: [ 'Image', 'Table', 'TextColor', 'BGColor', 'NumberedList', 'BulletedList', 'Blockquote', 'Link', 'Youtube', 'Source', 'Maximize' ] }
	];
};