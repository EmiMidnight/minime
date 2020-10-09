import { BackgroundCode, CourseNo, TitleCode } from "../model/base";
import { Car } from "../model/car";
import { MissionState } from "../model/mission";
import { Settings } from "../model/settings";
import { Story } from "../model/story";
import { Tickets } from "../model/tickets";
import { Unlocks } from "../model/unlocks";
import { AimeId } from "../../../model";

export interface SaveProfileRequest {
  type: "save_profile_req";
  aimeId: AimeId;
  version: number;
  lv: number;
  exp: number;
  fame: number;
  dpoint: number;
  mileage: number;
  title: TitleCode;
  titles: Set<TitleCode>;
  background: BackgroundCode;
  coursePlays: Map<CourseNo, number>;
  missions: MissionState;
  car: Car;
  story: Story;
  unlocks: Unlocks;
  tickets: Tickets;
  settings: Settings;
}
