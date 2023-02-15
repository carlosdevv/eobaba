'use client'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import { ReactNode, useState } from 'react'

type TabsComponentProps = {
  tabsProps: {
    valueTab: string
    label: string
    active: boolean
    content: ReactNode
  }[]
}

export function TabsComponent(props: TabsComponentProps) {
  const [value, setValue] = useState(props.tabsProps[0].valueTab)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        {props.tabsProps.map(item => (
          <Tab
            label={item.label}
            value={item.valueTab}
            disabled={!item.active}
            style={{ color: 'var(--primary)', fontSize: '1rem' }}
          />
        ))}
      </TabList>
      {props.tabsProps.map(item => (
        <TabPanel value={item.valueTab}>{item.content}</TabPanel>
      ))}
    </TabContext>
  )
}
