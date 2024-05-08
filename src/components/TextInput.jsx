export default function TextInput({ value, setValue, label }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
    </div>
  );
}
