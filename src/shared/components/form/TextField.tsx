type TextFieldProps<T, K extends keyof T> = {
  name: K;
  type: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Partial<{ [P in K]: boolean | string }>;
  hasError: boolean;
};

function TextField<T, K extends keyof T>({
  name,
  type,
  value,
  onChange,
  errors,
  hasError,
}: TextFieldProps<T, K>) {
  return (
    <>
      <input
        type={type}
        name={name as string}
        id={name as string}
        value={value}
        onChange={onChange}
        className={`rounded-md border-2 px-5 py-2 ${
          hasError ? "border-red-500" : "border-slate-200"
        }`}
      />
      {hasError && errors[name] && (
        <p className="mt-2 text-sm font-medium text-red-600">{errors[name]}</p>
      )}
    </>
  );
}

export default TextField;
