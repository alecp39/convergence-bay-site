import * as React from "react";
export function Button({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-white bg-sky-600 hover:bg-sky-700 transition ${className}`}
      {...props}
    />
  );
}
