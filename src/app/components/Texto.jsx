"use client"
import { TextField, Label, Input } from 'react-aria-components';

function MyTextField({ label,  tipo, id,  validation, error, required, mode, placeholder, patron, evento, eventoblur, valor}) {
  
  return (
    <TextField  name={id} type={tipo}  inputMode={mode} validationState={validation} errorMessage={error} isRequired={required} className={'flex flex-col items-start w-full mb-5 gap-y-3'}  defaultValue={valor}  pattern={patron}>
      <Label  className={"text-sm font-medium"}  > {label} </Label>
      <Input id={id} className={"w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none "} placeholder={placeholder} onChange={evento} onBlur={eventoblur}  /> 
     
    </TextField>
  );
}

export default MyTextField;
