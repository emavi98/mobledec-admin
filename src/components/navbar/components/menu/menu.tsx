import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuComponent = () => {
  //const menuList = ['Dashboard']
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to={''}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        : ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
              <NavLink to={'pedidos'}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        : ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    Pedidos
                  </span>
                )}
              </NavLink>
              <NavLink to={'clientes'}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        : ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    Clientes
                  </span>
                )}
              </NavLink>
              <NavLink to={'productos'}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        : ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    Productos
                  </span>
                )}
              </NavLink>
              <NavLink to={'proveedores'}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        : ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    Proveedores
                  </span>
                )}
              </NavLink>
              <NavLink to={'reportes'}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        : ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    Reportes
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
