import * as React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import styled from "styled-components";
// import renderHTML from "react-render-html";

interface IProps {
  value: string;
}

class Paragraph extends React.Component<IProps> {
  public timeout: any = null;
  render() {
    return (
      <Wrapper>
        <CKEditor
          editor={InlineEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote"
            ]
          }}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
  private handleChange = (event: any, editor: any) => {
    const content = editor.getData();
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      const data = {
        v: content
      };
      console.log(data);
    }, 2500);
  };
}

export default Paragraph;

const Wrapper = styled.div`
  position: relative;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--ck-color-base-active);
    .inner,
    .drag-handle {
      opacity: 1;
    }
  }
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    padding: 2px 6px;
    background-color: var(--ck-color-base-active);
    color: #fff;
    font-size: 11px;
    opacity: 0;
    transition: opacity 250ms ease;
  }
`;
