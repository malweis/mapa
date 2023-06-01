"use client"
import { TextField, Label, Input, Text } from 'react-aria-components';

function MyTextField({ label,  tipo, id,  validation, required, mode, placeholder}) {
  return (
    <TextField  name={id} type={tipo}  inputMode={mode} validationState={validation} isRequired={required} className={'flex flex-col items-start w-full mb-5 gap-y-3'}>
      <Label  className={"text-sm font-medium"}  > {label} </Label>
      <Input id={id} className={"w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none "} placeholder={placeholder} />
     
    </TextField>
  );
}

export default MyTextField;
