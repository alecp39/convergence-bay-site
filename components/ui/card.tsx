import * as React from "react";
export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`border bg-white shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ children }: React.PropsWithChildren) {
  return <div className="px-4 pt-4">{children}</div>;
}
export function CardTitle({ children }: React.PropsWithChildren) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}
export function CardContent({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-4 pb-4 ${className}`}>{children}</div>;
}
