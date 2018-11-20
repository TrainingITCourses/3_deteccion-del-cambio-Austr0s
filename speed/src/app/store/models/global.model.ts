export interface Global {
  launches: any[];
  agencies: any[];
  statuses: any[];
  missionTypes: any[];
}

export const globalInitialState: Global = {
  launches: [],
  agencies: [],
  statuses: [],
  missionTypes: []
};
