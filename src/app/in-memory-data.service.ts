import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
        { id: "11", title: 'WebAppDev', topics: ["development"], people: ["brandon"], createdAt: new Date() },
        { id: "12", title: 'WebAppDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "13", title: 'RestAPIDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "14", title: 'RestAPIDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "15", title: 'WebAppDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "16", title: 'DBDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "17", title: 'WebAppDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "18", title: 'RestAPIDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "19", title: 'DBDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  },
        { id: "20", title: 'WebAppDev', topics: ["development"], people: ["brandon"], createdAt: new Date()  }
    ];
    return {events};
  }
}
