import React from 'react'
import { topics } from '~/utils/consts'
import { Topic } from './topic'
import { SidebarSection } from '~/components/sidebar-section'

export const Topics = () => {
    return (
        <SidebarSection title='İlgini çekebilecek gündemler' more='/trends'>
             {
                    topics.map((topic, idx) => <Topic item={topic} key={idx} />)
                }
        </SidebarSection>
      
    )
}
