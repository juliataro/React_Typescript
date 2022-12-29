import * as React from "react";

// TODO: Use error we should pass it as a parameter in export function
// there for we create interface

interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-center text-red-600">{error}</p>;
}
