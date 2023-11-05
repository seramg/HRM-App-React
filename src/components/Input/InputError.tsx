
function InputError({
  error,
}: {
  error:
    | string
    | undefined;
}) {
  console.log(error);
  return (
    <div className="input-error common-flex">
      <span className="material-symbols-outlined">warning</span>
      <span className="error-text">{error}</span>
    </div>
  );
}
export default InputError;
