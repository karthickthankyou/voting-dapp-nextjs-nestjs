import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from './Table'

export default {
  title: 'atoms/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
