import man1 from "@/assets/avatars/man1.png";
import man3 from "@/assets/avatars/man3.png";
import man4 from "@/assets/avatars/man4.png";
import woman1 from "@/assets/avatars/woman1.png";
import woman2 from "@/assets/avatars/woman2.png";
import woman3 from "@/assets/avatars/woman3.png";
import woman4 from "@/assets/avatars/woman4.png";

export const headerAvatar = woman4;

export interface Patient {
  id: string;
  name: string;
  identifier: string;
  gender: "Male" | "Female";
  date: string;
  time: string;
  address: string;
  phone: string;
  /** Photo avatar; when absent, `initials` is rendered instead. */
  avatar?: string;
  initials?: string;
  initialsBg?: string;
  initialsFg?: string;
  /** Shows the unread/notification dot on the first action. */
  unread?: boolean;
}

export const patients: Patient[] = [
  { id: "01", name: "Jack Maa", identifier: "GIKUN37353", gender: "Male", date: "2024/08/06", time: "09:32:21", address: "Kicukiro", phone: "0789650093", avatar: man1 },
  { id: "02", name: "Manzi dider", identifier: "GIKUN37353", gender: "Male", date: "2024/08/06", time: "09:32:21", address: "Kicukiro", phone: "0789650093", avatar: woman1 },
  { id: "03", name: "Gisa Arlette", identifier: "GIKUN37353", gender: "Female", date: "2024/08/06", time: "09:32:21", address: "Gasabo", phone: "0789650093", initials: "GA", initialsBg: "#DEF7EA", initialsFg: "#2BA56F", unread: true },
  { id: "04", name: "Abraham Kamau", identifier: "GIKUN37353", gender: "Male", date: "2024/08/06", time: "09:32:21", address: "Nyarugenge", phone: "0789650093", avatar: man3 },
  { id: "05", name: "Abayizera Bertrand", identifier: "GIKUN37353", gender: "Male", date: "2024/08/06", time: "09:32:21", address: "Kicukiro", phone: "0789650093", avatar: woman2 },
  { id: "06", name: "Abayo Yvette", identifier: "GIKUN37353", gender: "Female", date: "2024/08/06", time: "09:32:21", address: "Kicukiro", phone: "0789650093", avatar: man4 },
  { id: "07", name: "Mushimiyimana Bertin", identifier: "GIKUN37353", gender: "Male", date: "2024/08/06", time: "09:32:21", address: "Kicukiro", phone: "0789650093", avatar: woman3 },
  { id: "08", name: "Ngoga Frank", identifier: "GIKUN37353", gender: "Male", date: "2024/08/06", time: "09:32:21", address: "Kicukiro", phone: "0789650093", initials: "NF", initialsBg: "#DCE9FF", initialsFg: "#2F78EE" },
];
