import MuiSwitch, { SwitchProps } from '@mui/material/Switch'

export const Switch = (props: SwitchProps) => {
  return (
    <MuiSwitch
      classes={{
        thumb: 'checked:bg-black bg-white',
        track: 'bg-gray-700',
        checked: 'border-black border',
      }}
      {...props}
    />
  )
}
