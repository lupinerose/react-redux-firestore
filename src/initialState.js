import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();

export default {
  [id1]: {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: id1 
  },
  [id2]: {
    names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: id2
  }
}

// export default {
//   masterTicketList: {
//     [id1]: {
//       names: 'Ryan & Aimen',
//       location: '4b',
//       issue: 'Redux action is not working correctly.',
//       id: id1 
//     },
//     [id2]: {
//       names: 'Jasmine and Justine',
//       location: '2a',
//       issue: 'Reducer has side effects.',
//       id: id2
//     }
//   },
//   happy: true
// }