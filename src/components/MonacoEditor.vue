<template>
	<div id='editor'></div>
</template>
<script setup>
import { onMounted } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

onMounted(() => {
  monaco.editor.create(document.getElementById('editor'), {
		value: "function hello() {\n\talert('Hello world!');\n}",
		automaticLayout: true,
		language: 'javascript',
		theme: 'vs-dark',
		minimap: { enabled: false },
	});
})
</script>