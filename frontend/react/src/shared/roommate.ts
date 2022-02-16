import { RoommateProfile } from "./roommateProfile";

export interface Roommate {
  username: string;
  password: string;
  profile: RoommateProfile;
  roommateList: RoommateProfile[];
}
