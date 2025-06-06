import React from "react";

interface Block {
    id: string;
    type: string;
    data: any;
}

interface Props {
    blocks: Block[];
}

const BlockParser: React.FC<Props> = ({ blocks }) => {
    return (
        <div className="prose prose-lg max-w-none">
            {blocks.map((block) => {
                switch (block.type) {
                    case "paragraph":
                        return (
                            <p key={block.id} className="text-base ml-6 text-primary">
                                {block.data.text}
                            </p>
                        );

                    case "header":
                        const HeaderTag = `h${block.data.level}` as keyof JSX.IntrinsicElements;
                        return (
                            <HeaderTag key={block.id} className="font-bold">
                                {block.data.text}
                            </HeaderTag>
                        );

                    case "nestedlist":
                        const renderList = (items: any[]) => (
                            <ul className="list-disc list-inside text-primary">
                                {items.map((item: any, i: number) => (
                                    <li key={i}>
                                        {item.content}
                                        {item.items && renderList(item.items)}
                                    </li>
                                ))}
                            </ul>
                        );
                        return <div key={block.id}>{renderList(block.data.items)}</div>;

                    case "code":
                        return (
                            <pre key={block.id} className="text-white p-4 rounded bg-gray-900">
                                <code>{block.data.code}</code>
                            </pre>
                        );

                    case "image":
                        return (
                            <figure key={block.id} className="flex flex-col items-center">
                                <img
                                    src={"https://test-directus.jcic.online" + block.data.file.url}
                                    alt={block.data.caption}
                                    className="max-w-full h-auto"
                                />
                                {block.data.caption && (
                                    <figcaption className="text-sm text-gray-500 mt-2">
                                        {block.data.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case "table":
                        return (
                            <table key={block.id} className="table-auto border border-gray-300">
                                <tbody>
                                    {block.data.content.map((row: string[], rowIndex: number) => (
                                        <tr key={rowIndex}>
                                            {row.map((cell: string, cellIndex: number) => (
                                                <td key={cellIndex} className="border px-4 py-2">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        );

                    case "quote":
                        return (
                            <blockquote
                                key={block.id}
                                className="border-l-4 border-gray-500 pl-4 italic text-gray-700"
                            >
                                <p>{block.data.text}</p>
                                {block.data.caption && (
                                    <footer className="text-sm mt-1">— {block.data.caption}</footer>
                                )}
                            </blockquote>
                        );

                    case "checklist":
                        return (
                            <ul key={block.id} className="space-y-2">
                                {block.data.items.map((item: any, idx: number) => (
                                    <li key={idx} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.checked}
                                            readOnly
                                            className="mr-2"
                                        />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        );

                    case "raw":
                        return (
                            <div
                                key={block.id}
                                dangerouslySetInnerHTML={{ __html: block.data.html }}
                            />
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlockParser;
