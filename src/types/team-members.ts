export interface TeamMember {
  id: number
  name: string
  department: string
  skills: string[]
  avatar: string
  position: string
  email: string
  bio: string
}

export type TeamMembersList = TeamMember[]

export type TeamMembersLayouts = 'grid' | 'list'
