import { useEffect, useState } from "react";

import NotificacionsSVG from "../SVG/Notificacions";
import { NotificationCard, ScrollArea } from "@/components";

import mData from "@/MOCK_DATA.json";
import { Order } from "@/interfaces/table-dto";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Order[]>([]);
  useEffect(() => {
    mData.map((item) => {
      if (item.state.includes("Inicio")) {
        setNotifications((prevState) => [...prevState, item]);
      }
    });
  }, []);
  return (
    <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
      {notifications.length > 0 && (
        <span className="bg-red-600 rounded-lg text-white absolute -bottom-[5px] right-0 z-10 py-[2.5px] px-[5px] text-[10px]">
          {notifications.length}
        </span>
      )}
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <NotificacionsSVG />
      </button>
      {open && (
        <ScrollArea className="!absolute bg-white top-[50px] -left-[160px] border border-slate-700 rounded-sm h-[250px] w-[200px]">
          {notifications.length > 0 &&
            notifications.map((item) => (
              <NotificationCard key={item.id} item={item} />
            ))}
        </ScrollArea>
      )}
    </div>
  );
};

export default Notifications;
