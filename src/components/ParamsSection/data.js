import { dice, clock, check, cam, chart, lapsed } from "../../assets";
export const data = [
  {
    icon: dice,
    label: "Random question",
    info: "Number of random questions",
    toggle: false,
  },
  {
    icon: dice,
    label: "Random question",
    info: "Number of random questions",
    toggle: false,
  },
  {
    icon: clock,
    label: "Time per question",
    info: "When the countdown is finished, the system will automatically move to the next question.",
    toggle: false,
    unit: "s",
  },
  {
    icon: check,
    label: "Passing score",
    info: "Score needed to pass the test",
    toggle: false,
    unit: "%",
  },
  {
    icon: cam,
    label: "Webcam validation",
    info: "allow/disable webcam validation",
    toggle: true,
  },
  {
    icon: chart,
    label: "Time expected",
    info: "Time expected to finish the test",
    toggle: false,
    unit: "min",
  },
  {
    icon: lapsed,
    label: "Attempts",
    info: "Number of attempts for the test",
    toggle: false,
  },
];
