import * as monaco from 'monaco-editor';

const originalModel = monaco.editor.createModel(
	/* set from `originalModel`: */ `hello world`,
	"text/plain"
);
const modifiedModel = monaco.editor.createModel(
	/* set from `modifiedModel`: */ `Hello World!`,
	"text/plain"
);

const diffEditor = monaco.editor.createDiffEditor(
	document.getElementById("diff-editor"),
	{
		originalEditable: true,
		automaticLayout: true,
	}
);
diffEditor.setModel({
	original: originalModel,
	modified: modifiedModel,
});