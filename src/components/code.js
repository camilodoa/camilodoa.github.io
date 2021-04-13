import React from 'react';
import { CodeBlock, github } from "react-code-blocks";

export default function Code({ text }) {
    return (
        <CodeBlock
            className="my-2"
            text={text}
            language={"javascript"}
            showLineNumbers={true}
            theme={github}
        />
    );  
}