import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PulsingDot } from './Dot'

export default {
  title: 'atoms/Dot',
  component: PulsingDot,
} as ComponentMeta<typeof PulsingDot>

const Template: ComponentStory<typeof PulsingDot> = (args) => (
  <div className="relative inline-block">
    <PulsingDot />
    {/* <div>Karthick</div> */}
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
