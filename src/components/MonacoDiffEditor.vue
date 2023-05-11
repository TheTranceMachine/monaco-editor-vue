<template>
	<div id='diff-editor'></div>
</template>
<script setup>
import { onMounted } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

onMounted(() => {
	const originalModel = monaco.editor.createModel(
		'hello world',
		'text/plain'
	);

	const modifiedModel = monaco.editor.createModel(
		'Hello World!',
		'text/plain'
	);

	const diffEditor = monaco.editor
	.createDiffEditor(
		document.getElementById('diff-editor'),
		{
			theme: 'vs-dark',
			originalEditable: true,
			automaticLayout: true,
			minimap: { enabled: false }
		}
	);

	console.log(diffEditor);

	diffEditor.setModel({
		original: originalModel,
		modified: modifiedModel
	});
});
</script>