import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReportsPage } from './ReportsPage'

export default {
  title: 'src/components/templates/ReportsPage',
  component: ReportsPage,
} as ComponentMeta<typeof ReportsPage>

const Template: ComponentStory<typeof ReportsPage> = (args) => <ReportsPage />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
