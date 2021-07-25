import builder from './EntitySlice'
export  const Agents = builder(
    {
        baseUrl:'api/agents',
        name:'agents'
    }
)
export  const Contacts = builder(
    {
        baseUrl:'api/contacts',
        name:'contacts'
    }
)
export  const Missions = builder(
    {
        baseUrl:'api/missions',
        name:'missions'
    }
)

export  const Specialties = builder(
    {
        baseUrl:'api/specialties',
        name:'specialties'
    }
)
export  const Stashs = builder(
    {
        baseUrl:'api/stashs',
        name:'stashs'
    }
)
export  const Targets = builder(
    {
        baseUrl:'api/targets',
        name:'targets'
    }
)
