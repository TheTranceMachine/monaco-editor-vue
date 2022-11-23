<template>
  <Editor />
  <br />
  <DiffEditor />
</template>

<script setup lang="ts">
  import Editor from './components/MonacoEditor.vue';
  import DiffEditor from './components/MonacoDiffEditor.vue';
</script>
