import React from 'react';
import { CodeBlock, atomOneLight } from "react-code-blocks";

export default function Code({ text }) {
    return (
        <CodeBlock
            className="my-2"
            text={text}
            language={"javascript"}
            showLineNumbers={true}
            theme={atomOneLight}
        />
    );  
}