import { Input as InputFC } from "@/components/ui/input";

type InputProp = {
  label: string;
  id?: string;
  type?: string;
  dataName?: string;
  className?: string;
  classNameDiv?: string;
  classNameLabel?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProp> = ({
  label,
  id,
  type,
  dataName,
  className,
  classNameDiv,
  classNameLabel,
  disabled,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`w-full ${classNameDiv && classNameDiv}`}>
      <label htmlFor={id} className={`${classNameLabel && classNameLabel}`}>
        {label}*
      </label>
      <InputFC
        id={id}
        className={`outline-none focus-visible:ring-offset-0 ${className}`}
        data-name={dataName}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        disabled={disabled}
      />
      {error && error.length > 0 && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
