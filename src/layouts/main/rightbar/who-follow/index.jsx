import React from 'react'
import { SidebarSection } from '~/components/sidebar-section'
import { UserCard } from '~/components/user-card'
import { whoFollowUsers } from '~/mock'
import { useAccount } from '~/store/auth/hooks'

export const WhoFollow = () => {
    const account = useAccount()
    return (
        <SidebarSection title='Kimi takip etmeli' more={`/connect_people?user_id=${account.id}`}>

            {
                whoFollowUsers.map((user, idx) => <UserCard key={idx} user={user} />)
            }
        </SidebarSection>

    )
}
