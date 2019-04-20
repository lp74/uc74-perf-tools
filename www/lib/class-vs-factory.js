import { Person as PersonClass} from './person.js';
import { Person as PersonFactory } from './person-factory.js';

const btn1 = document.getElementById('person');
const handle1 = btn1.addEventListener('click', createPerson(() => new PersonClass('A', Math.random())));

const btn2 = document.getElementById('person-factory');
const handle2 = btn2.addEventListener('click', createPerson(() => PersonFactory('A', Math.random())));

function createPerson(strategy) {
  return async function create(event) {
    event.preventDefault();
    let person;
    for (let i = 0; i < 1e8; i++) {
      person = strategy();
    }
    return person;
  };
}
