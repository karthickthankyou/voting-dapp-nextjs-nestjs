import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrandIcon } from './BrandIcon'

export default {
  title: 'src/components/atoms/BrandIcon',
  component: BrandIcon,
} as ComponentMeta<typeof BrandIcon>

const Template: ComponentStory<typeof BrandIcon> = (args) => (
  <BrandIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
