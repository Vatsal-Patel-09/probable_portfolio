"use client"
import React, { useEffect } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

interface Block {
    id: string;
    type: string;
    data: any;
}

interface Props {
    block: Block;
}

const CodeHighlighter = ({ block }: Props) => {
    useEffect(() => {
        hljs.highlightAll();
    }, [block]);

    return (
        <pre key={block.id} className="bg-transparent overflow-auto">
            <code className="hljs">{block.data.code}</code>
        </pre>
    );
};

export default CodeHighlighter;
