import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Pagination } from './Pagination'
import { PaginationProps } from '@mui/material'

export default {
  title: 'molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args: PaginationProps) => (
  <Pagination {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  count: 120,
  page: 3,
}
export const CustomRowsPerPage = Template.bind({})
CustomRowsPerPage.args = {
  count: 170,
  page: 3,
}

export const ShowFirstLastButton = Template.bind({})
ShowFirstLastButton.args = {
  count: 3600,
  page: 3,
  showFirstButton: true,
  showLastButton: true,
}
