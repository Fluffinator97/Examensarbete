export const NumberofDefects = [
  {
    Location: "Customer",
    High: "1",
    Medium: "5",
    Low: "15",
  },
  {
    Location: "Late",
    High: "5",
    Medium: "15",
    Low: "25",
  },
  {
    Location: "Early",
    High: "25",
    Medium: "50",
    Low: "100",
  },
];

export const AverageLeadTime = [
  {
    Location: "Customer",
    High: "5",
    Medium: "3",
    Low: "1",
  },
  {
    Location: "Late",
    High: "3",
    Medium: "2",
    Low: "1",
  },
  {
    Location: "Early",
    High: "10",
    Medium: "8",
    Low: "7",
  },
];

export const NumberofDeliveries = [
  {
    Phase: "PI",
    Epic: "2",
    Feature: "20",
    Story: "200",
  },
  {
    Phase: "Sprint",
    Epic: "1",
    Feature: "13",
    Story: "50",
  },
];

export const DeliveredStoryPoints = [
  {
    Phase: "PI",
    Epic: "50",
    Feature: "50",
    Story: "50",
  },
  {
    Phase: "Sprint",
    Epic: "10",
    Feature: "10",
    Story: "10",
  },
];

export const CycleTime = [
  {
    CycleTime: "Epic",
    NrDays: "30",
  },
  {
    CycleTime: "Feature",
    NrDays: "14",
  },
  {
    CycleTime: "Story",
    NrDays: "7",
  },
];

export const LeadTime = [
  {
    CycleTime: "Epic",
    NrDays: "30",
  },
  {
    CycleTime: "Feature",
    NrDays: "14",
  },
  {
    CycleTime: "Story",
    NrDays: "7",
  },
];

export default {
  NumberofDefects,
  AverageLeadTime,
  NumberofDeliveries,
  DeliveredStoryPoints,
  CycleTime,
  LeadTime,
};
