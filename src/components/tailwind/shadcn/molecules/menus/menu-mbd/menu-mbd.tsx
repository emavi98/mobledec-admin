import { cn } from "lib/utils";
import { NavLink } from "react-router-dom";

export const MenuShadcnMbd = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <NavLink to={""}>
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-sm font-medium transition-colors hover:text-primary"
                : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            }
          >
            Informe
          </span>
        )}
      </NavLink>
      <NavLink to={"pedidos"}>
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-sm font-medium transition-colors hover:text-primary"
                : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            }
          >
            Pedidos
          </span>
        )}
      </NavLink>
      <NavLink to={"productos"}>
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-sm font-medium transition-colors hover:text-primary"
                : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            }
          >
            Productos
          </span>
        )}
      </NavLink>
      <NavLink to={"clientes"}>
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-sm font-medium transition-colors hover:text-primary"
                : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            }
          >
            Clientes
          </span>
        )}
      </NavLink>
      <NavLink to={"proveedores"}>
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-sm font-medium transition-colors hover:text-primary"
                : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            }
          >
            Proveedores
          </span>
        )}
      </NavLink>
    </nav>
  );
};
