import builder from "./queryReq";

export  const Agents = builder(
    {
        baseUrl:'api/agents',

    }
)
export  const Contacts = builder(
    {
        baseUrl:'api/contacts',


    }
)
export  const Missions = builder(
    {
        baseUrl:'api/missions',

    }
)

export  const Specialties = builder(
    {
        baseUrl:'api/specialties',

    }
)
export  const Stashs = builder(
    {
        baseUrl:'api/stashs',

    }
)
export  const Targets = builder(
    {
        baseUrl:'api/targets',

    }
)