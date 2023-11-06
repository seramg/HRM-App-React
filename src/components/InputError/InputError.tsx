import InputErrorWrapper from "./inputError.ts";

function InputError({ error }: { error: string | undefined }) {
  return (
    <InputErrorWrapper className="input-error common-flex">
      <span className="material-symbols-outlined">warning</span>
      <span className="error-text">{error}</span>
    </InputErrorWrapper>
  );
}
export default InputError;
