import apartmentBathroom from '../assets/images/apartment-bathroom.png';
import apartmentCooking from '../assets/images/apartment-cooking.png';
import apartmentEmpty from '../assets/images/apartment-empty.png';
import apartmentRestingSofa from '../assets/images/apartment-resting-sofa.png';
import apartmentSleeping from '../assets/images/apartment-sleeping.png';
import apartmentWorkStart from '../assets/images/apartment-work-start.png';

export const SCENARIOS = {
  workStart: {
    id: 'workStart',
    label: 'Work Start',
    image: apartmentWorkStart,
  },
  bathroom: {
    id: 'bathroom',
    label: 'Bathroom',
    image: apartmentBathroom,
  },
  cooking: {
    id: 'cooking',
    label: 'Cooking',
    image: apartmentCooking,
  },
  resting: {
    id: 'resting',
    label: 'Resting',
    image: apartmentRestingSofa,
  },
  sleeping: {
    id: 'sleeping',
    label: 'Sleeping',
    image: apartmentSleeping,
  },
  empty: {
    id: 'empty',
    label: 'Apartment',
    image: apartmentEmpty,
  },
};

export const DEFAULT_SCENARIO_ID = 'workStart';
