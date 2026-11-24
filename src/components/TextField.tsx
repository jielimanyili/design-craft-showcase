import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  success?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export function TextField({
  label,
  hint,
  error,
  success,
  leading,
  trailing,
  id,
  disabled,
  className,
  ...rest
}: TextFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;
  const message = error ?? success ?? hint;
  const messageClass = error
    ? " field__message--error"
    : success
      ? " field__message--success"
      : "";
  const stateClass = error ? " field--error" : success ? " field--success" : "";

  return (
    <div className={`field${stateClass}${className ? ` ${className}` : ""}`}>
      <label className="field__label" htmlFor={inputId}>
        {label}
      </label>
      <div className={`field__control${disabled ? " field__control--disabled" : ""}`}>
        {leading ? (
          <span className="field__affix" aria-hidden="true">
            {leading}
          </span>
        ) : null}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          {...rest}
        />
        {trailing ? (
          <span className="field__affix" aria-hidden="true">
            {trailing}
          </span>
        ) : null}
      </div>
      {message ? (
        <p id={messageId} className={`field__message${messageClass}`}>
          {message}
        </p>
      ) : null}
    </div>
  );
}
