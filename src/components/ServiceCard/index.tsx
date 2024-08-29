import { ElementType } from "react";
import "./styles.css";

type ServiceCardProps = {
  Icon: ElementType;
  title: string;
  description: string;
};

export default function ServiceCard({
  Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <Icon />
      <span className="service-card-title">{title}</span>
      <span className="service-card-description">{description}</span>
    </div>
  );
}
