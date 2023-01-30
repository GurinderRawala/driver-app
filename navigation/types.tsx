export type RootStackParamList = {
    Trips: undefined;
    Payroll: undefined;
    LoadReport: {
      stopID: string; // uuid of the shipper or receiver 
      arrival: string; // arrival time and date at the stop
      depart: string; // departure time and date at the stop
    };
  };