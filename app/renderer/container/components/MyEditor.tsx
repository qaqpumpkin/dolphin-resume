import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import React, { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

interface EditorProps {
  editorHtml: string;
  onEditorChange: (html: string) => void;
}

function MyEditor(props: EditorProps) {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  const { editorHtml, onEditorChange } = props;
  // 编辑器内容
  const [html, setHtml] = useState('');

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml(editorHtml);
    });
  }, []);

  const onChange = (html: string) => {
    setHtml(html);
    onEditorChange(html);
  };
  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    toolbarKeys: [
      'undo',
      'redo',
      'headerSelect',
      'color',
      'bold',
      'underline',
      'italic',
      'bulletedList',
      'numberedList',
      {
        key: 'group-more-justify', // 必填，要以 group 开头
        title: '对齐方式', // 必填
        iconSvg:
          '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>', // 可选
        menuKeys: ['justifyLeft', 'justifyCenter', 'justifyRight'], // 下级菜单 key ，必填
      },
      'clearStyle',
    ],
  }; // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
    scroll: false,
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onEditorChange={(editor: IDomEditor) => onChange(editor.getHtml())}
        mode="default"
        style={{ height: '300px', overflowY: 'hidden' }}
      />
    </div>
  );
}

export default MyEditor;
