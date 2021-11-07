import { Filter } from "./filters.types";

export const filters: Filter[] = [
  { id: 0, name: "Все", value: "all" },
  { id: 1, name: "Без пересадок", value: "noone" },
  { id: 2, name: "1 пересадка", value: "stop_1" },
  { id: 3, name: "2  пересадки", value: "stop_2" },
  { id: 4, name: "3  пересадки", value: "stop_3" },
];
