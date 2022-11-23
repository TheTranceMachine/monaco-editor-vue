import * as monaco from 'monaco-editor';

const editor = monaco.editor.create(document.getElementById('editor'), {
	value: "function hello() {\n\talert('Hello world!');\n}",
	language: 'javascript',
	theme: 'vs-dark'
});
	
editor.onDidChangeModelContent(() => {
  console.log(editor.getValue());
});

// define a new command
editor.addAction({
  id: 'my-custom-command',
  label: 'My Custom Command',
  keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K],
  run: () => {
    // add your command logic here
    console.log('My custom command executed!');
  }
});