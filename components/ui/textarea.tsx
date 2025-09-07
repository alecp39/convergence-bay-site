import * as React from "react";
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`w-full rounded-lg border px-3 py-2 ${props.className ?? ""}`} />;
}
