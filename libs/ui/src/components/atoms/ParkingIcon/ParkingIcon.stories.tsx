import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ParkingIcon } from './ParkingIcon'

export default {
  title: 'src/components/atoms/ParkingIcon',
  component: ParkingIcon,
} as ComponentMeta<typeof ParkingIcon>

const Template: ComponentStory<typeof ParkingIcon> = (args) => (
  <ParkingIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
