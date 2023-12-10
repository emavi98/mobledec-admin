import { Order } from "@/interfaces/table-dto";

const NotificationCard = ({ item }: { item: Order }) => {
  return (
    <div className="border-b-2 border-slate-700 p-2">
      <p>Order N°: {item.order}</p>
      <p>Estado: {item.state}</p>
    </div>
  );
};

export default NotificationCard;
